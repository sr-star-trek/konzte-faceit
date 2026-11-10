
!define KZG_DIR "$PROGRAMFILES64\Konzte Guard"
!define KZG_EXE "$PROGRAMFILES64\Konzte Guard\KonzteGuard.exe"
!define KZG_RUN "Software\Microsoft\Windows\CurrentVersion\Run"

!macro NSIS_HOOK_POSTINSTALL
  StrCpy $R9 "1"
  ClearErrors
  GetDLLVersion "$INSTDIR\guard\KonzteGuard.exe" $R0 $R1
  IfErrors kzg_done
  ClearErrors
  GetDLLVersion "${KZG_EXE}" $R2 $R3
  IfErrors kzg_install
  StrCmp "$R0.$R1" "$R2.$R3" 0 kzg_install
  nsExec::ExecToStack 'sc.exe query KonzteGuard'
  Pop $R4
  Pop $R5
  StrCmp $R4 "0" kzg_tray kzg_install
  kzg_install:
    ExecShellWait "runas" "$INSTDIR\guard\KonzteGuard.exe" "install" SW_HIDE
  kzg_tray:
    IfFileExists "${KZG_EXE}" 0 kzg_done
    WriteRegStr HKCU "${KZG_RUN}" "KonzteGuard" '"${KZG_EXE}"'
    CreateShortCut "$SMPROGRAMS\KONZTE GUARD.lnk" "${KZG_EXE}" "open" "${KZG_EXE}" 0
    Exec '"${KZG_EXE}"'
  kzg_done:
!macroend

!macro NSIS_HOOK_PREUNINSTALL
  ${If} $UpdateMode <> 1
    IfFileExists "${KZG_EXE}" 0 kzg_un_done
      nsExec::ExecToStack '"${KZG_EXE}" call uninstall'
      Pop $R4
      Pop $R5
      StrCmp $R4 "0" kzg_un_wait
      ExecShellWait "runas" "${KZG_EXE}" "uninstall" SW_HIDE
    kzg_un_wait:
      Sleep 3000
    kzg_un_done:
    DeleteRegValue HKCU "${KZG_RUN}" "KonzteGuard"
    Delete "$SMPROGRAMS\KONZTE GUARD.lnk"
  ${EndIf}
!macroend
