using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;

public static class KzScan
{
    [StructLayout(LayoutKind.Sequential)]
    struct HANDLE_EX
    {
        public IntPtr Object;
        public UIntPtr UniqueProcessId;
        public UIntPtr HandleValue;
        public uint GrantedAccess;
        public ushort CreatorBackTraceIndex;
        public ushort ObjectTypeIndex;
        public uint HandleAttributes;
        public uint Reserved;
    }
    [StructLayout(LayoutKind.Sequential)]
    struct RECT { public int Left, Top, Right, Bottom; }

    [DllImport("ntdll.dll")] static extern uint NtQuerySystemInformation(int cls, IntPtr info, int len, out int retLen);
    [DllImport("kernel32.dll", SetLastError = true)] static extern IntPtr OpenProcess(uint access, bool inherit, int pid);
    [DllImport("kernel32.dll")] static extern bool CloseHandle(IntPtr h);
    [DllImport("kernel32.dll")] static extern IntPtr GetCurrentProcess();
    [DllImport("kernel32.dll", SetLastError = true)] static extern bool DuplicateHandle(IntPtr srcProc, IntPtr src, IntPtr dstProc, out IntPtr dst, uint access, bool inherit, uint options);
    [DllImport("kernel32.dll")] static extern int GetProcessId(IntPtr h);
    [DllImport("kernel32.dll", CharSet = CharSet.Unicode, SetLastError = true)] static extern bool QueryFullProcessImageName(IntPtr h, int flags, StringBuilder name, ref int size);
    delegate bool EnumWindowsProc(IntPtr hwnd, IntPtr lParam);
    [DllImport("user32.dll")] static extern bool EnumWindows(EnumWindowsProc cb, IntPtr lParam);
    [DllImport("user32.dll")] static extern bool IsWindowVisible(IntPtr hwnd);
    [DllImport("user32.dll")] static extern int GetWindowLong(IntPtr hwnd, int index);
    [DllImport("user32.dll")] static extern bool GetWindowRect(IntPtr hwnd, out RECT r);
    [DllImport("user32.dll")] static extern int GetWindowThreadProcessId(IntPtr hwnd, out int pid);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] static extern int GetClassName(IntPtr hwnd, StringBuilder name, int max);
    [DllImport("psapi.dll", SetLastError = true)] static extern bool EnumDeviceDrivers([Out] IntPtr[] bases, int cb, out int needed);
    [DllImport("psapi.dll", CharSet = CharSet.Unicode)] static extern int GetDeviceDriverBaseName(IntPtr imageBase, StringBuilder name, int size);

    const uint PROCESS_DUP_HANDLE = 0x40, PROCESS_QUERY_LIMITED = 0x1000;
    const uint VM_ACCESS = 0x0008 | 0x0010 | 0x0020;

    static string Esc(string s)
    {
        if (s == null) return "";
        StringBuilder b = new StringBuilder();
        foreach (char c in s) { if (c == '"' || c == '\\') b.Append('\\').Append(c); else if (c < 32) b.Append(' '); else b.Append(c); }
        return b.ToString();
    }
    static string ImagePath(int pid)
    {
        IntPtr h = OpenProcess(PROCESS_QUERY_LIMITED, false, pid);
        if (h == IntPtr.Zero) return "";
        try { StringBuilder sb = new StringBuilder(1024); int n = sb.Capacity; return QueryFullProcessImageName(h, 0, sb, ref n) ? sb.ToString() : ""; }
        finally { CloseHandle(h); }
    }
    static string ProcInfo(int pid)
    {
        string path = ImagePath(pid), name = "", company = "";
        try { name = path.Length > 0 ? System.IO.Path.GetFileName(path) : Process.GetProcessById(pid).ProcessName + ".exe"; } catch { }
        try { if (path.Length > 0) company = FileVersionInfo.GetVersionInfo(path).CompanyName ?? ""; } catch { }
        string lp = path.ToLowerInvariant();
        bool sys = lp.Contains("\\program files") || lp.Contains("\\windows\\");
        return "\"name\":\"" + Esc(name) + "\",\"company\":\"" + Esc(company) + "\",\"sys\":" + (sys ? "true" : "false");
    }

    static string Handles(int gamePid)
    {
        int self = Process.GetCurrentProcess().Id;
        IntPtr selfH = OpenProcess(PROCESS_QUERY_LIMITED, false, self);
        IntPtr gameH = OpenProcess(PROCESS_QUERY_LIMITED, false, gamePid);
        int len = 1 << 20; IntPtr buf = IntPtr.Zero; uint st; int ret;
        try
        {
            for (int tries = 0; ; tries++)
            {
                buf = Marshal.AllocHGlobal(len);
                st = NtQuerySystemInformation(64, buf, len, out ret);
                if (st == 0xC0000004 && tries < 8) { Marshal.FreeHGlobal(buf); buf = IntPtr.Zero; len = Math.Max(len * 2, ret + (1 << 16)); continue; }
                break;
            }
            if (st != 0) return "{\"err\":\"ntq " + st.ToString("X") + "\"}";
            long count = (long)Marshal.ReadIntPtr(buf);
            int esz = Marshal.SizeOf(typeof(HANDLE_EX)), off = IntPtr.Size * 2;
            int procType = -1; IntPtr gameObj = IntPtr.Zero;
            for (long i = 0; i < count; i++)
            {
                HANDLE_EX e = (HANDLE_EX)Marshal.PtrToStructure(new IntPtr(buf.ToInt64() + off + i * esz), typeof(HANDLE_EX));
                if ((long)e.UniqueProcessId.ToUInt64() != self) continue;
                if ((long)e.HandleValue.ToUInt64() == selfH.ToInt64()) procType = e.ObjectTypeIndex;
                if (gameH != IntPtr.Zero && (long)e.HandleValue.ToUInt64() == gameH.ToInt64()) gameObj = e.Object;
            }
            bool byObj = gameObj != IntPtr.Zero;
            if (procType < 0) return "{\"err\":\"type\"}";
            Dictionary<int, uint> owners = new Dictionary<int, uint>();
            Dictionary<int, IntPtr> opened = new Dictionary<int, IntPtr>();
            try
            {
                for (long i = 0; i < count; i++)
                {
                    HANDLE_EX e = (HANDLE_EX)Marshal.PtrToStructure(new IntPtr(buf.ToInt64() + off + i * esz), typeof(HANDLE_EX));
                    int pid = (int)e.UniqueProcessId.ToUInt64();
                    if (e.ObjectTypeIndex != procType || pid == gamePid || pid == self || pid <= 4 || (e.GrantedAccess & VM_ACCESS) == 0) continue;
                    if (byObj) { if (e.Object == gameObj) { uint a0; owners.TryGetValue(pid, out a0); owners[pid] = a0 | e.GrantedAccess; } continue; }
                    IntPtr owner;
                    if (!opened.TryGetValue(pid, out owner)) { owner = OpenProcess(PROCESS_DUP_HANDLE, false, pid); opened[pid] = owner; }
                    if (owner == IntPtr.Zero) continue;
                    IntPtr dup;
                    if (!DuplicateHandle(owner, new IntPtr((long)e.HandleValue.ToUInt64()), GetCurrentProcess(), out dup, PROCESS_QUERY_LIMITED, false, 0)) continue;
                    try { if (GetProcessId(dup) == gamePid) { uint a; owners.TryGetValue(pid, out a); owners[pid] = a | e.GrantedAccess; } }
                    finally { CloseHandle(dup); }
                }
            }
            finally { foreach (IntPtr h in opened.Values) if (h != IntPtr.Zero) CloseHandle(h); }
            StringBuilder sb = new StringBuilder("[");
            foreach (KeyValuePair<int, uint> kv in owners)
            {
                if (sb.Length > 1) sb.Append(',');
                sb.Append("{").Append(ProcInfo(kv.Key)).Append(",\"read\":").Append((kv.Value & 0x10) != 0 ? "true" : "false").Append(",\"write\":").Append((kv.Value & 0x20) != 0 ? "true" : "false").Append("}");
            }
            return sb.Append("]").ToString();
        }
        finally { if (buf != IntPtr.Zero) Marshal.FreeHGlobal(buf); if (selfH != IntPtr.Zero) CloseHandle(selfH); if (gameH != IntPtr.Zero) CloseHandle(gameH); }
    }

    static string Overlays(int gamePid)
    {
        RECT game = new RECT(); long gameArea = 0;
        List<IntPtr> wins = new List<IntPtr>();
        EnumWindows(delegate (IntPtr h, IntPtr l) { wins.Add(h); return true; }, IntPtr.Zero);
        foreach (IntPtr h in wins)
        {
            int pid; GetWindowThreadProcessId(h, out pid);
            if (pid != gamePid || !IsWindowVisible(h)) continue;
            RECT r; if (!GetWindowRect(h, out r)) continue;
            long a = (long)(r.Right - r.Left) * (r.Bottom - r.Top);
            if (a > gameArea) { gameArea = a; game = r; }
        }
        if (gameArea <= 0) return "[]";
        StringBuilder sb = new StringBuilder("[");
        HashSet<string> seen = new HashSet<string>();
        foreach (IntPtr h in wins)
        {
            int pid; GetWindowThreadProcessId(h, out pid);
            if (pid == gamePid || !IsWindowVisible(h)) continue;
            int ex = GetWindowLong(h, -20);
            bool top = (ex & 0x8) != 0, layered = (ex & 0x80000) != 0, transparent = (ex & 0x20) != 0;
            if (!top || !(layered || transparent)) continue;
            RECT r; if (!GetWindowRect(h, out r)) continue;
            long ix = Math.Max(0, Math.Min(r.Right, game.Right) - Math.Max(r.Left, game.Left)), iy = Math.Max(0, Math.Min(r.Bottom, game.Bottom) - Math.Max(r.Top, game.Top));
            int cover = (int)(100 * ix * iy / gameArea);
            if (cover < 30) continue;
            StringBuilder cls = new StringBuilder(256); GetClassName(h, cls, 256);
            string key = pid + "|" + cls;
            if (!seen.Add(key)) continue;
            if (sb.Length > 1) sb.Append(',');
            sb.Append("{").Append(ProcInfo(pid)).Append(",\"cls\":\"").Append(Esc(cls.ToString())).Append("\",\"cover\":").Append(cover).Append(",\"clickThrough\":").Append(transparent ? "true" : "false").Append("}");
        }
        return sb.Append("]").ToString();
    }

    static string Drivers()
    {
        int needed;
        IntPtr[] probe = new IntPtr[1];
        EnumDeviceDrivers(probe, IntPtr.Size, out needed);
        IntPtr[] bases = new IntPtr[Math.Max(1, needed / IntPtr.Size)];
        if (!EnumDeviceDrivers(bases, bases.Length * IntPtr.Size, out needed)) return "[]";
        StringBuilder sb = new StringBuilder("[");
        foreach (IntPtr b in bases)
        {
            StringBuilder n = new StringBuilder(260);
            if (GetDeviceDriverBaseName(b, n, 260) == 0) continue;
            if (sb.Length > 1) sb.Append(',');
            sb.Append('"').Append(Esc(n.ToString().ToLowerInvariant())).Append('"');
        }
        return sb.Append("]").ToString();
    }

    public static string Run(int gamePid)
    {
        string h, o, d;
        try { h = gamePid > 0 ? Handles(gamePid) : "[]"; } catch (Exception e) { h = "{\"err\":\"" + Esc(e.GetType().Name) + "\"}"; }
        try { o = gamePid > 0 ? Overlays(gamePid) : "[]"; } catch (Exception e) { o = "{\"err\":\"" + Esc(e.GetType().Name) + "\"}"; }
        try { d = Drivers(); } catch (Exception e) { d = "{\"err\":\"" + Esc(e.GetType().Name) + "\"}"; }
        return "{\"v\":1,\"handles\":" + h + ",\"overlays\":" + o + ",\"drivers\":" + d + "}";
    }
}
