const EMBLEMS_ALL = ["Aces","AkimboCrab","Alien","AmethystUltraSpades","AnarchyGreen","Bitcoin","Bluegem","ColorCandy","Comix","Crow","DanceGirl","Devil","Diamond","Donut","DroneMaster","Explosion_Iridescent","Flame","FrogmanTrident","GoldenGlobe","Grafiti","GreenClover","GreenRadar","Gulag","HalloweenTrio","Hieroglyph","Lightning","LionHead","MalteseGold","Mermaid","MoonEyes","Nuke","Nuke_Symbol","OnionCry","Oni","Operation_CobraQueen_Base","Operation_CobraQueen_Gold","Operation_DarkStrikeGold","Operation_DarkStrike","Operation_Dino_Gold","Operation_Dino","Operation_Frogman_Base","Operation_Frogman_Gold","Operation_LoneWolf_Gold","Operation_LoneWolf","Operation_WWL_Gold","Operation_WWL","PartyParrot_Cat","PartyParrot_Cursed","PartyParrot_Dark","PartyParrot_Deal","PartyParrot_Fine","PartyParrot_Joker","PartyParrot_Mr","PartyParrot","PartyParrot_Satan","PartyParrot_Squad","PartyParrot_Viking","Phoenix","Pizza","Pumpkin","RacerLightning","RacerStar01","RailGun","Ranger","Redcat","RedCrossSkull","Redline","RedReaper","Rider","Rose","S2","S3_Mask","Season1","Season2","Season3","Season4","Season5","SilverSpades","Skull","SniperMedal","Sniper","Spartan","StarterPack_CM","StreetFighter_Blue","StreetFighter","Trident","Unicorn","Viper","WhiteEagleHead","Wojak","Wolf","Wolverine","Zoombie"];
const EMBLEMS_ANIM = new Set(["s2_polaris","s2_2v2_top1","s2_2v2_top2","s2_2v2_top3","Konzte_Eyes","Konzte_Chains","Konzte_Relic","Konzte_Ember","Konzte_Obsidian","Konzte_Crosshair","Aces","AkimboCrab","AmethystUltraSpades","Bitcoin","Bluegem","Comix","DanceGirl","Donut","DroneMaster","Explosion_Iridescent","Flame","FrogmanTrident","GoldenGlobe","Grafiti","GreenRadar","Gulag","HalloweenTrio","Hieroglyph","Lightning","MoonEyes","Nuke","Oni","PartyParrot","PartyParrot_Cat","PartyParrot_Cursed","PartyParrot_Dark","PartyParrot_Deal","PartyParrot_Fine","PartyParrot_Joker","PartyParrot_Mr","PartyParrot_Satan","PartyParrot_Squad","PartyParrot_Viking","Phoenix","RacerLightning","RacerStar01","RailGun","Redcat","Redline","Rider","S2","S3_Mask","Season1","Season2","Season3","Season4","Season5","SilverSpades","Skull","StarterPack_CM","StreetFighter","StreetFighter_Blue","Trident","Wojak","Wolverine"]);
const BANNERS_ANIM2 = ["a2_s5_wings","a2_fire","a2_dragongold","a2_bullet","a2_jetfighter","a2_racer","a2_railgun","a2_nightvision","a2_laserfrogman","a2_halloweentrio","a2_supporter_phoenix","a2_dronmaster","a2_runwolf","a2_sprinkles","a2_explosion","a2_laserflare","a2_s3_seal","a2_s4_completionist","a2_animered","a2_s3_competionist"];
const EMBLEMS_SEASON = ['s1_top1', 's1_top2', 's1_top3', 's1_top4', 's1_top5', 's1_2v2_top1', 's1_2v2_top2', 's1_2v2_top3', 's1_2v2_top4', 's1_2v2_top5', 'founder', 'Konzte_Eyes', 'Konzte_Chains', 'Konzte_Relic', 'Konzte_Ember', 'Konzte_Obsidian', 'Konzte_Crosshair', 's2_polaris', 's2_2v2_top1', 's2_2v2_top2', 's2_2v2_top3'];
const PASS_FRAMES = ['k_relic', 'k_polaris', 'k_ember', 'k_violet', 'k_obsidian', 'k_crown'];
const PASS_BANNERS = ['a3_pass_s1'];
const GRANT_BANNERS = ['a3_heli_drop', 'a3_night_raid', 'a3_night_flight', 'gas_visor'];
const SHOP3 = {
  BANNERS: ['forge', 'frost', 'volcanic', 'city', 'desert', 'abyss', 'thunder', 'obsidian', 'circuit', 'toxic'].map(x => 'b3_' + x),
  FRAMES: ['gunmetal', 'ice', 'regal', 'barbed', 'molten', 'carbon', 'bone', 'thorn', 'arc', 'toxic'].map(x => 'k3_' + x),
  EMBLEMS: ['knives', 'bear', 'skull', 'reticle', 'serpent', 'fist', 'helmet', 'phoenix', 'grenade', 'dragoneye'].map(x => 'e3_' + x),
  AVATARS: ['gasmask', 'samurai', 'sentinel', 'viking', 'wolf', 'plague', 'voidiver', 'oni', 'raven', 'cyber'].map(x => 'av_' + x),
};
const SHOP4 = { KEYS: ['raijin', 'hyou', 'sakura', 'ryuu', 'tora', 'tsuru', 'kage', 'homura', 'kaze', 'oni'] };
SHOP4.BANNERS = SHOP4.KEYS.map(x => 'b4_' + x); SHOP4.FRAMES = SHOP4.KEYS.map(x => 'k4_' + x);
SHOP4.AVATARS = SHOP4.KEYS.map(x => 'av_an_' + x); SHOP4.KITS = SHOP4.KEYS.map(x => 'kit4_' + x);
const SHOP5 = { KEYS: ['ferrum', 'corvus', 'sanguis', 'spina', 'cinis', 'lupus', 'vexillum', 'ossa', 'tempestas', 'ira'] };
SHOP5.BANNERS = SHOP5.KEYS.map(x => 'b5_' + x); SHOP5.FRAMES = SHOP5.KEYS.map(x => 'k5_' + x); SHOP5.AVATARS = SHOP5.KEYS.map(x => 'av_df_' + x); SHOP5.KITS = SHOP5.KEYS.map(x => 'kit5_' + x);
SHOP4.parts = kid => { const m = /^kit([45])_(\w+)$/.exec(String(kid)); if (!m) return []; const C = m[1] === '5' ? SHOP5 : SHOP4, x = m[2], av = m[1] === '5' ? 'av_df_' : 'av_an_';
  return C.KEYS.includes(x) ? [{ kind: 'banner', id: `b${m[1]}_` + x }, { kind: 'frame', id: `k${m[1]}_` + x }, { kind: 'avatar', id: av + x }] : []; };
const XMAS = { BANNERS: ['a3_snow_rig'], FRAMES: ['kx_snowrig'], AVATARS: ['av_snowrig'] };
XMAS.PARTS = [{ kind: 'banner', id: 'a3_snow_rig' }, { kind: 'frame', id: 'kx_snowrig' }, { kind: 'avatar', id: 'av_snowrig' }];
SHOP4.PBG = () => [...SHOP4.BANNERS, ...SHOP5.BANNERS, ...XMAS.BANNERS];
if (typeof module !== 'undefined') module.exports = { EMBLEMS_SEASON, EMBLEMS_ALL, EMBLEMS_ANIM: [...EMBLEMS_ANIM], BANNERS_ANIM2, PASS_FRAMES, PASS_BANNERS, GRANT_BANNERS, SHOP3, SHOP4, SHOP5, XMAS };
const LANEC = {
  STICKERS: ['crosshair', 'skull', 'crown', 'star', 'flame', 'klogo', 'bolt', 'shield', 'dogtag', 'diamond', 'target', 'chevron'],
  NCOLORS: { gold: '#f4c542', violet: '#969df9', ice: '#7fd6ff', mint: '#6fe3b4', rose: '#ff7aa8', ember: '#ff8a3d', lilac: '#c79bff', silver: '#d5dbe6' },
  NGRADS: { g_sunset: ['#f4c542', '#ff5fa2'], g_aurora: ['#6fe3b4', '#969df9'], g_royal: ['#969df9', '#f4c542'] },
  VFX: ['gold', 'polaris', 'violet', 'ember'],
  PRICE: { sticker: 300, ncolor: 600, vfx: 900 },
};
if (typeof module !== 'undefined') module.exports.LANEC = LANEC;
