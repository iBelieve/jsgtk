declare module "Gdk" {
  import * as GdkPixbuf from 'GdkPixbuf'
  import * as Gio from 'Gio'
  import * as GObject from 'GObject'
  import * as GLib from 'GLib'
  import * as Pango from 'Pango'
  import * as cairo from 'cairo'
  
  export type XEvent = any;
  
  export const BUTTON_MIDDLE: number;
  
  export const BUTTON_PRIMARY: number;
  
  export const BUTTON_SECONDARY: number;
  
  export const CURRENT_TIME: number;
  
  export const EVENT_PROPAGATE: boolean;
  
  export const EVENT_STOP: boolean;
  
  export const KEY_0: number;
  
  export const KEY_1: number;
  
  export const KEY_2: number;
  
  export const KEY_3: number;
  
  export const KEY_3270_AltCursor: number;
  
  export const KEY_3270_Attn: number;
  
  export const KEY_3270_BackTab: number;
  
  export const KEY_3270_ChangeScreen: number;
  
  export const KEY_3270_Copy: number;
  
  export const KEY_3270_CursorBlink: number;
  
  export const KEY_3270_CursorSelect: number;
  
  export const KEY_3270_DeleteWord: number;
  
  export const KEY_3270_Duplicate: number;
  
  export const KEY_3270_Enter: number;
  
  export const KEY_3270_EraseEOF: number;
  
  export const KEY_3270_EraseInput: number;
  
  export const KEY_3270_ExSelect: number;
  
  export const KEY_3270_FieldMark: number;
  
  export const KEY_3270_Ident: number;
  
  export const KEY_3270_Jump: number;
  
  export const KEY_3270_KeyClick: number;
  
  export const KEY_3270_Left2: number;
  
  export const KEY_3270_PA1: number;
  
  export const KEY_3270_PA2: number;
  
  export const KEY_3270_PA3: number;
  
  export const KEY_3270_Play: number;
  
  export const KEY_3270_PrintScreen: number;
  
  export const KEY_3270_Quit: number;
  
  export const KEY_3270_Record: number;
  
  export const KEY_3270_Reset: number;
  
  export const KEY_3270_Right2: number;
  
  export const KEY_3270_Rule: number;
  
  export const KEY_3270_Setup: number;
  
  export const KEY_3270_Test: number;
  
  export const KEY_4: number;
  
  export const KEY_5: number;
  
  export const KEY_6: number;
  
  export const KEY_7: number;
  
  export const KEY_8: number;
  
  export const KEY_9: number;
  
  export const KEY_A: number;
  
  export const KEY_AE: number;
  
  export const KEY_Aacute: number;
  
  export const KEY_Abelowdot: number;
  
  export const KEY_Abreve: number;
  
  export const KEY_Abreveacute: number;
  
  export const KEY_Abrevebelowdot: number;
  
  export const KEY_Abrevegrave: number;
  
  export const KEY_Abrevehook: number;
  
  export const KEY_Abrevetilde: number;
  
  export const KEY_AccessX_Enable: number;
  
  export const KEY_AccessX_Feedback_Enable: number;
  
  export const KEY_Acircumflex: number;
  
  export const KEY_Acircumflexacute: number;
  
  export const KEY_Acircumflexbelowdot: number;
  
  export const KEY_Acircumflexgrave: number;
  
  export const KEY_Acircumflexhook: number;
  
  export const KEY_Acircumflextilde: number;
  
  export const KEY_AddFavorite: number;
  
  export const KEY_Adiaeresis: number;
  
  export const KEY_Agrave: number;
  
  export const KEY_Ahook: number;
  
  export const KEY_Alt_L: number;
  
  export const KEY_Alt_R: number;
  
  export const KEY_Amacron: number;
  
  export const KEY_Aogonek: number;
  
  export const KEY_ApplicationLeft: number;
  
  export const KEY_ApplicationRight: number;
  
  export const KEY_Arabic_0: number;
  
  export const KEY_Arabic_1: number;
  
  export const KEY_Arabic_2: number;
  
  export const KEY_Arabic_3: number;
  
  export const KEY_Arabic_4: number;
  
  export const KEY_Arabic_5: number;
  
  export const KEY_Arabic_6: number;
  
  export const KEY_Arabic_7: number;
  
  export const KEY_Arabic_8: number;
  
  export const KEY_Arabic_9: number;
  
  export const KEY_Arabic_ain: number;
  
  export const KEY_Arabic_alef: number;
  
  export const KEY_Arabic_alefmaksura: number;
  
  export const KEY_Arabic_beh: number;
  
  export const KEY_Arabic_comma: number;
  
  export const KEY_Arabic_dad: number;
  
  export const KEY_Arabic_dal: number;
  
  export const KEY_Arabic_damma: number;
  
  export const KEY_Arabic_dammatan: number;
  
  export const KEY_Arabic_ddal: number;
  
  export const KEY_Arabic_farsi_yeh: number;
  
  export const KEY_Arabic_fatha: number;
  
  export const KEY_Arabic_fathatan: number;
  
  export const KEY_Arabic_feh: number;
  
  export const KEY_Arabic_fullstop: number;
  
  export const KEY_Arabic_gaf: number;
  
  export const KEY_Arabic_ghain: number;
  
  export const KEY_Arabic_ha: number;
  
  export const KEY_Arabic_hah: number;
  
  export const KEY_Arabic_hamza: number;
  
  export const KEY_Arabic_hamza_above: number;
  
  export const KEY_Arabic_hamza_below: number;
  
  export const KEY_Arabic_hamzaonalef: number;
  
  export const KEY_Arabic_hamzaonwaw: number;
  
  export const KEY_Arabic_hamzaonyeh: number;
  
  export const KEY_Arabic_hamzaunderalef: number;
  
  export const KEY_Arabic_heh: number;
  
  export const KEY_Arabic_heh_doachashmee: number;
  
  export const KEY_Arabic_heh_goal: number;
  
  export const KEY_Arabic_jeem: number;
  
  export const KEY_Arabic_jeh: number;
  
  export const KEY_Arabic_kaf: number;
  
  export const KEY_Arabic_kasra: number;
  
  export const KEY_Arabic_kasratan: number;
  
  export const KEY_Arabic_keheh: number;
  
  export const KEY_Arabic_khah: number;
  
  export const KEY_Arabic_lam: number;
  
  export const KEY_Arabic_madda_above: number;
  
  export const KEY_Arabic_maddaonalef: number;
  
  export const KEY_Arabic_meem: number;
  
  export const KEY_Arabic_noon: number;
  
  export const KEY_Arabic_noon_ghunna: number;
  
  export const KEY_Arabic_peh: number;
  
  export const KEY_Arabic_percent: number;
  
  export const KEY_Arabic_qaf: number;
  
  export const KEY_Arabic_question_mark: number;
  
  export const KEY_Arabic_ra: number;
  
  export const KEY_Arabic_rreh: number;
  
  export const KEY_Arabic_sad: number;
  
  export const KEY_Arabic_seen: number;
  
  export const KEY_Arabic_semicolon: number;
  
  export const KEY_Arabic_shadda: number;
  
  export const KEY_Arabic_sheen: number;
  
  export const KEY_Arabic_sukun: number;
  
  export const KEY_Arabic_superscript_alef: number;
  
  export const KEY_Arabic_switch: number;
  
  export const KEY_Arabic_tah: number;
  
  export const KEY_Arabic_tatweel: number;
  
  export const KEY_Arabic_tcheh: number;
  
  export const KEY_Arabic_teh: number;
  
  export const KEY_Arabic_tehmarbuta: number;
  
  export const KEY_Arabic_thal: number;
  
  export const KEY_Arabic_theh: number;
  
  export const KEY_Arabic_tteh: number;
  
  export const KEY_Arabic_veh: number;
  
  export const KEY_Arabic_waw: number;
  
  export const KEY_Arabic_yeh: number;
  
  export const KEY_Arabic_yeh_baree: number;
  
  export const KEY_Arabic_zah: number;
  
  export const KEY_Arabic_zain: number;
  
  export const KEY_Aring: number;
  
  export const KEY_Armenian_AT: number;
  
  export const KEY_Armenian_AYB: number;
  
  export const KEY_Armenian_BEN: number;
  
  export const KEY_Armenian_CHA: number;
  
  export const KEY_Armenian_DA: number;
  
  export const KEY_Armenian_DZA: number;
  
  export const KEY_Armenian_E: number;
  
  export const KEY_Armenian_FE: number;
  
  export const KEY_Armenian_GHAT: number;
  
  export const KEY_Armenian_GIM: number;
  
  export const KEY_Armenian_HI: number;
  
  export const KEY_Armenian_HO: number;
  
  export const KEY_Armenian_INI: number;
  
  export const KEY_Armenian_JE: number;
  
  export const KEY_Armenian_KE: number;
  
  export const KEY_Armenian_KEN: number;
  
  export const KEY_Armenian_KHE: number;
  
  export const KEY_Armenian_LYUN: number;
  
  export const KEY_Armenian_MEN: number;
  
  export const KEY_Armenian_NU: number;
  
  export const KEY_Armenian_O: number;
  
  export const KEY_Armenian_PE: number;
  
  export const KEY_Armenian_PYUR: number;
  
  export const KEY_Armenian_RA: number;
  
  export const KEY_Armenian_RE: number;
  
  export const KEY_Armenian_SE: number;
  
  export const KEY_Armenian_SHA: number;
  
  export const KEY_Armenian_TCHE: number;
  
  export const KEY_Armenian_TO: number;
  
  export const KEY_Armenian_TSA: number;
  
  export const KEY_Armenian_TSO: number;
  
  export const KEY_Armenian_TYUN: number;
  
  export const KEY_Armenian_VEV: number;
  
  export const KEY_Armenian_VO: number;
  
  export const KEY_Armenian_VYUN: number;
  
  export const KEY_Armenian_YECH: number;
  
  export const KEY_Armenian_ZA: number;
  
  export const KEY_Armenian_ZHE: number;
  
  export const KEY_Armenian_accent: number;
  
  export const KEY_Armenian_amanak: number;
  
  export const KEY_Armenian_apostrophe: number;
  
  export const KEY_Armenian_at: number;
  
  export const KEY_Armenian_ayb: number;
  
  export const KEY_Armenian_ben: number;
  
  export const KEY_Armenian_but: number;
  
  export const KEY_Armenian_cha: number;
  
  export const KEY_Armenian_da: number;
  
  export const KEY_Armenian_dza: number;
  
  export const KEY_Armenian_e: number;
  
  export const KEY_Armenian_exclam: number;
  
  export const KEY_Armenian_fe: number;
  
  export const KEY_Armenian_full_stop: number;
  
  export const KEY_Armenian_ghat: number;
  
  export const KEY_Armenian_gim: number;
  
  export const KEY_Armenian_hi: number;
  
  export const KEY_Armenian_ho: number;
  
  export const KEY_Armenian_hyphen: number;
  
  export const KEY_Armenian_ini: number;
  
  export const KEY_Armenian_je: number;
  
  export const KEY_Armenian_ke: number;
  
  export const KEY_Armenian_ken: number;
  
  export const KEY_Armenian_khe: number;
  
  export const KEY_Armenian_ligature_ew: number;
  
  export const KEY_Armenian_lyun: number;
  
  export const KEY_Armenian_men: number;
  
  export const KEY_Armenian_nu: number;
  
  export const KEY_Armenian_o: number;
  
  export const KEY_Armenian_paruyk: number;
  
  export const KEY_Armenian_pe: number;
  
  export const KEY_Armenian_pyur: number;
  
  export const KEY_Armenian_question: number;
  
  export const KEY_Armenian_ra: number;
  
  export const KEY_Armenian_re: number;
  
  export const KEY_Armenian_se: number;
  
  export const KEY_Armenian_separation_mark: number;
  
  export const KEY_Armenian_sha: number;
  
  export const KEY_Armenian_shesht: number;
  
  export const KEY_Armenian_tche: number;
  
  export const KEY_Armenian_to: number;
  
  export const KEY_Armenian_tsa: number;
  
  export const KEY_Armenian_tso: number;
  
  export const KEY_Armenian_tyun: number;
  
  export const KEY_Armenian_verjaket: number;
  
  export const KEY_Armenian_vev: number;
  
  export const KEY_Armenian_vo: number;
  
  export const KEY_Armenian_vyun: number;
  
  export const KEY_Armenian_yech: number;
  
  export const KEY_Armenian_yentamna: number;
  
  export const KEY_Armenian_za: number;
  
  export const KEY_Armenian_zhe: number;
  
  export const KEY_Atilde: number;
  
  export const KEY_AudibleBell_Enable: number;
  
  export const KEY_AudioCycleTrack: number;
  
  export const KEY_AudioForward: number;
  
  export const KEY_AudioLowerVolume: number;
  
  export const KEY_AudioMedia: number;
  
  export const KEY_AudioMicMute: number;
  
  export const KEY_AudioMute: number;
  
  export const KEY_AudioNext: number;
  
  export const KEY_AudioPause: number;
  
  export const KEY_AudioPlay: number;
  
  export const KEY_AudioPrev: number;
  
  export const KEY_AudioRaiseVolume: number;
  
  export const KEY_AudioRandomPlay: number;
  
  export const KEY_AudioRecord: number;
  
  export const KEY_AudioRepeat: number;
  
  export const KEY_AudioRewind: number;
  
  export const KEY_AudioStop: number;
  
  export const KEY_Away: number;
  
  export const KEY_B: number;
  
  export const KEY_Babovedot: number;
  
  export const KEY_Back: number;
  
  export const KEY_BackForward: number;
  
  export const KEY_BackSpace: number;
  
  export const KEY_Battery: number;
  
  export const KEY_Begin: number;
  
  export const KEY_Blue: number;
  
  export const KEY_Bluetooth: number;
  
  export const KEY_Book: number;
  
  export const KEY_BounceKeys_Enable: number;
  
  export const KEY_Break: number;
  
  export const KEY_BrightnessAdjust: number;
  
  export const KEY_Byelorussian_SHORTU: number;
  
  export const KEY_Byelorussian_shortu: number;
  
  export const KEY_C: number;
  
  export const KEY_CD: number;
  
  export const KEY_CH: number;
  
  export const KEY_C_H: number;
  
  export const KEY_C_h: number;
  
  export const KEY_Cabovedot: number;
  
  export const KEY_Cacute: number;
  
  export const KEY_Calculator: number;
  
  export const KEY_Calendar: number;
  
  export const KEY_Cancel: number;
  
  export const KEY_Caps_Lock: number;
  
  export const KEY_Ccaron: number;
  
  export const KEY_Ccedilla: number;
  
  export const KEY_Ccircumflex: number;
  
  export const KEY_Ch: number;
  
  export const KEY_Clear: number;
  
  export const KEY_ClearGrab: number;
  
  export const KEY_Close: number;
  
  export const KEY_Codeinput: number;
  
  export const KEY_ColonSign: number;
  
  export const KEY_Community: number;
  
  export const KEY_ContrastAdjust: number;
  
  export const KEY_Control_L: number;
  
  export const KEY_Control_R: number;
  
  export const KEY_Copy: number;
  
  export const KEY_CruzeiroSign: number;
  
  export const KEY_Cut: number;
  
  export const KEY_CycleAngle: number;
  
  export const KEY_Cyrillic_A: number;
  
  export const KEY_Cyrillic_BE: number;
  
  export const KEY_Cyrillic_CHE: number;
  
  export const KEY_Cyrillic_CHE_descender: number;
  
  export const KEY_Cyrillic_CHE_vertstroke: number;
  
  export const KEY_Cyrillic_DE: number;
  
  export const KEY_Cyrillic_DZHE: number;
  
  export const KEY_Cyrillic_E: number;
  
  export const KEY_Cyrillic_EF: number;
  
  export const KEY_Cyrillic_EL: number;
  
  export const KEY_Cyrillic_EM: number;
  
  export const KEY_Cyrillic_EN: number;
  
  export const KEY_Cyrillic_EN_descender: number;
  
  export const KEY_Cyrillic_ER: number;
  
  export const KEY_Cyrillic_ES: number;
  
  export const KEY_Cyrillic_GHE: number;
  
  export const KEY_Cyrillic_GHE_bar: number;
  
  export const KEY_Cyrillic_HA: number;
  
  export const KEY_Cyrillic_HARDSIGN: number;
  
  export const KEY_Cyrillic_HA_descender: number;
  
  export const KEY_Cyrillic_I: number;
  
  export const KEY_Cyrillic_IE: number;
  
  export const KEY_Cyrillic_IO: number;
  
  export const KEY_Cyrillic_I_macron: number;
  
  export const KEY_Cyrillic_JE: number;
  
  export const KEY_Cyrillic_KA: number;
  
  export const KEY_Cyrillic_KA_descender: number;
  
  export const KEY_Cyrillic_KA_vertstroke: number;
  
  export const KEY_Cyrillic_LJE: number;
  
  export const KEY_Cyrillic_NJE: number;
  
  export const KEY_Cyrillic_O: number;
  
  export const KEY_Cyrillic_O_bar: number;
  
  export const KEY_Cyrillic_PE: number;
  
  export const KEY_Cyrillic_SCHWA: number;
  
  export const KEY_Cyrillic_SHA: number;
  
  export const KEY_Cyrillic_SHCHA: number;
  
  export const KEY_Cyrillic_SHHA: number;
  
  export const KEY_Cyrillic_SHORTI: number;
  
  export const KEY_Cyrillic_SOFTSIGN: number;
  
  export const KEY_Cyrillic_TE: number;
  
  export const KEY_Cyrillic_TSE: number;
  
  export const KEY_Cyrillic_U: number;
  
  export const KEY_Cyrillic_U_macron: number;
  
  export const KEY_Cyrillic_U_straight: number;
  
  export const KEY_Cyrillic_U_straight_bar: number;
  
  export const KEY_Cyrillic_VE: number;
  
  export const KEY_Cyrillic_YA: number;
  
  export const KEY_Cyrillic_YERU: number;
  
  export const KEY_Cyrillic_YU: number;
  
  export const KEY_Cyrillic_ZE: number;
  
  export const KEY_Cyrillic_ZHE: number;
  
  export const KEY_Cyrillic_ZHE_descender: number;
  
  export const KEY_Cyrillic_a: number;
  
  export const KEY_Cyrillic_be: number;
  
  export const KEY_Cyrillic_che: number;
  
  export const KEY_Cyrillic_che_descender: number;
  
  export const KEY_Cyrillic_che_vertstroke: number;
  
  export const KEY_Cyrillic_de: number;
  
  export const KEY_Cyrillic_dzhe: number;
  
  export const KEY_Cyrillic_e: number;
  
  export const KEY_Cyrillic_ef: number;
  
  export const KEY_Cyrillic_el: number;
  
  export const KEY_Cyrillic_em: number;
  
  export const KEY_Cyrillic_en: number;
  
  export const KEY_Cyrillic_en_descender: number;
  
  export const KEY_Cyrillic_er: number;
  
  export const KEY_Cyrillic_es: number;
  
  export const KEY_Cyrillic_ghe: number;
  
  export const KEY_Cyrillic_ghe_bar: number;
  
  export const KEY_Cyrillic_ha: number;
  
  export const KEY_Cyrillic_ha_descender: number;
  
  export const KEY_Cyrillic_hardsign: number;
  
  export const KEY_Cyrillic_i: number;
  
  export const KEY_Cyrillic_i_macron: number;
  
  export const KEY_Cyrillic_ie: number;
  
  export const KEY_Cyrillic_io: number;
  
  export const KEY_Cyrillic_je: number;
  
  export const KEY_Cyrillic_ka: number;
  
  export const KEY_Cyrillic_ka_descender: number;
  
  export const KEY_Cyrillic_ka_vertstroke: number;
  
  export const KEY_Cyrillic_lje: number;
  
  export const KEY_Cyrillic_nje: number;
  
  export const KEY_Cyrillic_o: number;
  
  export const KEY_Cyrillic_o_bar: number;
  
  export const KEY_Cyrillic_pe: number;
  
  export const KEY_Cyrillic_schwa: number;
  
  export const KEY_Cyrillic_sha: number;
  
  export const KEY_Cyrillic_shcha: number;
  
  export const KEY_Cyrillic_shha: number;
  
  export const KEY_Cyrillic_shorti: number;
  
  export const KEY_Cyrillic_softsign: number;
  
  export const KEY_Cyrillic_te: number;
  
  export const KEY_Cyrillic_tse: number;
  
  export const KEY_Cyrillic_u: number;
  
  export const KEY_Cyrillic_u_macron: number;
  
  export const KEY_Cyrillic_u_straight: number;
  
  export const KEY_Cyrillic_u_straight_bar: number;
  
  export const KEY_Cyrillic_ve: number;
  
  export const KEY_Cyrillic_ya: number;
  
  export const KEY_Cyrillic_yeru: number;
  
  export const KEY_Cyrillic_yu: number;
  
  export const KEY_Cyrillic_ze: number;
  
  export const KEY_Cyrillic_zhe: number;
  
  export const KEY_Cyrillic_zhe_descender: number;
  
  export const KEY_D: number;
  
  export const KEY_DOS: number;
  
  export const KEY_Dabovedot: number;
  
  export const KEY_Dcaron: number;
  
  export const KEY_Delete: number;
  
  export const KEY_Display: number;
  
  export const KEY_Documents: number;
  
  export const KEY_DongSign: number;
  
  export const KEY_Down: number;
  
  export const KEY_Dstroke: number;
  
  export const KEY_E: number;
  
  export const KEY_ENG: number;
  
  export const KEY_ETH: number;
  
  export const KEY_EZH: number;
  
  export const KEY_Eabovedot: number;
  
  export const KEY_Eacute: number;
  
  export const KEY_Ebelowdot: number;
  
  export const KEY_Ecaron: number;
  
  export const KEY_Ecircumflex: number;
  
  export const KEY_Ecircumflexacute: number;
  
  export const KEY_Ecircumflexbelowdot: number;
  
  export const KEY_Ecircumflexgrave: number;
  
  export const KEY_Ecircumflexhook: number;
  
  export const KEY_Ecircumflextilde: number;
  
  export const KEY_EcuSign: number;
  
  export const KEY_Ediaeresis: number;
  
  export const KEY_Egrave: number;
  
  export const KEY_Ehook: number;
  
  export const KEY_Eisu_Shift: number;
  
  export const KEY_Eisu_toggle: number;
  
  export const KEY_Eject: number;
  
  export const KEY_Emacron: number;
  
  export const KEY_End: number;
  
  export const KEY_Eogonek: number;
  
  export const KEY_Escape: number;
  
  export const KEY_Eth: number;
  
  export const KEY_Etilde: number;
  
  export const KEY_EuroSign: number;
  
  export const KEY_Excel: number;
  
  export const KEY_Execute: number;
  
  export const KEY_Explorer: number;
  
  export const KEY_F: number;
  
  export const KEY_F1: number;
  
  export const KEY_F10: number;
  
  export const KEY_F11: number;
  
  export const KEY_F12: number;
  
  export const KEY_F13: number;
  
  export const KEY_F14: number;
  
  export const KEY_F15: number;
  
  export const KEY_F16: number;
  
  export const KEY_F17: number;
  
  export const KEY_F18: number;
  
  export const KEY_F19: number;
  
  export const KEY_F2: number;
  
  export const KEY_F20: number;
  
  export const KEY_F21: number;
  
  export const KEY_F22: number;
  
  export const KEY_F23: number;
  
  export const KEY_F24: number;
  
  export const KEY_F25: number;
  
  export const KEY_F26: number;
  
  export const KEY_F27: number;
  
  export const KEY_F28: number;
  
  export const KEY_F29: number;
  
  export const KEY_F3: number;
  
  export const KEY_F30: number;
  
  export const KEY_F31: number;
  
  export const KEY_F32: number;
  
  export const KEY_F33: number;
  
  export const KEY_F34: number;
  
  export const KEY_F35: number;
  
  export const KEY_F4: number;
  
  export const KEY_F5: number;
  
  export const KEY_F6: number;
  
  export const KEY_F7: number;
  
  export const KEY_F8: number;
  
  export const KEY_F9: number;
  
  export const KEY_FFrancSign: number;
  
  export const KEY_Fabovedot: number;
  
  export const KEY_Farsi_0: number;
  
  export const KEY_Farsi_1: number;
  
  export const KEY_Farsi_2: number;
  
  export const KEY_Farsi_3: number;
  
  export const KEY_Farsi_4: number;
  
  export const KEY_Farsi_5: number;
  
  export const KEY_Farsi_6: number;
  
  export const KEY_Farsi_7: number;
  
  export const KEY_Farsi_8: number;
  
  export const KEY_Farsi_9: number;
  
  export const KEY_Farsi_yeh: number;
  
  export const KEY_Favorites: number;
  
  export const KEY_Finance: number;
  
  export const KEY_Find: number;
  
  export const KEY_First_Virtual_Screen: number;
  
  export const KEY_Forward: number;
  
  export const KEY_FrameBack: number;
  
  export const KEY_FrameForward: number;
  
  export const KEY_G: number;
  
  export const KEY_Gabovedot: number;
  
  export const KEY_Game: number;
  
  export const KEY_Gbreve: number;
  
  export const KEY_Gcaron: number;
  
  export const KEY_Gcedilla: number;
  
  export const KEY_Gcircumflex: number;
  
  export const KEY_Georgian_an: number;
  
  export const KEY_Georgian_ban: number;
  
  export const KEY_Georgian_can: number;
  
  export const KEY_Georgian_char: number;
  
  export const KEY_Georgian_chin: number;
  
  export const KEY_Georgian_cil: number;
  
  export const KEY_Georgian_don: number;
  
  export const KEY_Georgian_en: number;
  
  export const KEY_Georgian_fi: number;
  
  export const KEY_Georgian_gan: number;
  
  export const KEY_Georgian_ghan: number;
  
  export const KEY_Georgian_hae: number;
  
  export const KEY_Georgian_har: number;
  
  export const KEY_Georgian_he: number;
  
  export const KEY_Georgian_hie: number;
  
  export const KEY_Georgian_hoe: number;
  
  export const KEY_Georgian_in: number;
  
  export const KEY_Georgian_jhan: number;
  
  export const KEY_Georgian_jil: number;
  
  export const KEY_Georgian_kan: number;
  
  export const KEY_Georgian_khar: number;
  
  export const KEY_Georgian_las: number;
  
  export const KEY_Georgian_man: number;
  
  export const KEY_Georgian_nar: number;
  
  export const KEY_Georgian_on: number;
  
  export const KEY_Georgian_par: number;
  
  export const KEY_Georgian_phar: number;
  
  export const KEY_Georgian_qar: number;
  
  export const KEY_Georgian_rae: number;
  
  export const KEY_Georgian_san: number;
  
  export const KEY_Georgian_shin: number;
  
  export const KEY_Georgian_tan: number;
  
  export const KEY_Georgian_tar: number;
  
  export const KEY_Georgian_un: number;
  
  export const KEY_Georgian_vin: number;
  
  export const KEY_Georgian_we: number;
  
  export const KEY_Georgian_xan: number;
  
  export const KEY_Georgian_zen: number;
  
  export const KEY_Georgian_zhar: number;
  
  export const KEY_Go: number;
  
  export const KEY_Greek_ALPHA: number;
  
  export const KEY_Greek_ALPHAaccent: number;
  
  export const KEY_Greek_BETA: number;
  
  export const KEY_Greek_CHI: number;
  
  export const KEY_Greek_DELTA: number;
  
  export const KEY_Greek_EPSILON: number;
  
  export const KEY_Greek_EPSILONaccent: number;
  
  export const KEY_Greek_ETA: number;
  
  export const KEY_Greek_ETAaccent: number;
  
  export const KEY_Greek_GAMMA: number;
  
  export const KEY_Greek_IOTA: number;
  
  export const KEY_Greek_IOTAaccent: number;
  
  export const KEY_Greek_IOTAdiaeresis: number;
  
  export const KEY_Greek_IOTAdieresis: number;
  
  export const KEY_Greek_KAPPA: number;
  
  export const KEY_Greek_LAMBDA: number;
  
  export const KEY_Greek_LAMDA: number;
  
  export const KEY_Greek_MU: number;
  
  export const KEY_Greek_NU: number;
  
  export const KEY_Greek_OMEGA: number;
  
  export const KEY_Greek_OMEGAaccent: number;
  
  export const KEY_Greek_OMICRON: number;
  
  export const KEY_Greek_OMICRONaccent: number;
  
  export const KEY_Greek_PHI: number;
  
  export const KEY_Greek_PI: number;
  
  export const KEY_Greek_PSI: number;
  
  export const KEY_Greek_RHO: number;
  
  export const KEY_Greek_SIGMA: number;
  
  export const KEY_Greek_TAU: number;
  
  export const KEY_Greek_THETA: number;
  
  export const KEY_Greek_UPSILON: number;
  
  export const KEY_Greek_UPSILONaccent: number;
  
  export const KEY_Greek_UPSILONdieresis: number;
  
  export const KEY_Greek_XI: number;
  
  export const KEY_Greek_ZETA: number;
  
  export const KEY_Greek_accentdieresis: number;
  
  export const KEY_Greek_alpha: number;
  
  export const KEY_Greek_alphaaccent: number;
  
  export const KEY_Greek_beta: number;
  
  export const KEY_Greek_chi: number;
  
  export const KEY_Greek_delta: number;
  
  export const KEY_Greek_epsilon: number;
  
  export const KEY_Greek_epsilonaccent: number;
  
  export const KEY_Greek_eta: number;
  
  export const KEY_Greek_etaaccent: number;
  
  export const KEY_Greek_finalsmallsigma: number;
  
  export const KEY_Greek_gamma: number;
  
  export const KEY_Greek_horizbar: number;
  
  export const KEY_Greek_iota: number;
  
  export const KEY_Greek_iotaaccent: number;
  
  export const KEY_Greek_iotaaccentdieresis: number;
  
  export const KEY_Greek_iotadieresis: number;
  
  export const KEY_Greek_kappa: number;
  
  export const KEY_Greek_lambda: number;
  
  export const KEY_Greek_lamda: number;
  
  export const KEY_Greek_mu: number;
  
  export const KEY_Greek_nu: number;
  
  export const KEY_Greek_omega: number;
  
  export const KEY_Greek_omegaaccent: number;
  
  export const KEY_Greek_omicron: number;
  
  export const KEY_Greek_omicronaccent: number;
  
  export const KEY_Greek_phi: number;
  
  export const KEY_Greek_pi: number;
  
  export const KEY_Greek_psi: number;
  
  export const KEY_Greek_rho: number;
  
  export const KEY_Greek_sigma: number;
  
  export const KEY_Greek_switch: number;
  
  export const KEY_Greek_tau: number;
  
  export const KEY_Greek_theta: number;
  
  export const KEY_Greek_upsilon: number;
  
  export const KEY_Greek_upsilonaccent: number;
  
  export const KEY_Greek_upsilonaccentdieresis: number;
  
  export const KEY_Greek_upsilondieresis: number;
  
  export const KEY_Greek_xi: number;
  
  export const KEY_Greek_zeta: number;
  
  export const KEY_Green: number;
  
  export const KEY_H: number;
  
  export const KEY_Hangul: number;
  
  export const KEY_Hangul_A: number;
  
  export const KEY_Hangul_AE: number;
  
  export const KEY_Hangul_AraeA: number;
  
  export const KEY_Hangul_AraeAE: number;
  
  export const KEY_Hangul_Banja: number;
  
  export const KEY_Hangul_Cieuc: number;
  
  export const KEY_Hangul_Codeinput: number;
  
  export const KEY_Hangul_Dikeud: number;
  
  export const KEY_Hangul_E: number;
  
  export const KEY_Hangul_EO: number;
  
  export const KEY_Hangul_EU: number;
  
  export const KEY_Hangul_End: number;
  
  export const KEY_Hangul_Hanja: number;
  
  export const KEY_Hangul_Hieuh: number;
  
  export const KEY_Hangul_I: number;
  
  export const KEY_Hangul_Ieung: number;
  
  export const KEY_Hangul_J_Cieuc: number;
  
  export const KEY_Hangul_J_Dikeud: number;
  
  export const KEY_Hangul_J_Hieuh: number;
  
  export const KEY_Hangul_J_Ieung: number;
  
  export const KEY_Hangul_J_Jieuj: number;
  
  export const KEY_Hangul_J_Khieuq: number;
  
  export const KEY_Hangul_J_Kiyeog: number;
  
  export const KEY_Hangul_J_KiyeogSios: number;
  
  export const KEY_Hangul_J_KkogjiDalrinIeung: number;
  
  export const KEY_Hangul_J_Mieum: number;
  
  export const KEY_Hangul_J_Nieun: number;
  
  export const KEY_Hangul_J_NieunHieuh: number;
  
  export const KEY_Hangul_J_NieunJieuj: number;
  
  export const KEY_Hangul_J_PanSios: number;
  
  export const KEY_Hangul_J_Phieuf: number;
  
  export const KEY_Hangul_J_Pieub: number;
  
  export const KEY_Hangul_J_PieubSios: number;
  
  export const KEY_Hangul_J_Rieul: number;
  
  export const KEY_Hangul_J_RieulHieuh: number;
  
  export const KEY_Hangul_J_RieulKiyeog: number;
  
  export const KEY_Hangul_J_RieulMieum: number;
  
  export const KEY_Hangul_J_RieulPhieuf: number;
  
  export const KEY_Hangul_J_RieulPieub: number;
  
  export const KEY_Hangul_J_RieulSios: number;
  
  export const KEY_Hangul_J_RieulTieut: number;
  
  export const KEY_Hangul_J_Sios: number;
  
  export const KEY_Hangul_J_SsangKiyeog: number;
  
  export const KEY_Hangul_J_SsangSios: number;
  
  export const KEY_Hangul_J_Tieut: number;
  
  export const KEY_Hangul_J_YeorinHieuh: number;
  
  export const KEY_Hangul_Jamo: number;
  
  export const KEY_Hangul_Jeonja: number;
  
  export const KEY_Hangul_Jieuj: number;
  
  export const KEY_Hangul_Khieuq: number;
  
  export const KEY_Hangul_Kiyeog: number;
  
  export const KEY_Hangul_KiyeogSios: number;
  
  export const KEY_Hangul_KkogjiDalrinIeung: number;
  
  export const KEY_Hangul_Mieum: number;
  
  export const KEY_Hangul_MultipleCandidate: number;
  
  export const KEY_Hangul_Nieun: number;
  
  export const KEY_Hangul_NieunHieuh: number;
  
  export const KEY_Hangul_NieunJieuj: number;
  
  export const KEY_Hangul_O: number;
  
  export const KEY_Hangul_OE: number;
  
  export const KEY_Hangul_PanSios: number;
  
  export const KEY_Hangul_Phieuf: number;
  
  export const KEY_Hangul_Pieub: number;
  
  export const KEY_Hangul_PieubSios: number;
  
  export const KEY_Hangul_PostHanja: number;
  
  export const KEY_Hangul_PreHanja: number;
  
  export const KEY_Hangul_PreviousCandidate: number;
  
  export const KEY_Hangul_Rieul: number;
  
  export const KEY_Hangul_RieulHieuh: number;
  
  export const KEY_Hangul_RieulKiyeog: number;
  
  export const KEY_Hangul_RieulMieum: number;
  
  export const KEY_Hangul_RieulPhieuf: number;
  
  export const KEY_Hangul_RieulPieub: number;
  
  export const KEY_Hangul_RieulSios: number;
  
  export const KEY_Hangul_RieulTieut: number;
  
  export const KEY_Hangul_RieulYeorinHieuh: number;
  
  export const KEY_Hangul_Romaja: number;
  
  export const KEY_Hangul_SingleCandidate: number;
  
  export const KEY_Hangul_Sios: number;
  
  export const KEY_Hangul_Special: number;
  
  export const KEY_Hangul_SsangDikeud: number;
  
  export const KEY_Hangul_SsangJieuj: number;
  
  export const KEY_Hangul_SsangKiyeog: number;
  
  export const KEY_Hangul_SsangPieub: number;
  
  export const KEY_Hangul_SsangSios: number;
  
  export const KEY_Hangul_Start: number;
  
  export const KEY_Hangul_SunkyeongeumMieum: number;
  
  export const KEY_Hangul_SunkyeongeumPhieuf: number;
  
  export const KEY_Hangul_SunkyeongeumPieub: number;
  
  export const KEY_Hangul_Tieut: number;
  
  export const KEY_Hangul_U: number;
  
  export const KEY_Hangul_WA: number;
  
  export const KEY_Hangul_WAE: number;
  
  export const KEY_Hangul_WE: number;
  
  export const KEY_Hangul_WEO: number;
  
  export const KEY_Hangul_WI: number;
  
  export const KEY_Hangul_YA: number;
  
  export const KEY_Hangul_YAE: number;
  
  export const KEY_Hangul_YE: number;
  
  export const KEY_Hangul_YEO: number;
  
  export const KEY_Hangul_YI: number;
  
  export const KEY_Hangul_YO: number;
  
  export const KEY_Hangul_YU: number;
  
  export const KEY_Hangul_YeorinHieuh: number;
  
  export const KEY_Hangul_switch: number;
  
  export const KEY_Hankaku: number;
  
  export const KEY_Hcircumflex: number;
  
  export const KEY_Hebrew_switch: number;
  
  export const KEY_Help: number;
  
  export const KEY_Henkan: number;
  
  export const KEY_Henkan_Mode: number;
  
  export const KEY_Hibernate: number;
  
  export const KEY_Hiragana: number;
  
  export const KEY_Hiragana_Katakana: number;
  
  export const KEY_History: number;
  
  export const KEY_Home: number;
  
  export const KEY_HomePage: number;
  
  export const KEY_HotLinks: number;
  
  export const KEY_Hstroke: number;
  
  export const KEY_Hyper_L: number;
  
  export const KEY_Hyper_R: number;
  
  export const KEY_I: number;
  
  export const KEY_ISO_Center_Object: number;
  
  export const KEY_ISO_Continuous_Underline: number;
  
  export const KEY_ISO_Discontinuous_Underline: number;
  
  export const KEY_ISO_Emphasize: number;
  
  export const KEY_ISO_Enter: number;
  
  export const KEY_ISO_Fast_Cursor_Down: number;
  
  export const KEY_ISO_Fast_Cursor_Left: number;
  
  export const KEY_ISO_Fast_Cursor_Right: number;
  
  export const KEY_ISO_Fast_Cursor_Up: number;
  
  export const KEY_ISO_First_Group: number;
  
  export const KEY_ISO_First_Group_Lock: number;
  
  export const KEY_ISO_Group_Latch: number;
  
  export const KEY_ISO_Group_Lock: number;
  
  export const KEY_ISO_Group_Shift: number;
  
  export const KEY_ISO_Last_Group: number;
  
  export const KEY_ISO_Last_Group_Lock: number;
  
  export const KEY_ISO_Left_Tab: number;
  
  export const KEY_ISO_Level2_Latch: number;
  
  export const KEY_ISO_Level3_Latch: number;
  
  export const KEY_ISO_Level3_Lock: number;
  
  export const KEY_ISO_Level3_Shift: number;
  
  export const KEY_ISO_Level5_Latch: number;
  
  export const KEY_ISO_Level5_Lock: number;
  
  export const KEY_ISO_Level5_Shift: number;
  
  export const KEY_ISO_Lock: number;
  
  export const KEY_ISO_Move_Line_Down: number;
  
  export const KEY_ISO_Move_Line_Up: number;
  
  export const KEY_ISO_Next_Group: number;
  
  export const KEY_ISO_Next_Group_Lock: number;
  
  export const KEY_ISO_Partial_Line_Down: number;
  
  export const KEY_ISO_Partial_Line_Up: number;
  
  export const KEY_ISO_Partial_Space_Left: number;
  
  export const KEY_ISO_Partial_Space_Right: number;
  
  export const KEY_ISO_Prev_Group: number;
  
  export const KEY_ISO_Prev_Group_Lock: number;
  
  export const KEY_ISO_Release_Both_Margins: number;
  
  export const KEY_ISO_Release_Margin_Left: number;
  
  export const KEY_ISO_Release_Margin_Right: number;
  
  export const KEY_ISO_Set_Margin_Left: number;
  
  export const KEY_ISO_Set_Margin_Right: number;
  
  export const KEY_Iabovedot: number;
  
  export const KEY_Iacute: number;
  
  export const KEY_Ibelowdot: number;
  
  export const KEY_Ibreve: number;
  
  export const KEY_Icircumflex: number;
  
  export const KEY_Idiaeresis: number;
  
  export const KEY_Igrave: number;
  
  export const KEY_Ihook: number;
  
  export const KEY_Imacron: number;
  
  export const KEY_Insert: number;
  
  export const KEY_Iogonek: number;
  
  export const KEY_Itilde: number;
  
  export const KEY_J: number;
  
  export const KEY_Jcircumflex: number;
  
  export const KEY_K: number;
  
  export const KEY_KP_0: number;
  
  export const KEY_KP_1: number;
  
  export const KEY_KP_2: number;
  
  export const KEY_KP_3: number;
  
  export const KEY_KP_4: number;
  
  export const KEY_KP_5: number;
  
  export const KEY_KP_6: number;
  
  export const KEY_KP_7: number;
  
  export const KEY_KP_8: number;
  
  export const KEY_KP_9: number;
  
  export const KEY_KP_Add: number;
  
  export const KEY_KP_Begin: number;
  
  export const KEY_KP_Decimal: number;
  
  export const KEY_KP_Delete: number;
  
  export const KEY_KP_Divide: number;
  
  export const KEY_KP_Down: number;
  
  export const KEY_KP_End: number;
  
  export const KEY_KP_Enter: number;
  
  export const KEY_KP_Equal: number;
  
  export const KEY_KP_F1: number;
  
  export const KEY_KP_F2: number;
  
  export const KEY_KP_F3: number;
  
  export const KEY_KP_F4: number;
  
  export const KEY_KP_Home: number;
  
  export const KEY_KP_Insert: number;
  
  export const KEY_KP_Left: number;
  
  export const KEY_KP_Multiply: number;
  
  export const KEY_KP_Next: number;
  
  export const KEY_KP_Page_Down: number;
  
  export const KEY_KP_Page_Up: number;
  
  export const KEY_KP_Prior: number;
  
  export const KEY_KP_Right: number;
  
  export const KEY_KP_Separator: number;
  
  export const KEY_KP_Space: number;
  
  export const KEY_KP_Subtract: number;
  
  export const KEY_KP_Tab: number;
  
  export const KEY_KP_Up: number;
  
  export const KEY_Kana_Lock: number;
  
  export const KEY_Kana_Shift: number;
  
  export const KEY_Kanji: number;
  
  export const KEY_Kanji_Bangou: number;
  
  export const KEY_Katakana: number;
  
  export const KEY_KbdBrightnessDown: number;
  
  export const KEY_KbdBrightnessUp: number;
  
  export const KEY_KbdLightOnOff: number;
  
  export const KEY_Kcedilla: number;
  
  export const KEY_Korean_Won: number;
  
  export const KEY_L: number;
  
  export const KEY_L1: number;
  
  export const KEY_L10: number;
  
  export const KEY_L2: number;
  
  export const KEY_L3: number;
  
  export const KEY_L4: number;
  
  export const KEY_L5: number;
  
  export const KEY_L6: number;
  
  export const KEY_L7: number;
  
  export const KEY_L8: number;
  
  export const KEY_L9: number;
  
  export const KEY_Lacute: number;
  
  export const KEY_Last_Virtual_Screen: number;
  
  export const KEY_Launch0: number;
  
  export const KEY_Launch1: number;
  
  export const KEY_Launch2: number;
  
  export const KEY_Launch3: number;
  
  export const KEY_Launch4: number;
  
  export const KEY_Launch5: number;
  
  export const KEY_Launch6: number;
  
  export const KEY_Launch7: number;
  
  export const KEY_Launch8: number;
  
  export const KEY_Launch9: number;
  
  export const KEY_LaunchA: number;
  
  export const KEY_LaunchB: number;
  
  export const KEY_LaunchC: number;
  
  export const KEY_LaunchD: number;
  
  export const KEY_LaunchE: number;
  
  export const KEY_LaunchF: number;
  
  export const KEY_Lbelowdot: number;
  
  export const KEY_Lcaron: number;
  
  export const KEY_Lcedilla: number;
  
  export const KEY_Left: number;
  
  export const KEY_LightBulb: number;
  
  export const KEY_Linefeed: number;
  
  export const KEY_LiraSign: number;
  
  export const KEY_LogGrabInfo: number;
  
  export const KEY_LogOff: number;
  
  export const KEY_LogWindowTree: number;
  
  export const KEY_Lstroke: number;
  
  export const KEY_M: number;
  
  export const KEY_Mabovedot: number;
  
  export const KEY_Macedonia_DSE: number;
  
  export const KEY_Macedonia_GJE: number;
  
  export const KEY_Macedonia_KJE: number;
  
  export const KEY_Macedonia_dse: number;
  
  export const KEY_Macedonia_gje: number;
  
  export const KEY_Macedonia_kje: number;
  
  export const KEY_Mae_Koho: number;
  
  export const KEY_Mail: number;
  
  export const KEY_MailForward: number;
  
  export const KEY_Market: number;
  
  export const KEY_Massyo: number;
  
  export const KEY_Meeting: number;
  
  export const KEY_Memo: number;
  
  export const KEY_Menu: number;
  
  export const KEY_MenuKB: number;
  
  export const KEY_MenuPB: number;
  
  export const KEY_Messenger: number;
  
  export const KEY_Meta_L: number;
  
  export const KEY_Meta_R: number;
  
  export const KEY_MillSign: number;
  
  export const KEY_ModeLock: number;
  
  export const KEY_Mode_switch: number;
  
  export const KEY_MonBrightnessDown: number;
  
  export const KEY_MonBrightnessUp: number;
  
  export const KEY_MouseKeys_Accel_Enable: number;
  
  export const KEY_MouseKeys_Enable: number;
  
  export const KEY_Muhenkan: number;
  
  export const KEY_Multi_key: number;
  
  export const KEY_MultipleCandidate: number;
  
  export const KEY_Music: number;
  
  export const KEY_MyComputer: number;
  
  export const KEY_MySites: number;
  
  export const KEY_N: number;
  
  export const KEY_Nacute: number;
  
  export const KEY_NairaSign: number;
  
  export const KEY_Ncaron: number;
  
  export const KEY_Ncedilla: number;
  
  export const KEY_New: number;
  
  export const KEY_NewSheqelSign: number;
  
  export const KEY_News: number;
  
  export const KEY_Next: number;
  
  export const KEY_Next_VMode: number;
  
  export const KEY_Next_Virtual_Screen: number;
  
  export const KEY_Ntilde: number;
  
  export const KEY_Num_Lock: number;
  
  export const KEY_O: number;
  
  export const KEY_OE: number;
  
  export const KEY_Oacute: number;
  
  export const KEY_Obarred: number;
  
  export const KEY_Obelowdot: number;
  
  export const KEY_Ocaron: number;
  
  export const KEY_Ocircumflex: number;
  
  export const KEY_Ocircumflexacute: number;
  
  export const KEY_Ocircumflexbelowdot: number;
  
  export const KEY_Ocircumflexgrave: number;
  
  export const KEY_Ocircumflexhook: number;
  
  export const KEY_Ocircumflextilde: number;
  
  export const KEY_Odiaeresis: number;
  
  export const KEY_Odoubleacute: number;
  
  export const KEY_OfficeHome: number;
  
  export const KEY_Ograve: number;
  
  export const KEY_Ohook: number;
  
  export const KEY_Ohorn: number;
  
  export const KEY_Ohornacute: number;
  
  export const KEY_Ohornbelowdot: number;
  
  export const KEY_Ohorngrave: number;
  
  export const KEY_Ohornhook: number;
  
  export const KEY_Ohorntilde: number;
  
  export const KEY_Omacron: number;
  
  export const KEY_Ooblique: number;
  
  export const KEY_Open: number;
  
  export const KEY_OpenURL: number;
  
  export const KEY_Option: number;
  
  export const KEY_Oslash: number;
  
  export const KEY_Otilde: number;
  
  export const KEY_Overlay1_Enable: number;
  
  export const KEY_Overlay2_Enable: number;
  
  export const KEY_P: number;
  
  export const KEY_Pabovedot: number;
  
  export const KEY_Page_Down: number;
  
  export const KEY_Page_Up: number;
  
  export const KEY_Paste: number;
  
  export const KEY_Pause: number;
  
  export const KEY_PesetaSign: number;
  
  export const KEY_Phone: number;
  
  export const KEY_Pictures: number;
  
  export const KEY_Pointer_Accelerate: number;
  
  export const KEY_Pointer_Button1: number;
  
  export const KEY_Pointer_Button2: number;
  
  export const KEY_Pointer_Button3: number;
  
  export const KEY_Pointer_Button4: number;
  
  export const KEY_Pointer_Button5: number;
  
  export const KEY_Pointer_Button_Dflt: number;
  
  export const KEY_Pointer_DblClick1: number;
  
  export const KEY_Pointer_DblClick2: number;
  
  export const KEY_Pointer_DblClick3: number;
  
  export const KEY_Pointer_DblClick4: number;
  
  export const KEY_Pointer_DblClick5: number;
  
  export const KEY_Pointer_DblClick_Dflt: number;
  
  export const KEY_Pointer_DfltBtnNext: number;
  
  export const KEY_Pointer_DfltBtnPrev: number;
  
  export const KEY_Pointer_Down: number;
  
  export const KEY_Pointer_DownLeft: number;
  
  export const KEY_Pointer_DownRight: number;
  
  export const KEY_Pointer_Drag1: number;
  
  export const KEY_Pointer_Drag2: number;
  
  export const KEY_Pointer_Drag3: number;
  
  export const KEY_Pointer_Drag4: number;
  
  export const KEY_Pointer_Drag5: number;
  
  export const KEY_Pointer_Drag_Dflt: number;
  
  export const KEY_Pointer_EnableKeys: number;
  
  export const KEY_Pointer_Left: number;
  
  export const KEY_Pointer_Right: number;
  
  export const KEY_Pointer_Up: number;
  
  export const KEY_Pointer_UpLeft: number;
  
  export const KEY_Pointer_UpRight: number;
  
  export const KEY_PowerDown: number;
  
  export const KEY_PowerOff: number;
  
  export const KEY_Prev_VMode: number;
  
  export const KEY_Prev_Virtual_Screen: number;
  
  export const KEY_PreviousCandidate: number;
  
  export const KEY_Print: number;
  
  export const KEY_Prior: number;
  
  export const KEY_Q: number;
  
  export const KEY_R: number;
  
  export const KEY_R1: number;
  
  export const KEY_R10: number;
  
  export const KEY_R11: number;
  
  export const KEY_R12: number;
  
  export const KEY_R13: number;
  
  export const KEY_R14: number;
  
  export const KEY_R15: number;
  
  export const KEY_R2: number;
  
  export const KEY_R3: number;
  
  export const KEY_R4: number;
  
  export const KEY_R5: number;
  
  export const KEY_R6: number;
  
  export const KEY_R7: number;
  
  export const KEY_R8: number;
  
  export const KEY_R9: number;
  
  export const KEY_Racute: number;
  
  export const KEY_Rcaron: number;
  
  export const KEY_Rcedilla: number;
  
  export const KEY_Red: number;
  
  export const KEY_Redo: number;
  
  export const KEY_Refresh: number;
  
  export const KEY_Reload: number;
  
  export const KEY_RepeatKeys_Enable: number;
  
  export const KEY_Reply: number;
  
  export const KEY_Return: number;
  
  export const KEY_Right: number;
  
  export const KEY_RockerDown: number;
  
  export const KEY_RockerEnter: number;
  
  export const KEY_RockerUp: number;
  
  export const KEY_Romaji: number;
  
  export const KEY_RotateWindows: number;
  
  export const KEY_RotationKB: number;
  
  export const KEY_RotationPB: number;
  
  export const KEY_RupeeSign: number;
  
  export const KEY_S: number;
  
  export const KEY_SCHWA: number;
  
  export const KEY_Sabovedot: number;
  
  export const KEY_Sacute: number;
  
  export const KEY_Save: number;
  
  export const KEY_Scaron: number;
  
  export const KEY_Scedilla: number;
  
  export const KEY_Scircumflex: number;
  
  export const KEY_ScreenSaver: number;
  
  export const KEY_ScrollClick: number;
  
  export const KEY_ScrollDown: number;
  
  export const KEY_ScrollUp: number;
  
  export const KEY_Scroll_Lock: number;
  
  export const KEY_Search: number;
  
  export const KEY_Select: number;
  
  export const KEY_SelectButton: number;
  
  export const KEY_Send: number;
  
  export const KEY_Serbian_DJE: number;
  
  export const KEY_Serbian_DZE: number;
  
  export const KEY_Serbian_JE: number;
  
  export const KEY_Serbian_LJE: number;
  
  export const KEY_Serbian_NJE: number;
  
  export const KEY_Serbian_TSHE: number;
  
  export const KEY_Serbian_dje: number;
  
  export const KEY_Serbian_dze: number;
  
  export const KEY_Serbian_je: number;
  
  export const KEY_Serbian_lje: number;
  
  export const KEY_Serbian_nje: number;
  
  export const KEY_Serbian_tshe: number;
  
  export const KEY_Shift_L: number;
  
  export const KEY_Shift_Lock: number;
  
  export const KEY_Shift_R: number;
  
  export const KEY_Shop: number;
  
  export const KEY_SingleCandidate: number;
  
  export const KEY_Sinh_a: number;
  
  export const KEY_Sinh_aa: number;
  
  export const KEY_Sinh_aa2: number;
  
  export const KEY_Sinh_ae: number;
  
  export const KEY_Sinh_ae2: number;
  
  export const KEY_Sinh_aee: number;
  
  export const KEY_Sinh_aee2: number;
  
  export const KEY_Sinh_ai: number;
  
  export const KEY_Sinh_ai2: number;
  
  export const KEY_Sinh_al: number;
  
  export const KEY_Sinh_au: number;
  
  export const KEY_Sinh_au2: number;
  
  export const KEY_Sinh_ba: number;
  
  export const KEY_Sinh_bha: number;
  
  export const KEY_Sinh_ca: number;
  
  export const KEY_Sinh_cha: number;
  
  export const KEY_Sinh_dda: number;
  
  export const KEY_Sinh_ddha: number;
  
  export const KEY_Sinh_dha: number;
  
  export const KEY_Sinh_dhha: number;
  
  export const KEY_Sinh_e: number;
  
  export const KEY_Sinh_e2: number;
  
  export const KEY_Sinh_ee: number;
  
  export const KEY_Sinh_ee2: number;
  
  export const KEY_Sinh_fa: number;
  
  export const KEY_Sinh_ga: number;
  
  export const KEY_Sinh_gha: number;
  
  export const KEY_Sinh_h2: number;
  
  export const KEY_Sinh_ha: number;
  
  export const KEY_Sinh_i: number;
  
  export const KEY_Sinh_i2: number;
  
  export const KEY_Sinh_ii: number;
  
  export const KEY_Sinh_ii2: number;
  
  export const KEY_Sinh_ja: number;
  
  export const KEY_Sinh_jha: number;
  
  export const KEY_Sinh_jnya: number;
  
  export const KEY_Sinh_ka: number;
  
  export const KEY_Sinh_kha: number;
  
  export const KEY_Sinh_kunddaliya: number;
  
  export const KEY_Sinh_la: number;
  
  export const KEY_Sinh_lla: number;
  
  export const KEY_Sinh_lu: number;
  
  export const KEY_Sinh_lu2: number;
  
  export const KEY_Sinh_luu: number;
  
  export const KEY_Sinh_luu2: number;
  
  export const KEY_Sinh_ma: number;
  
  export const KEY_Sinh_mba: number;
  
  export const KEY_Sinh_na: number;
  
  export const KEY_Sinh_ndda: number;
  
  export const KEY_Sinh_ndha: number;
  
  export const KEY_Sinh_ng: number;
  
  export const KEY_Sinh_ng2: number;
  
  export const KEY_Sinh_nga: number;
  
  export const KEY_Sinh_nja: number;
  
  export const KEY_Sinh_nna: number;
  
  export const KEY_Sinh_nya: number;
  
  export const KEY_Sinh_o: number;
  
  export const KEY_Sinh_o2: number;
  
  export const KEY_Sinh_oo: number;
  
  export const KEY_Sinh_oo2: number;
  
  export const KEY_Sinh_pa: number;
  
  export const KEY_Sinh_pha: number;
  
  export const KEY_Sinh_ra: number;
  
  export const KEY_Sinh_ri: number;
  
  export const KEY_Sinh_rii: number;
  
  export const KEY_Sinh_ru2: number;
  
  export const KEY_Sinh_ruu2: number;
  
  export const KEY_Sinh_sa: number;
  
  export const KEY_Sinh_sha: number;
  
  export const KEY_Sinh_ssha: number;
  
  export const KEY_Sinh_tha: number;
  
  export const KEY_Sinh_thha: number;
  
  export const KEY_Sinh_tta: number;
  
  export const KEY_Sinh_ttha: number;
  
  export const KEY_Sinh_u: number;
  
  export const KEY_Sinh_u2: number;
  
  export const KEY_Sinh_uu: number;
  
  export const KEY_Sinh_uu2: number;
  
  export const KEY_Sinh_va: number;
  
  export const KEY_Sinh_ya: number;
  
  export const KEY_Sleep: number;
  
  export const KEY_SlowKeys_Enable: number;
  
  export const KEY_Spell: number;
  
  export const KEY_SplitScreen: number;
  
  export const KEY_Standby: number;
  
  export const KEY_Start: number;
  
  export const KEY_StickyKeys_Enable: number;
  
  export const KEY_Stop: number;
  
  export const KEY_Subtitle: number;
  
  export const KEY_Super_L: number;
  
  export const KEY_Super_R: number;
  
  export const KEY_Support: number;
  
  export const KEY_Suspend: number;
  
  export const KEY_Switch_VT_1: number;
  
  export const KEY_Switch_VT_10: number;
  
  export const KEY_Switch_VT_11: number;
  
  export const KEY_Switch_VT_12: number;
  
  export const KEY_Switch_VT_2: number;
  
  export const KEY_Switch_VT_3: number;
  
  export const KEY_Switch_VT_4: number;
  
  export const KEY_Switch_VT_5: number;
  
  export const KEY_Switch_VT_6: number;
  
  export const KEY_Switch_VT_7: number;
  
  export const KEY_Switch_VT_8: number;
  
  export const KEY_Switch_VT_9: number;
  
  export const KEY_Sys_Req: number;
  
  export const KEY_T: number;
  
  export const KEY_THORN: number;
  
  export const KEY_Tab: number;
  
  export const KEY_Tabovedot: number;
  
  export const KEY_TaskPane: number;
  
  export const KEY_Tcaron: number;
  
  export const KEY_Tcedilla: number;
  
  export const KEY_Terminal: number;
  
  export const KEY_Terminate_Server: number;
  
  export const KEY_Thai_baht: number;
  
  export const KEY_Thai_bobaimai: number;
  
  export const KEY_Thai_chochan: number;
  
  export const KEY_Thai_chochang: number;
  
  export const KEY_Thai_choching: number;
  
  export const KEY_Thai_chochoe: number;
  
  export const KEY_Thai_dochada: number;
  
  export const KEY_Thai_dodek: number;
  
  export const KEY_Thai_fofa: number;
  
  export const KEY_Thai_fofan: number;
  
  export const KEY_Thai_hohip: number;
  
  export const KEY_Thai_honokhuk: number;
  
  export const KEY_Thai_khokhai: number;
  
  export const KEY_Thai_khokhon: number;
  
  export const KEY_Thai_khokhuat: number;
  
  export const KEY_Thai_khokhwai: number;
  
  export const KEY_Thai_khorakhang: number;
  
  export const KEY_Thai_kokai: number;
  
  export const KEY_Thai_lakkhangyao: number;
  
  export const KEY_Thai_lekchet: number;
  
  export const KEY_Thai_lekha: number;
  
  export const KEY_Thai_lekhok: number;
  
  export const KEY_Thai_lekkao: number;
  
  export const KEY_Thai_leknung: number;
  
  export const KEY_Thai_lekpaet: number;
  
  export const KEY_Thai_leksam: number;
  
  export const KEY_Thai_leksi: number;
  
  export const KEY_Thai_leksong: number;
  
  export const KEY_Thai_leksun: number;
  
  export const KEY_Thai_lochula: number;
  
  export const KEY_Thai_loling: number;
  
  export const KEY_Thai_lu: number;
  
  export const KEY_Thai_maichattawa: number;
  
  export const KEY_Thai_maiek: number;
  
  export const KEY_Thai_maihanakat: number;
  
  export const KEY_Thai_maihanakat_maitho: number;
  
  export const KEY_Thai_maitaikhu: number;
  
  export const KEY_Thai_maitho: number;
  
  export const KEY_Thai_maitri: number;
  
  export const KEY_Thai_maiyamok: number;
  
  export const KEY_Thai_moma: number;
  
  export const KEY_Thai_ngongu: number;
  
  export const KEY_Thai_nikhahit: number;
  
  export const KEY_Thai_nonen: number;
  
  export const KEY_Thai_nonu: number;
  
  export const KEY_Thai_oang: number;
  
  export const KEY_Thai_paiyannoi: number;
  
  export const KEY_Thai_phinthu: number;
  
  export const KEY_Thai_phophan: number;
  
  export const KEY_Thai_phophung: number;
  
  export const KEY_Thai_phosamphao: number;
  
  export const KEY_Thai_popla: number;
  
  export const KEY_Thai_rorua: number;
  
  export const KEY_Thai_ru: number;
  
  export const KEY_Thai_saraa: number;
  
  export const KEY_Thai_saraaa: number;
  
  export const KEY_Thai_saraae: number;
  
  export const KEY_Thai_saraaimaimalai: number;
  
  export const KEY_Thai_saraaimaimuan: number;
  
  export const KEY_Thai_saraam: number;
  
  export const KEY_Thai_sarae: number;
  
  export const KEY_Thai_sarai: number;
  
  export const KEY_Thai_saraii: number;
  
  export const KEY_Thai_sarao: number;
  
  export const KEY_Thai_sarau: number;
  
  export const KEY_Thai_saraue: number;
  
  export const KEY_Thai_sarauee: number;
  
  export const KEY_Thai_sarauu: number;
  
  export const KEY_Thai_sorusi: number;
  
  export const KEY_Thai_sosala: number;
  
  export const KEY_Thai_soso: number;
  
  export const KEY_Thai_sosua: number;
  
  export const KEY_Thai_thanthakhat: number;
  
  export const KEY_Thai_thonangmontho: number;
  
  export const KEY_Thai_thophuthao: number;
  
  export const KEY_Thai_thothahan: number;
  
  export const KEY_Thai_thothan: number;
  
  export const KEY_Thai_thothong: number;
  
  export const KEY_Thai_thothung: number;
  
  export const KEY_Thai_topatak: number;
  
  export const KEY_Thai_totao: number;
  
  export const KEY_Thai_wowaen: number;
  
  export const KEY_Thai_yoyak: number;
  
  export const KEY_Thai_yoying: number;
  
  export const KEY_Thorn: number;
  
  export const KEY_Time: number;
  
  export const KEY_ToDoList: number;
  
  export const KEY_Tools: number;
  
  export const KEY_TopMenu: number;
  
  export const KEY_TouchpadOff: number;
  
  export const KEY_TouchpadOn: number;
  
  export const KEY_TouchpadToggle: number;
  
  export const KEY_Touroku: number;
  
  export const KEY_Travel: number;
  
  export const KEY_Tslash: number;
  
  export const KEY_U: number;
  
  export const KEY_UWB: number;
  
  export const KEY_Uacute: number;
  
  export const KEY_Ubelowdot: number;
  
  export const KEY_Ubreve: number;
  
  export const KEY_Ucircumflex: number;
  
  export const KEY_Udiaeresis: number;
  
  export const KEY_Udoubleacute: number;
  
  export const KEY_Ugrave: number;
  
  export const KEY_Uhook: number;
  
  export const KEY_Uhorn: number;
  
  export const KEY_Uhornacute: number;
  
  export const KEY_Uhornbelowdot: number;
  
  export const KEY_Uhorngrave: number;
  
  export const KEY_Uhornhook: number;
  
  export const KEY_Uhorntilde: number;
  
  export const KEY_Ukrainian_GHE_WITH_UPTURN: number;
  
  export const KEY_Ukrainian_I: number;
  
  export const KEY_Ukrainian_IE: number;
  
  export const KEY_Ukrainian_YI: number;
  
  export const KEY_Ukrainian_ghe_with_upturn: number;
  
  export const KEY_Ukrainian_i: number;
  
  export const KEY_Ukrainian_ie: number;
  
  export const KEY_Ukrainian_yi: number;
  
  export const KEY_Ukranian_I: number;
  
  export const KEY_Ukranian_JE: number;
  
  export const KEY_Ukranian_YI: number;
  
  export const KEY_Ukranian_i: number;
  
  export const KEY_Ukranian_je: number;
  
  export const KEY_Ukranian_yi: number;
  
  export const KEY_Umacron: number;
  
  export const KEY_Undo: number;
  
  export const KEY_Ungrab: number;
  
  export const KEY_Uogonek: number;
  
  export const KEY_Up: number;
  
  export const KEY_Uring: number;
  
  export const KEY_User1KB: number;
  
  export const KEY_User2KB: number;
  
  export const KEY_UserPB: number;
  
  export const KEY_Utilde: number;
  
  export const KEY_V: number;
  
  export const KEY_VendorHome: number;
  
  export const KEY_Video: number;
  
  export const KEY_View: number;
  
  export const KEY_VoidSymbol: number;
  
  export const KEY_W: number;
  
  export const KEY_WLAN: number;
  
  export const KEY_WWW: number;
  
  export const KEY_Wacute: number;
  
  export const KEY_WakeUp: number;
  
  export const KEY_Wcircumflex: number;
  
  export const KEY_Wdiaeresis: number;
  
  export const KEY_WebCam: number;
  
  export const KEY_Wgrave: number;
  
  export const KEY_WheelButton: number;
  
  export const KEY_WindowClear: number;
  
  export const KEY_WonSign: number;
  
  export const KEY_Word: number;
  
  export const KEY_X: number;
  
  export const KEY_Xabovedot: number;
  
  export const KEY_Xfer: number;
  
  export const KEY_Y: number;
  
  export const KEY_Yacute: number;
  
  export const KEY_Ybelowdot: number;
  
  export const KEY_Ycircumflex: number;
  
  export const KEY_Ydiaeresis: number;
  
  export const KEY_Yellow: number;
  
  export const KEY_Ygrave: number;
  
  export const KEY_Yhook: number;
  
  export const KEY_Ytilde: number;
  
  export const KEY_Z: number;
  
  export const KEY_Zabovedot: number;
  
  export const KEY_Zacute: number;
  
  export const KEY_Zcaron: number;
  
  export const KEY_Zen_Koho: number;
  
  export const KEY_Zenkaku: number;
  
  export const KEY_Zenkaku_Hankaku: number;
  
  export const KEY_ZoomIn: number;
  
  export const KEY_ZoomOut: number;
  
  export const KEY_Zstroke: number;
  
  export const KEY_a: number;
  
  export const KEY_aacute: number;
  
  export const KEY_abelowdot: number;
  
  export const KEY_abovedot: number;
  
  export const KEY_abreve: number;
  
  export const KEY_abreveacute: number;
  
  export const KEY_abrevebelowdot: number;
  
  export const KEY_abrevegrave: number;
  
  export const KEY_abrevehook: number;
  
  export const KEY_abrevetilde: number;
  
  export const KEY_acircumflex: number;
  
  export const KEY_acircumflexacute: number;
  
  export const KEY_acircumflexbelowdot: number;
  
  export const KEY_acircumflexgrave: number;
  
  export const KEY_acircumflexhook: number;
  
  export const KEY_acircumflextilde: number;
  
  export const KEY_acute: number;
  
  export const KEY_adiaeresis: number;
  
  export const KEY_ae: number;
  
  export const KEY_agrave: number;
  
  export const KEY_ahook: number;
  
  export const KEY_amacron: number;
  
  export const KEY_ampersand: number;
  
  export const KEY_aogonek: number;
  
  export const KEY_apostrophe: number;
  
  export const KEY_approxeq: number;
  
  export const KEY_approximate: number;
  
  export const KEY_aring: number;
  
  export const KEY_asciicircum: number;
  
  export const KEY_asciitilde: number;
  
  export const KEY_asterisk: number;
  
  export const KEY_at: number;
  
  export const KEY_atilde: number;
  
  export const KEY_b: number;
  
  export const KEY_babovedot: number;
  
  export const KEY_backslash: number;
  
  export const KEY_ballotcross: number;
  
  export const KEY_bar: number;
  
  export const KEY_because: number;
  
  export const KEY_blank: number;
  
  export const KEY_botintegral: number;
  
  export const KEY_botleftparens: number;
  
  export const KEY_botleftsqbracket: number;
  
  export const KEY_botleftsummation: number;
  
  export const KEY_botrightparens: number;
  
  export const KEY_botrightsqbracket: number;
  
  export const KEY_botrightsummation: number;
  
  export const KEY_bott: number;
  
  export const KEY_botvertsummationconnector: number;
  
  export const KEY_braceleft: number;
  
  export const KEY_braceright: number;
  
  export const KEY_bracketleft: number;
  
  export const KEY_bracketright: number;
  
  export const KEY_braille_blank: number;
  
  export const KEY_braille_dot_1: number;
  
  export const KEY_braille_dot_10: number;
  
  export const KEY_braille_dot_2: number;
  
  export const KEY_braille_dot_3: number;
  
  export const KEY_braille_dot_4: number;
  
  export const KEY_braille_dot_5: number;
  
  export const KEY_braille_dot_6: number;
  
  export const KEY_braille_dot_7: number;
  
  export const KEY_braille_dot_8: number;
  
  export const KEY_braille_dot_9: number;
  
  export const KEY_braille_dots_1: number;
  
  export const KEY_braille_dots_12: number;
  
  export const KEY_braille_dots_123: number;
  
  export const KEY_braille_dots_1234: number;
  
  export const KEY_braille_dots_12345: number;
  
  export const KEY_braille_dots_123456: number;
  
  export const KEY_braille_dots_1234567: number;
  
  export const KEY_braille_dots_12345678: number;
  
  export const KEY_braille_dots_1234568: number;
  
  export const KEY_braille_dots_123457: number;
  
  export const KEY_braille_dots_1234578: number;
  
  export const KEY_braille_dots_123458: number;
  
  export const KEY_braille_dots_12346: number;
  
  export const KEY_braille_dots_123467: number;
  
  export const KEY_braille_dots_1234678: number;
  
  export const KEY_braille_dots_123468: number;
  
  export const KEY_braille_dots_12347: number;
  
  export const KEY_braille_dots_123478: number;
  
  export const KEY_braille_dots_12348: number;
  
  export const KEY_braille_dots_1235: number;
  
  export const KEY_braille_dots_12356: number;
  
  export const KEY_braille_dots_123567: number;
  
  export const KEY_braille_dots_1235678: number;
  
  export const KEY_braille_dots_123568: number;
  
  export const KEY_braille_dots_12357: number;
  
  export const KEY_braille_dots_123578: number;
  
  export const KEY_braille_dots_12358: number;
  
  export const KEY_braille_dots_1236: number;
  
  export const KEY_braille_dots_12367: number;
  
  export const KEY_braille_dots_123678: number;
  
  export const KEY_braille_dots_12368: number;
  
  export const KEY_braille_dots_1237: number;
  
  export const KEY_braille_dots_12378: number;
  
  export const KEY_braille_dots_1238: number;
  
  export const KEY_braille_dots_124: number;
  
  export const KEY_braille_dots_1245: number;
  
  export const KEY_braille_dots_12456: number;
  
  export const KEY_braille_dots_124567: number;
  
  export const KEY_braille_dots_1245678: number;
  
  export const KEY_braille_dots_124568: number;
  
  export const KEY_braille_dots_12457: number;
  
  export const KEY_braille_dots_124578: number;
  
  export const KEY_braille_dots_12458: number;
  
  export const KEY_braille_dots_1246: number;
  
  export const KEY_braille_dots_12467: number;
  
  export const KEY_braille_dots_124678: number;
  
  export const KEY_braille_dots_12468: number;
  
  export const KEY_braille_dots_1247: number;
  
  export const KEY_braille_dots_12478: number;
  
  export const KEY_braille_dots_1248: number;
  
  export const KEY_braille_dots_125: number;
  
  export const KEY_braille_dots_1256: number;
  
  export const KEY_braille_dots_12567: number;
  
  export const KEY_braille_dots_125678: number;
  
  export const KEY_braille_dots_12568: number;
  
  export const KEY_braille_dots_1257: number;
  
  export const KEY_braille_dots_12578: number;
  
  export const KEY_braille_dots_1258: number;
  
  export const KEY_braille_dots_126: number;
  
  export const KEY_braille_dots_1267: number;
  
  export const KEY_braille_dots_12678: number;
  
  export const KEY_braille_dots_1268: number;
  
  export const KEY_braille_dots_127: number;
  
  export const KEY_braille_dots_1278: number;
  
  export const KEY_braille_dots_128: number;
  
  export const KEY_braille_dots_13: number;
  
  export const KEY_braille_dots_134: number;
  
  export const KEY_braille_dots_1345: number;
  
  export const KEY_braille_dots_13456: number;
  
  export const KEY_braille_dots_134567: number;
  
  export const KEY_braille_dots_1345678: number;
  
  export const KEY_braille_dots_134568: number;
  
  export const KEY_braille_dots_13457: number;
  
  export const KEY_braille_dots_134578: number;
  
  export const KEY_braille_dots_13458: number;
  
  export const KEY_braille_dots_1346: number;
  
  export const KEY_braille_dots_13467: number;
  
  export const KEY_braille_dots_134678: number;
  
  export const KEY_braille_dots_13468: number;
  
  export const KEY_braille_dots_1347: number;
  
  export const KEY_braille_dots_13478: number;
  
  export const KEY_braille_dots_1348: number;
  
  export const KEY_braille_dots_135: number;
  
  export const KEY_braille_dots_1356: number;
  
  export const KEY_braille_dots_13567: number;
  
  export const KEY_braille_dots_135678: number;
  
  export const KEY_braille_dots_13568: number;
  
  export const KEY_braille_dots_1357: number;
  
  export const KEY_braille_dots_13578: number;
  
  export const KEY_braille_dots_1358: number;
  
  export const KEY_braille_dots_136: number;
  
  export const KEY_braille_dots_1367: number;
  
  export const KEY_braille_dots_13678: number;
  
  export const KEY_braille_dots_1368: number;
  
  export const KEY_braille_dots_137: number;
  
  export const KEY_braille_dots_1378: number;
  
  export const KEY_braille_dots_138: number;
  
  export const KEY_braille_dots_14: number;
  
  export const KEY_braille_dots_145: number;
  
  export const KEY_braille_dots_1456: number;
  
  export const KEY_braille_dots_14567: number;
  
  export const KEY_braille_dots_145678: number;
  
  export const KEY_braille_dots_14568: number;
  
  export const KEY_braille_dots_1457: number;
  
  export const KEY_braille_dots_14578: number;
  
  export const KEY_braille_dots_1458: number;
  
  export const KEY_braille_dots_146: number;
  
  export const KEY_braille_dots_1467: number;
  
  export const KEY_braille_dots_14678: number;
  
  export const KEY_braille_dots_1468: number;
  
  export const KEY_braille_dots_147: number;
  
  export const KEY_braille_dots_1478: number;
  
  export const KEY_braille_dots_148: number;
  
  export const KEY_braille_dots_15: number;
  
  export const KEY_braille_dots_156: number;
  
  export const KEY_braille_dots_1567: number;
  
  export const KEY_braille_dots_15678: number;
  
  export const KEY_braille_dots_1568: number;
  
  export const KEY_braille_dots_157: number;
  
  export const KEY_braille_dots_1578: number;
  
  export const KEY_braille_dots_158: number;
  
  export const KEY_braille_dots_16: number;
  
  export const KEY_braille_dots_167: number;
  
  export const KEY_braille_dots_1678: number;
  
  export const KEY_braille_dots_168: number;
  
  export const KEY_braille_dots_17: number;
  
  export const KEY_braille_dots_178: number;
  
  export const KEY_braille_dots_18: number;
  
  export const KEY_braille_dots_2: number;
  
  export const KEY_braille_dots_23: number;
  
  export const KEY_braille_dots_234: number;
  
  export const KEY_braille_dots_2345: number;
  
  export const KEY_braille_dots_23456: number;
  
  export const KEY_braille_dots_234567: number;
  
  export const KEY_braille_dots_2345678: number;
  
  export const KEY_braille_dots_234568: number;
  
  export const KEY_braille_dots_23457: number;
  
  export const KEY_braille_dots_234578: number;
  
  export const KEY_braille_dots_23458: number;
  
  export const KEY_braille_dots_2346: number;
  
  export const KEY_braille_dots_23467: number;
  
  export const KEY_braille_dots_234678: number;
  
  export const KEY_braille_dots_23468: number;
  
  export const KEY_braille_dots_2347: number;
  
  export const KEY_braille_dots_23478: number;
  
  export const KEY_braille_dots_2348: number;
  
  export const KEY_braille_dots_235: number;
  
  export const KEY_braille_dots_2356: number;
  
  export const KEY_braille_dots_23567: number;
  
  export const KEY_braille_dots_235678: number;
  
  export const KEY_braille_dots_23568: number;
  
  export const KEY_braille_dots_2357: number;
  
  export const KEY_braille_dots_23578: number;
  
  export const KEY_braille_dots_2358: number;
  
  export const KEY_braille_dots_236: number;
  
  export const KEY_braille_dots_2367: number;
  
  export const KEY_braille_dots_23678: number;
  
  export const KEY_braille_dots_2368: number;
  
  export const KEY_braille_dots_237: number;
  
  export const KEY_braille_dots_2378: number;
  
  export const KEY_braille_dots_238: number;
  
  export const KEY_braille_dots_24: number;
  
  export const KEY_braille_dots_245: number;
  
  export const KEY_braille_dots_2456: number;
  
  export const KEY_braille_dots_24567: number;
  
  export const KEY_braille_dots_245678: number;
  
  export const KEY_braille_dots_24568: number;
  
  export const KEY_braille_dots_2457: number;
  
  export const KEY_braille_dots_24578: number;
  
  export const KEY_braille_dots_2458: number;
  
  export const KEY_braille_dots_246: number;
  
  export const KEY_braille_dots_2467: number;
  
  export const KEY_braille_dots_24678: number;
  
  export const KEY_braille_dots_2468: number;
  
  export const KEY_braille_dots_247: number;
  
  export const KEY_braille_dots_2478: number;
  
  export const KEY_braille_dots_248: number;
  
  export const KEY_braille_dots_25: number;
  
  export const KEY_braille_dots_256: number;
  
  export const KEY_braille_dots_2567: number;
  
  export const KEY_braille_dots_25678: number;
  
  export const KEY_braille_dots_2568: number;
  
  export const KEY_braille_dots_257: number;
  
  export const KEY_braille_dots_2578: number;
  
  export const KEY_braille_dots_258: number;
  
  export const KEY_braille_dots_26: number;
  
  export const KEY_braille_dots_267: number;
  
  export const KEY_braille_dots_2678: number;
  
  export const KEY_braille_dots_268: number;
  
  export const KEY_braille_dots_27: number;
  
  export const KEY_braille_dots_278: number;
  
  export const KEY_braille_dots_28: number;
  
  export const KEY_braille_dots_3: number;
  
  export const KEY_braille_dots_34: number;
  
  export const KEY_braille_dots_345: number;
  
  export const KEY_braille_dots_3456: number;
  
  export const KEY_braille_dots_34567: number;
  
  export const KEY_braille_dots_345678: number;
  
  export const KEY_braille_dots_34568: number;
  
  export const KEY_braille_dots_3457: number;
  
  export const KEY_braille_dots_34578: number;
  
  export const KEY_braille_dots_3458: number;
  
  export const KEY_braille_dots_346: number;
  
  export const KEY_braille_dots_3467: number;
  
  export const KEY_braille_dots_34678: number;
  
  export const KEY_braille_dots_3468: number;
  
  export const KEY_braille_dots_347: number;
  
  export const KEY_braille_dots_3478: number;
  
  export const KEY_braille_dots_348: number;
  
  export const KEY_braille_dots_35: number;
  
  export const KEY_braille_dots_356: number;
  
  export const KEY_braille_dots_3567: number;
  
  export const KEY_braille_dots_35678: number;
  
  export const KEY_braille_dots_3568: number;
  
  export const KEY_braille_dots_357: number;
  
  export const KEY_braille_dots_3578: number;
  
  export const KEY_braille_dots_358: number;
  
  export const KEY_braille_dots_36: number;
  
  export const KEY_braille_dots_367: number;
  
  export const KEY_braille_dots_3678: number;
  
  export const KEY_braille_dots_368: number;
  
  export const KEY_braille_dots_37: number;
  
  export const KEY_braille_dots_378: number;
  
  export const KEY_braille_dots_38: number;
  
  export const KEY_braille_dots_4: number;
  
  export const KEY_braille_dots_45: number;
  
  export const KEY_braille_dots_456: number;
  
  export const KEY_braille_dots_4567: number;
  
  export const KEY_braille_dots_45678: number;
  
  export const KEY_braille_dots_4568: number;
  
  export const KEY_braille_dots_457: number;
  
  export const KEY_braille_dots_4578: number;
  
  export const KEY_braille_dots_458: number;
  
  export const KEY_braille_dots_46: number;
  
  export const KEY_braille_dots_467: number;
  
  export const KEY_braille_dots_4678: number;
  
  export const KEY_braille_dots_468: number;
  
  export const KEY_braille_dots_47: number;
  
  export const KEY_braille_dots_478: number;
  
  export const KEY_braille_dots_48: number;
  
  export const KEY_braille_dots_5: number;
  
  export const KEY_braille_dots_56: number;
  
  export const KEY_braille_dots_567: number;
  
  export const KEY_braille_dots_5678: number;
  
  export const KEY_braille_dots_568: number;
  
  export const KEY_braille_dots_57: number;
  
  export const KEY_braille_dots_578: number;
  
  export const KEY_braille_dots_58: number;
  
  export const KEY_braille_dots_6: number;
  
  export const KEY_braille_dots_67: number;
  
  export const KEY_braille_dots_678: number;
  
  export const KEY_braille_dots_68: number;
  
  export const KEY_braille_dots_7: number;
  
  export const KEY_braille_dots_78: number;
  
  export const KEY_braille_dots_8: number;
  
  export const KEY_breve: number;
  
  export const KEY_brokenbar: number;
  
  export const KEY_c: number;
  
  export const KEY_c_h: number;
  
  export const KEY_cabovedot: number;
  
  export const KEY_cacute: number;
  
  export const KEY_careof: number;
  
  export const KEY_caret: number;
  
  export const KEY_caron: number;
  
  export const KEY_ccaron: number;
  
  export const KEY_ccedilla: number;
  
  export const KEY_ccircumflex: number;
  
  export const KEY_cedilla: number;
  
  export const KEY_cent: number;
  
  export const KEY_ch: number;
  
  export const KEY_checkerboard: number;
  
  export const KEY_checkmark: number;
  
  export const KEY_circle: number;
  
  export const KEY_club: number;
  
  export const KEY_colon: number;
  
  export const KEY_comma: number;
  
  export const KEY_containsas: number;
  
  export const KEY_copyright: number;
  
  export const KEY_cr: number;
  
  export const KEY_crossinglines: number;
  
  export const KEY_cuberoot: number;
  
  export const KEY_currency: number;
  
  export const KEY_cursor: number;
  
  export const KEY_d: number;
  
  export const KEY_dabovedot: number;
  
  export const KEY_dagger: number;
  
  export const KEY_dcaron: number;
  
  export const KEY_dead_A: number;
  
  export const KEY_dead_E: number;
  
  export const KEY_dead_I: number;
  
  export const KEY_dead_O: number;
  
  export const KEY_dead_U: number;
  
  export const KEY_dead_a: number;
  
  export const KEY_dead_abovecomma: number;
  
  export const KEY_dead_abovedot: number;
  
  export const KEY_dead_abovereversedcomma: number;
  
  export const KEY_dead_abovering: number;
  
  export const KEY_dead_acute: number;
  
  export const KEY_dead_belowbreve: number;
  
  export const KEY_dead_belowcircumflex: number;
  
  export const KEY_dead_belowcomma: number;
  
  export const KEY_dead_belowdiaeresis: number;
  
  export const KEY_dead_belowdot: number;
  
  export const KEY_dead_belowmacron: number;
  
  export const KEY_dead_belowring: number;
  
  export const KEY_dead_belowtilde: number;
  
  export const KEY_dead_breve: number;
  
  export const KEY_dead_capital_schwa: number;
  
  export const KEY_dead_caron: number;
  
  export const KEY_dead_cedilla: number;
  
  export const KEY_dead_circumflex: number;
  
  export const KEY_dead_currency: number;
  
  export const KEY_dead_dasia: number;
  
  export const KEY_dead_diaeresis: number;
  
  export const KEY_dead_doubleacute: number;
  
  export const KEY_dead_doublegrave: number;
  
  export const KEY_dead_e: number;
  
  export const KEY_dead_grave: number;
  
  export const KEY_dead_greek: number;
  
  export const KEY_dead_hook: number;
  
  export const KEY_dead_horn: number;
  
  export const KEY_dead_i: number;
  
  export const KEY_dead_invertedbreve: number;
  
  export const KEY_dead_iota: number;
  
  export const KEY_dead_macron: number;
  
  export const KEY_dead_o: number;
  
  export const KEY_dead_ogonek: number;
  
  export const KEY_dead_perispomeni: number;
  
  export const KEY_dead_psili: number;
  
  export const KEY_dead_semivoiced_sound: number;
  
  export const KEY_dead_small_schwa: number;
  
  export const KEY_dead_stroke: number;
  
  export const KEY_dead_tilde: number;
  
  export const KEY_dead_u: number;
  
  export const KEY_dead_voiced_sound: number;
  
  export const KEY_decimalpoint: number;
  
  export const KEY_degree: number;
  
  export const KEY_diaeresis: number;
  
  export const KEY_diamond: number;
  
  export const KEY_digitspace: number;
  
  export const KEY_dintegral: number;
  
  export const KEY_division: number;
  
  export const KEY_dollar: number;
  
  export const KEY_doubbaselinedot: number;
  
  export const KEY_doubleacute: number;
  
  export const KEY_doubledagger: number;
  
  export const KEY_doublelowquotemark: number;
  
  export const KEY_downarrow: number;
  
  export const KEY_downcaret: number;
  
  export const KEY_downshoe: number;
  
  export const KEY_downstile: number;
  
  export const KEY_downtack: number;
  
  export const KEY_dstroke: number;
  
  export const KEY_e: number;
  
  export const KEY_eabovedot: number;
  
  export const KEY_eacute: number;
  
  export const KEY_ebelowdot: number;
  
  export const KEY_ecaron: number;
  
  export const KEY_ecircumflex: number;
  
  export const KEY_ecircumflexacute: number;
  
  export const KEY_ecircumflexbelowdot: number;
  
  export const KEY_ecircumflexgrave: number;
  
  export const KEY_ecircumflexhook: number;
  
  export const KEY_ecircumflextilde: number;
  
  export const KEY_ediaeresis: number;
  
  export const KEY_egrave: number;
  
  export const KEY_ehook: number;
  
  export const KEY_eightsubscript: number;
  
  export const KEY_eightsuperior: number;
  
  export const KEY_elementof: number;
  
  export const KEY_ellipsis: number;
  
  export const KEY_em3space: number;
  
  export const KEY_em4space: number;
  
  export const KEY_emacron: number;
  
  export const KEY_emdash: number;
  
  export const KEY_emfilledcircle: number;
  
  export const KEY_emfilledrect: number;
  
  export const KEY_emopencircle: number;
  
  export const KEY_emopenrectangle: number;
  
  export const KEY_emptyset: number;
  
  export const KEY_emspace: number;
  
  export const KEY_endash: number;
  
  export const KEY_enfilledcircbullet: number;
  
  export const KEY_enfilledsqbullet: number;
  
  export const KEY_eng: number;
  
  export const KEY_enopencircbullet: number;
  
  export const KEY_enopensquarebullet: number;
  
  export const KEY_enspace: number;
  
  export const KEY_eogonek: number;
  
  export const KEY_equal: number;
  
  export const KEY_eth: number;
  
  export const KEY_etilde: number;
  
  export const KEY_exclam: number;
  
  export const KEY_exclamdown: number;
  
  export const KEY_ezh: number;
  
  export const KEY_f: number;
  
  export const KEY_fabovedot: number;
  
  export const KEY_femalesymbol: number;
  
  export const KEY_ff: number;
  
  export const KEY_figdash: number;
  
  export const KEY_filledlefttribullet: number;
  
  export const KEY_filledrectbullet: number;
  
  export const KEY_filledrighttribullet: number;
  
  export const KEY_filledtribulletdown: number;
  
  export const KEY_filledtribulletup: number;
  
  export const KEY_fiveeighths: number;
  
  export const KEY_fivesixths: number;
  
  export const KEY_fivesubscript: number;
  
  export const KEY_fivesuperior: number;
  
  export const KEY_fourfifths: number;
  
  export const KEY_foursubscript: number;
  
  export const KEY_foursuperior: number;
  
  export const KEY_fourthroot: number;
  
  export const KEY_function: number;
  
  export const KEY_g: number;
  
  export const KEY_gabovedot: number;
  
  export const KEY_gbreve: number;
  
  export const KEY_gcaron: number;
  
  export const KEY_gcedilla: number;
  
  export const KEY_gcircumflex: number;
  
  export const KEY_grave: number;
  
  export const KEY_greater: number;
  
  export const KEY_greaterthanequal: number;
  
  export const KEY_guillemotleft: number;
  
  export const KEY_guillemotright: number;
  
  export const KEY_h: number;
  
  export const KEY_hairspace: number;
  
  export const KEY_hcircumflex: number;
  
  export const KEY_heart: number;
  
  export const KEY_hebrew_aleph: number;
  
  export const KEY_hebrew_ayin: number;
  
  export const KEY_hebrew_bet: number;
  
  export const KEY_hebrew_beth: number;
  
  export const KEY_hebrew_chet: number;
  
  export const KEY_hebrew_dalet: number;
  
  export const KEY_hebrew_daleth: number;
  
  export const KEY_hebrew_doublelowline: number;
  
  export const KEY_hebrew_finalkaph: number;
  
  export const KEY_hebrew_finalmem: number;
  
  export const KEY_hebrew_finalnun: number;
  
  export const KEY_hebrew_finalpe: number;
  
  export const KEY_hebrew_finalzade: number;
  
  export const KEY_hebrew_finalzadi: number;
  
  export const KEY_hebrew_gimel: number;
  
  export const KEY_hebrew_gimmel: number;
  
  export const KEY_hebrew_he: number;
  
  export const KEY_hebrew_het: number;
  
  export const KEY_hebrew_kaph: number;
  
  export const KEY_hebrew_kuf: number;
  
  export const KEY_hebrew_lamed: number;
  
  export const KEY_hebrew_mem: number;
  
  export const KEY_hebrew_nun: number;
  
  export const KEY_hebrew_pe: number;
  
  export const KEY_hebrew_qoph: number;
  
  export const KEY_hebrew_resh: number;
  
  export const KEY_hebrew_samech: number;
  
  export const KEY_hebrew_samekh: number;
  
  export const KEY_hebrew_shin: number;
  
  export const KEY_hebrew_taf: number;
  
  export const KEY_hebrew_taw: number;
  
  export const KEY_hebrew_tet: number;
  
  export const KEY_hebrew_teth: number;
  
  export const KEY_hebrew_waw: number;
  
  export const KEY_hebrew_yod: number;
  
  export const KEY_hebrew_zade: number;
  
  export const KEY_hebrew_zadi: number;
  
  export const KEY_hebrew_zain: number;
  
  export const KEY_hebrew_zayin: number;
  
  export const KEY_hexagram: number;
  
  export const KEY_horizconnector: number;
  
  export const KEY_horizlinescan1: number;
  
  export const KEY_horizlinescan3: number;
  
  export const KEY_horizlinescan5: number;
  
  export const KEY_horizlinescan7: number;
  
  export const KEY_horizlinescan9: number;
  
  export const KEY_hstroke: number;
  
  export const KEY_ht: number;
  
  export const KEY_hyphen: number;
  
  export const KEY_i: number;
  
  export const KEY_iTouch: number;
  
  export const KEY_iacute: number;
  
  export const KEY_ibelowdot: number;
  
  export const KEY_ibreve: number;
  
  export const KEY_icircumflex: number;
  
  export const KEY_identical: number;
  
  export const KEY_idiaeresis: number;
  
  export const KEY_idotless: number;
  
  export const KEY_ifonlyif: number;
  
  export const KEY_igrave: number;
  
  export const KEY_ihook: number;
  
  export const KEY_imacron: number;
  
  export const KEY_implies: number;
  
  export const KEY_includedin: number;
  
  export const KEY_includes: number;
  
  export const KEY_infinity: number;
  
  export const KEY_integral: number;
  
  export const KEY_intersection: number;
  
  export const KEY_iogonek: number;
  
  export const KEY_itilde: number;
  
  export const KEY_j: number;
  
  export const KEY_jcircumflex: number;
  
  export const KEY_jot: number;
  
  export const KEY_k: number;
  
  export const KEY_kana_A: number;
  
  export const KEY_kana_CHI: number;
  
  export const KEY_kana_E: number;
  
  export const KEY_kana_FU: number;
  
  export const KEY_kana_HA: number;
  
  export const KEY_kana_HE: number;
  
  export const KEY_kana_HI: number;
  
  export const KEY_kana_HO: number;
  
  export const KEY_kana_HU: number;
  
  export const KEY_kana_I: number;
  
  export const KEY_kana_KA: number;
  
  export const KEY_kana_KE: number;
  
  export const KEY_kana_KI: number;
  
  export const KEY_kana_KO: number;
  
  export const KEY_kana_KU: number;
  
  export const KEY_kana_MA: number;
  
  export const KEY_kana_ME: number;
  
  export const KEY_kana_MI: number;
  
  export const KEY_kana_MO: number;
  
  export const KEY_kana_MU: number;
  
  export const KEY_kana_N: number;
  
  export const KEY_kana_NA: number;
  
  export const KEY_kana_NE: number;
  
  export const KEY_kana_NI: number;
  
  export const KEY_kana_NO: number;
  
  export const KEY_kana_NU: number;
  
  export const KEY_kana_O: number;
  
  export const KEY_kana_RA: number;
  
  export const KEY_kana_RE: number;
  
  export const KEY_kana_RI: number;
  
  export const KEY_kana_RO: number;
  
  export const KEY_kana_RU: number;
  
  export const KEY_kana_SA: number;
  
  export const KEY_kana_SE: number;
  
  export const KEY_kana_SHI: number;
  
  export const KEY_kana_SO: number;
  
  export const KEY_kana_SU: number;
  
  export const KEY_kana_TA: number;
  
  export const KEY_kana_TE: number;
  
  export const KEY_kana_TI: number;
  
  export const KEY_kana_TO: number;
  
  export const KEY_kana_TSU: number;
  
  export const KEY_kana_TU: number;
  
  export const KEY_kana_U: number;
  
  export const KEY_kana_WA: number;
  
  export const KEY_kana_WO: number;
  
  export const KEY_kana_YA: number;
  
  export const KEY_kana_YO: number;
  
  export const KEY_kana_YU: number;
  
  export const KEY_kana_a: number;
  
  export const KEY_kana_closingbracket: number;
  
  export const KEY_kana_comma: number;
  
  export const KEY_kana_conjunctive: number;
  
  export const KEY_kana_e: number;
  
  export const KEY_kana_fullstop: number;
  
  export const KEY_kana_i: number;
  
  export const KEY_kana_middledot: number;
  
  export const KEY_kana_o: number;
  
  export const KEY_kana_openingbracket: number;
  
  export const KEY_kana_switch: number;
  
  export const KEY_kana_tsu: number;
  
  export const KEY_kana_tu: number;
  
  export const KEY_kana_u: number;
  
  export const KEY_kana_ya: number;
  
  export const KEY_kana_yo: number;
  
  export const KEY_kana_yu: number;
  
  export const KEY_kappa: number;
  
  export const KEY_kcedilla: number;
  
  export const KEY_kra: number;
  
  export const KEY_l: number;
  
  export const KEY_lacute: number;
  
  export const KEY_latincross: number;
  
  export const KEY_lbelowdot: number;
  
  export const KEY_lcaron: number;
  
  export const KEY_lcedilla: number;
  
  export const KEY_leftanglebracket: number;
  
  export const KEY_leftarrow: number;
  
  export const KEY_leftcaret: number;
  
  export const KEY_leftdoublequotemark: number;
  
  export const KEY_leftmiddlecurlybrace: number;
  
  export const KEY_leftopentriangle: number;
  
  export const KEY_leftpointer: number;
  
  export const KEY_leftradical: number;
  
  export const KEY_leftshoe: number;
  
  export const KEY_leftsinglequotemark: number;
  
  export const KEY_leftt: number;
  
  export const KEY_lefttack: number;
  
  export const KEY_less: number;
  
  export const KEY_lessthanequal: number;
  
  export const KEY_lf: number;
  
  export const KEY_logicaland: number;
  
  export const KEY_logicalor: number;
  
  export const KEY_lowleftcorner: number;
  
  export const KEY_lowrightcorner: number;
  
  export const KEY_lstroke: number;
  
  export const KEY_m: number;
  
  export const KEY_mabovedot: number;
  
  export const KEY_macron: number;
  
  export const KEY_malesymbol: number;
  
  export const KEY_maltesecross: number;
  
  export const KEY_marker: number;
  
  export const KEY_masculine: number;
  
  export const KEY_minus: number;
  
  export const KEY_minutes: number;
  
  export const KEY_mu: number;
  
  export const KEY_multiply: number;
  
  export const KEY_musicalflat: number;
  
  export const KEY_musicalsharp: number;
  
  export const KEY_n: number;
  
  export const KEY_nabla: number;
  
  export const KEY_nacute: number;
  
  export const KEY_ncaron: number;
  
  export const KEY_ncedilla: number;
  
  export const KEY_ninesubscript: number;
  
  export const KEY_ninesuperior: number;
  
  export const KEY_nl: number;
  
  export const KEY_nobreakspace: number;
  
  export const KEY_notapproxeq: number;
  
  export const KEY_notelementof: number;
  
  export const KEY_notequal: number;
  
  export const KEY_notidentical: number;
  
  export const KEY_notsign: number;
  
  export const KEY_ntilde: number;
  
  export const KEY_numbersign: number;
  
  export const KEY_numerosign: number;
  
  export const KEY_o: number;
  
  export const KEY_oacute: number;
  
  export const KEY_obarred: number;
  
  export const KEY_obelowdot: number;
  
  export const KEY_ocaron: number;
  
  export const KEY_ocircumflex: number;
  
  export const KEY_ocircumflexacute: number;
  
  export const KEY_ocircumflexbelowdot: number;
  
  export const KEY_ocircumflexgrave: number;
  
  export const KEY_ocircumflexhook: number;
  
  export const KEY_ocircumflextilde: number;
  
  export const KEY_odiaeresis: number;
  
  export const KEY_odoubleacute: number;
  
  export const KEY_oe: number;
  
  export const KEY_ogonek: number;
  
  export const KEY_ograve: number;
  
  export const KEY_ohook: number;
  
  export const KEY_ohorn: number;
  
  export const KEY_ohornacute: number;
  
  export const KEY_ohornbelowdot: number;
  
  export const KEY_ohorngrave: number;
  
  export const KEY_ohornhook: number;
  
  export const KEY_ohorntilde: number;
  
  export const KEY_omacron: number;
  
  export const KEY_oneeighth: number;
  
  export const KEY_onefifth: number;
  
  export const KEY_onehalf: number;
  
  export const KEY_onequarter: number;
  
  export const KEY_onesixth: number;
  
  export const KEY_onesubscript: number;
  
  export const KEY_onesuperior: number;
  
  export const KEY_onethird: number;
  
  export const KEY_ooblique: number;
  
  export const KEY_openrectbullet: number;
  
  export const KEY_openstar: number;
  
  export const KEY_opentribulletdown: number;
  
  export const KEY_opentribulletup: number;
  
  export const KEY_ordfeminine: number;
  
  export const KEY_oslash: number;
  
  export const KEY_otilde: number;
  
  export const KEY_overbar: number;
  
  export const KEY_overline: number;
  
  export const KEY_p: number;
  
  export const KEY_pabovedot: number;
  
  export const KEY_paragraph: number;
  
  export const KEY_parenleft: number;
  
  export const KEY_parenright: number;
  
  export const KEY_partdifferential: number;
  
  export const KEY_partialderivative: number;
  
  export const KEY_percent: number;
  
  export const KEY_period: number;
  
  export const KEY_periodcentered: number;
  
  export const KEY_permille: number;
  
  export const KEY_phonographcopyright: number;
  
  export const KEY_plus: number;
  
  export const KEY_plusminus: number;
  
  export const KEY_prescription: number;
  
  export const KEY_prolongedsound: number;
  
  export const KEY_punctspace: number;
  
  export const KEY_q: number;
  
  export const KEY_quad: number;
  
  export const KEY_question: number;
  
  export const KEY_questiondown: number;
  
  export const KEY_quotedbl: number;
  
  export const KEY_quoteleft: number;
  
  export const KEY_quoteright: number;
  
  export const KEY_r: number;
  
  export const KEY_racute: number;
  
  export const KEY_radical: number;
  
  export const KEY_rcaron: number;
  
  export const KEY_rcedilla: number;
  
  export const KEY_registered: number;
  
  export const KEY_rightanglebracket: number;
  
  export const KEY_rightarrow: number;
  
  export const KEY_rightcaret: number;
  
  export const KEY_rightdoublequotemark: number;
  
  export const KEY_rightmiddlecurlybrace: number;
  
  export const KEY_rightmiddlesummation: number;
  
  export const KEY_rightopentriangle: number;
  
  export const KEY_rightpointer: number;
  
  export const KEY_rightshoe: number;
  
  export const KEY_rightsinglequotemark: number;
  
  export const KEY_rightt: number;
  
  export const KEY_righttack: number;
  
  export const KEY_s: number;
  
  export const KEY_sabovedot: number;
  
  export const KEY_sacute: number;
  
  export const KEY_scaron: number;
  
  export const KEY_scedilla: number;
  
  export const KEY_schwa: number;
  
  export const KEY_scircumflex: number;
  
  export const KEY_script_switch: number;
  
  export const KEY_seconds: number;
  
  export const KEY_section: number;
  
  export const KEY_semicolon: number;
  
  export const KEY_semivoicedsound: number;
  
  export const KEY_seveneighths: number;
  
  export const KEY_sevensubscript: number;
  
  export const KEY_sevensuperior: number;
  
  export const KEY_signaturemark: number;
  
  export const KEY_signifblank: number;
  
  export const KEY_similarequal: number;
  
  export const KEY_singlelowquotemark: number;
  
  export const KEY_sixsubscript: number;
  
  export const KEY_sixsuperior: number;
  
  export const KEY_slash: number;
  
  export const KEY_soliddiamond: number;
  
  export const KEY_space: number;
  
  export const KEY_squareroot: number;
  
  export const KEY_ssharp: number;
  
  export const KEY_sterling: number;
  
  export const KEY_stricteq: number;
  
  export const KEY_t: number;
  
  export const KEY_tabovedot: number;
  
  export const KEY_tcaron: number;
  
  export const KEY_tcedilla: number;
  
  export const KEY_telephone: number;
  
  export const KEY_telephonerecorder: number;
  
  export const KEY_therefore: number;
  
  export const KEY_thinspace: number;
  
  export const KEY_thorn: number;
  
  export const KEY_threeeighths: number;
  
  export const KEY_threefifths: number;
  
  export const KEY_threequarters: number;
  
  export const KEY_threesubscript: number;
  
  export const KEY_threesuperior: number;
  
  export const KEY_tintegral: number;
  
  export const KEY_topintegral: number;
  
  export const KEY_topleftparens: number;
  
  export const KEY_topleftradical: number;
  
  export const KEY_topleftsqbracket: number;
  
  export const KEY_topleftsummation: number;
  
  export const KEY_toprightparens: number;
  
  export const KEY_toprightsqbracket: number;
  
  export const KEY_toprightsummation: number;
  
  export const KEY_topt: number;
  
  export const KEY_topvertsummationconnector: number;
  
  export const KEY_trademark: number;
  
  export const KEY_trademarkincircle: number;
  
  export const KEY_tslash: number;
  
  export const KEY_twofifths: number;
  
  export const KEY_twosubscript: number;
  
  export const KEY_twosuperior: number;
  
  export const KEY_twothirds: number;
  
  export const KEY_u: number;
  
  export const KEY_uacute: number;
  
  export const KEY_ubelowdot: number;
  
  export const KEY_ubreve: number;
  
  export const KEY_ucircumflex: number;
  
  export const KEY_udiaeresis: number;
  
  export const KEY_udoubleacute: number;
  
  export const KEY_ugrave: number;
  
  export const KEY_uhook: number;
  
  export const KEY_uhorn: number;
  
  export const KEY_uhornacute: number;
  
  export const KEY_uhornbelowdot: number;
  
  export const KEY_uhorngrave: number;
  
  export const KEY_uhornhook: number;
  
  export const KEY_uhorntilde: number;
  
  export const KEY_umacron: number;
  
  export const KEY_underbar: number;
  
  export const KEY_underscore: number;
  
  export const KEY_union: number;
  
  export const KEY_uogonek: number;
  
  export const KEY_uparrow: number;
  
  export const KEY_upcaret: number;
  
  export const KEY_upleftcorner: number;
  
  export const KEY_uprightcorner: number;
  
  export const KEY_upshoe: number;
  
  export const KEY_upstile: number;
  
  export const KEY_uptack: number;
  
  export const KEY_uring: number;
  
  export const KEY_utilde: number;
  
  export const KEY_v: number;
  
  export const KEY_variation: number;
  
  export const KEY_vertbar: number;
  
  export const KEY_vertconnector: number;
  
  export const KEY_voicedsound: number;
  
  export const KEY_vt: number;
  
  export const KEY_w: number;
  
  export const KEY_wacute: number;
  
  export const KEY_wcircumflex: number;
  
  export const KEY_wdiaeresis: number;
  
  export const KEY_wgrave: number;
  
  export const KEY_x: number;
  
  export const KEY_xabovedot: number;
  
  export const KEY_y: number;
  
  export const KEY_yacute: number;
  
  export const KEY_ybelowdot: number;
  
  export const KEY_ycircumflex: number;
  
  export const KEY_ydiaeresis: number;
  
  export const KEY_yen: number;
  
  export const KEY_ygrave: number;
  
  export const KEY_yhook: number;
  
  export const KEY_ytilde: number;
  
  export const KEY_z: number;
  
  export const KEY_zabovedot: number;
  
  export const KEY_zacute: number;
  
  export const KEY_zcaron: number;
  
  export const KEY_zerosubscript: number;
  
  export const KEY_zerosuperior: number;
  
  export const KEY_zstroke: number;
  
  export const MAX_TIMECOORD_AXES: number;
  
  export const PARENT_RELATIVE: number;
  
  export const PRIORITY_REDRAW: number;
  
  export function addOptionEntriesLibgtkOnly(group: GLib.OptionGroup): void;
  
  export function atomIntern(atomName: string, onlyIfExists: boolean): Atom;
  
  export function atomInternStaticString(atomName: string): Atom;
  
  export function beep(): void;
  
  export function cairoCreate(window: Window): cairo.Context;
  
  export function cairoDrawFromGl(cr: cairo.Context, window: Window, source: number, sourceType: number, bufferScale: number, x: number, _y: number, width: number, height: number): void;
  
  export function cairoGetClipRectangle(cr: cairo.Context, rect: Rectangle): boolean;
  
  export function cairoGetDrawingContext(cr: cairo.Context): DrawingContext;
  
  export function cairoRectangle(cr: cairo.Context, rectangle: Rectangle): void;
  
  export function cairoRegion(cr: cairo.Context, region: cairo.Region): void;
  
  export function cairoRegionCreateFromSurface(surface: cairo.Surface): cairo.Region;
  
  export function cairoSetSourceColor(cr: cairo.Context, color: Color): void;
  
  export function cairoSetSourcePixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbufX: number, pixbufY: number): void;
  
  export function cairoSetSourceRgba(cr: cairo.Context, rgba: RGBA): void;
  
  export function cairoSetSourceWindow(cr: cairo.Context, window: Window, x: number, _y: number): void;
  
  export function cairoSurfaceCreateFromPixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, forWindow: Window): cairo.Surface;
  
  export function colorParse(spec: string, color: Color): boolean;
  
  export function disableMultidevice(): void;
  
  export function dragAbort(context: DragContext, time_: number): void;
  
  export function dragBegin(window: Window, targets: GLib.List): DragContext;
  
  export function dragBeginForDevice(window: Window, device: Device, targets: GLib.List): DragContext;
  
  export function dragBeginFromPoint(window: Window, device: Device, targets: GLib.List, xRoot: number, yRoot: number): DragContext;
  
  export function dragDrop(context: DragContext, time_: number): void;
  
  export function dragDropDone(context: DragContext, success: boolean): void;
  
  export function dragDropSucceeded(context: DragContext): boolean;
  
  export function dragFindWindowForScreen(context: DragContext, dragWindow: Window, screen: Screen, xRoot: number, yRoot: number, destWindow: Window, protocol: DragProtocol): void;
  
  export function dragGetSelection(context: DragContext): Atom;
  
  export function dragMotion(context: DragContext, destWindow: Window, protocol: DragProtocol, xRoot: number, yRoot: number, suggestedAction: DragAction, possibleActions: DragAction, time_: number): boolean;
  
  export function dragStatus(context: DragContext, action: DragAction, time_: number): void;
  
  export function dropFinish(context: DragContext, success: boolean, time_: number): void;
  
  export function dropReply(context: DragContext, accepted: boolean, time_: number): void;
  
  export function errorTrapPop(): number;
  
  export function errorTrapPopIgnored(): void;
  
  export function errorTrapPush(): void;
  
  export function eventGet(): Event;
  
  export function eventHandlerSet(func: EventFunc, data: any, notify: GLib.DestroyNotify): void;
  
  export function eventPeek(): Event;
  
  export function eventRequestMotions(event: EventMotion): void;
  
  export function eventsGetAngle(event1: Event, event2: Event, angle: number): boolean;
  
  export function eventsGetCenter(event1: Event, event2: Event, x: number, _y: number): boolean;
  
  export function eventsGetDistance(event1: Event, event2: Event, distance: number): boolean;
  
  export function eventsPending(): boolean;
  
  export function flush(): void;
  
  export function getDefaultRootWindow(): Window;
  
  export function getDisplay(): string;
  
  export function getDisplayArgName(): string;
  
  export function getProgramClass(): string;
  
  export function getShowEvents(): boolean;
  
  export function glErrorQuark(): GLib.Quark;
  
  export function init(argc: number, argv: string[]): void;
  
  export function initCheck(argc: number, argv: string[]): boolean;
  
  export function keyboardGrab(window: Window, ownerEvents: boolean, time_: number): GrabStatus;
  
  export function keyboardUngrab(time_: number): void;
  
  export function keyvalConvertCase(symbol: number, lower: number, upper: number): void;
  
  export function keyvalFromName(keyvalName: string): number;
  
  export function keyvalIsLower(keyval: number): boolean;
  
  export function keyvalIsUpper(keyval: number): boolean;
  
  export function keyvalName(keyval: number): string;
  
  export function keyvalToLower(keyval: number): number;
  
  export function keyvalToUnicode(keyval: number): number;
  
  export function keyvalToUpper(keyval: number): number;
  
  export function listVisuals(): GLib.List;
  
  export function notifyStartupComplete(): void;
  
  export function notifyStartupCompleteWithId(startupId: string): void;
  
  export function offscreenWindowGetEmbedder(window: Window): Window;
  
  export function offscreenWindowGetSurface(window: Window): cairo.Surface;
  
  export function offscreenWindowSetEmbedder(window: Window, embedder: Window): void;
  
  export function pangoContextGet(): Pango.Context;
  
  export function pangoContextGetForDisplay(display: Display): Pango.Context;
  
  export function pangoContextGetForScreen(screen: Screen): Pango.Context;
  
  export function pangoLayoutGetClipRegion(layout: Pango.Layout, xOrigin: number, yOrigin: number, indexRanges: number, nRanges: number): cairo.Region;
  
  export function pangoLayoutLineGetClipRegion(line: Pango.LayoutLine, xOrigin: number, yOrigin: number, indexRanges: number[], nRanges: number): cairo.Region;
  
  export function parseArgs(argc: number, argv: string[]): void;
  
  export function pixbufGetFromSurface(surface: cairo.Surface, srcX: number, srcY: number, width: number, height: number): GdkPixbuf.Pixbuf;
  
  export function pixbufGetFromWindow(window: Window, srcX: number, srcY: number, width: number, height: number): GdkPixbuf.Pixbuf;
  
  export function pointerGrab(window: Window, ownerEvents: boolean, eventMask: EventMask, confineTo: Window, cursor: Cursor, time_: number): GrabStatus;
  
  export function pointerIsGrabbed(): boolean;
  
  export function pointerUngrab(time_: number): void;
  
  export function preParseLibgtkOnly(): void;
  
  export function propertyChange(window: Window, property: Atom, type: Atom, format: number, mode: PropMode, data: number, nelements: number): void;
  
  export function propertyDelete(window: Window, property: Atom): void;
  
  export function propertyGet(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number, actualPropertyType: Atom, actualFormat: number, actualLength: number, data: number[]): boolean;
  
  export function queryDepths(depths: number[], count: number): void;
  
  export function queryVisualTypes(visualTypes: VisualType[], count: number): void;
  
  export function selectionConvert(requestor: Window, selection: Atom, target: Atom, time_: number): void;
  
  export function selectionOwnerGet(selection: Atom): Window;
  
  export function selectionOwnerGetForDisplay(display: Display, selection: Atom): Window;
  
  export function selectionOwnerSet(owner: Window, selection: Atom, time_: number, sendEvent: boolean): boolean;
  
  export function selectionOwnerSetForDisplay(display: Display, owner: Window, selection: Atom, time_: number, sendEvent: boolean): boolean;
  
  export function selectionPropertyGet(requestor: Window, data: number, propType: Atom, propFormat: number): number;
  
  export function selectionSendNotify(requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;
  
  export function selectionSendNotifyForDisplay(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;
  
  export function setAllowedBackends(backends: string): void;
  
  export function setDoubleClickTime(msec: number): void;
  
  export function setProgramClass(programClass: string): void;
  
  export function setShowEvents(showEvents: boolean): void;
  
  export function settingGet(name: string, value: GObject.Value): boolean;
  
  export function synthesizeWindowState(window: Window, unsetFlags: WindowState, setFlags: WindowState): void;
  
  export function testRenderSync(window: Window): void;
  
  export function testSimulateButton(window: Window, x: number, _y: number, button: number, modifiers: ModifierType, buttonPressrelease: EventType): boolean;
  
  export function testSimulateKey(window: Window, x: number, _y: number, keyval: number, modifiers: ModifierType, keyPressrelease: EventType): boolean;
  
  export function textPropertyToUtf8ListForDisplay(display: Display, encoding: Atom, format: number, text: number[], length: number, list: string[]): number;
  
  export function threadsAddIdle(_function: GLib.SourceFunc, data: any): number;
  
  export function threadsAddIdleFull(priority: number, _function: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;
  
  export function threadsAddTimeout(interval: number, _function: GLib.SourceFunc, data: any): number;
  
  export function threadsAddTimeoutFull(priority: number, interval: number, _function: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;
  
  export function threadsAddTimeoutSeconds(interval: number, _function: GLib.SourceFunc, data: any): number;
  
  export function threadsAddTimeoutSecondsFull(priority: number, interval: number, _function: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;
  
  export function threadsEnter(): void;
  
  export function threadsInit(): void;
  
  export function threadsLeave(): void;
  
  export function threadsSetLockFunctions(enterFn: GObject.Callback, leaveFn: GObject.Callback): void;
  
  export function unicodeToKeyval(wc: number): number;
  
  export function utf8ToStringTarget(str: string): string;
  
  export interface EventFunc {
  	(event: Event, data: any): void;
  }
  
  export interface FilterFunc {
  	(xevent: XEvent, event: Event, data: any): FilterReturn;
  }
  
  export interface SeatGrabPrepareFunc {
  	(seat: Seat, window: Window, userData: any): void;
  }
  
  export interface WindowChildFunc {
  	(window: Window, userData: any): boolean;
  }
  
  export interface WindowInvalidateHandlerFunc {
  	(window: Window, region: cairo.Region): void;
  }
  
  export enum AxisUse {
    IGNORE = 0,
    X = 1,
    Y = 2,
    PRESSURE = 3,
    XTILT = 4,
    YTILT = 5,
    WHEEL = 6,
    DISTANCE = 7,
    ROTATION = 8,
    SLIDER = 9,
    LAST = 10
  }
  
  export enum ByteOrder {
    LSB_FIRST = 0,
    MSB_FIRST = 1
  }
  
  export enum CrossingMode {
    NORMAL = 0,
    GRAB = 1,
    UNGRAB = 2,
    GTK_GRAB = 3,
    GTK_UNGRAB = 4,
    STATE_CHANGED = 5,
    TOUCH_BEGIN = 6,
    TOUCH_END = 7,
    DEVICE_SWITCH = 8
  }
  
  export enum CursorType {
    X_CURSOR = 0,
    ARROW = 2,
    BASED_ARROW_DOWN = 4,
    BASED_ARROW_UP = 6,
    BOAT = 8,
    BOGOSITY = 10,
    BOTTOM_LEFT_CORNER = 12,
    BOTTOM_RIGHT_CORNER = 14,
    BOTTOM_SIDE = 16,
    BOTTOM_TEE = 18,
    BOX_SPIRAL = 20,
    CENTER_PTR = 22,
    CIRCLE = 24,
    CLOCK = 26,
    COFFEE_MUG = 28,
    CROSS = 30,
    CROSS_REVERSE = 32,
    CROSSHAIR = 34,
    DIAMOND_CROSS = 36,
    DOT = 38,
    DOTBOX = 40,
    DOUBLE_ARROW = 42,
    DRAFT_LARGE = 44,
    DRAFT_SMALL = 46,
    DRAPED_BOX = 48,
    EXCHANGE = 50,
    FLEUR = 52,
    GOBBLER = 54,
    GUMBY = 56,
    HAND1 = 58,
    HAND2 = 60,
    HEART = 62,
    ICON = 64,
    IRON_CROSS = 66,
    LEFT_PTR = 68,
    LEFT_SIDE = 70,
    LEFT_TEE = 72,
    LEFTBUTTON = 74,
    LL_ANGLE = 76,
    LR_ANGLE = 78,
    MAN = 80,
    MIDDLEBUTTON = 82,
    MOUSE = 84,
    PENCIL = 86,
    PIRATE = 88,
    PLUS = 90,
    QUESTION_ARROW = 92,
    RIGHT_PTR = 94,
    RIGHT_SIDE = 96,
    RIGHT_TEE = 98,
    RIGHTBUTTON = 100,
    RTL_LOGO = 102,
    SAILBOAT = 104,
    SB_DOWN_ARROW = 106,
    SB_H_DOUBLE_ARROW = 108,
    SB_LEFT_ARROW = 110,
    SB_RIGHT_ARROW = 112,
    SB_UP_ARROW = 114,
    SB_V_DOUBLE_ARROW = 116,
    SHUTTLE = 118,
    SIZING = 120,
    SPIDER = 122,
    SPRAYCAN = 124,
    STAR = 126,
    TARGET = 128,
    TCROSS = 130,
    TOP_LEFT_ARROW = 132,
    TOP_LEFT_CORNER = 134,
    TOP_RIGHT_CORNER = 136,
    TOP_SIDE = 138,
    TOP_TEE = 140,
    TREK = 142,
    UL_ANGLE = 144,
    UMBRELLA = 146,
    UR_ANGLE = 148,
    WATCH = 150,
    XTERM = 152,
    LAST_CURSOR = 153,
    BLANK_CURSOR = -2,
    CURSOR_IS_PIXMAP = -1
  }
  
  export enum DevicePadFeature {
    BUTTON = 0,
    RING = 1,
    STRIP = 2
  }
  
  export enum DeviceToolType {
    UNKNOWN = 0,
    PEN = 1,
    ERASER = 2,
    BRUSH = 3,
    PENCIL = 4,
    AIRBRUSH = 5,
    MOUSE = 6,
    LENS = 7
  }
  
  export enum DeviceType {
    MASTER = 0,
    SLAVE = 1,
    FLOATING = 2
  }
  
  export enum DragCancelReason {
    NO_TARGET = 0,
    USER_CANCELLED = 1,
    ERROR = 2
  }
  
  export enum DragProtocol {
    NONE = 0,
    MOTIF = 1,
    XDND = 2,
    ROOTWIN = 3,
    WIN32_DROPFILES = 4,
    OLE2 = 5,
    LOCAL = 6,
    WAYLAND = 7
  }
  
  export enum EventType {
    NOTHING = -1,
    DELETE = 0,
    DESTROY = 1,
    EXPOSE = 2,
    MOTION_NOTIFY = 3,
    BUTTON_PRESS = 4,
    _2BUTTON_PRESS = 5,
    DOUBLE_BUTTON_PRESS = 5,
    _3BUTTON_PRESS = 6,
    TRIPLE_BUTTON_PRESS = 6,
    BUTTON_RELEASE = 7,
    KEY_PRESS = 8,
    KEY_RELEASE = 9,
    ENTER_NOTIFY = 10,
    LEAVE_NOTIFY = 11,
    FOCUS_CHANGE = 12,
    CONFIGURE = 13,
    MAP = 14,
    UNMAP = 15,
    PROPERTY_NOTIFY = 16,
    SELECTION_CLEAR = 17,
    SELECTION_REQUEST = 18,
    SELECTION_NOTIFY = 19,
    PROXIMITY_IN = 20,
    PROXIMITY_OUT = 21,
    DRAG_ENTER = 22,
    DRAG_LEAVE = 23,
    DRAG_MOTION = 24,
    DRAG_STATUS = 25,
    DROP_START = 26,
    DROP_FINISHED = 27,
    CLIENT_EVENT = 28,
    VISIBILITY_NOTIFY = 29,
    SCROLL = 31,
    WINDOW_STATE = 32,
    SETTING = 33,
    OWNER_CHANGE = 34,
    GRAB_BROKEN = 35,
    DAMAGE = 36,
    TOUCH_BEGIN = 37,
    TOUCH_UPDATE = 38,
    TOUCH_END = 39,
    TOUCH_CANCEL = 40,
    TOUCHPAD_SWIPE = 41,
    TOUCHPAD_PINCH = 42,
    PAD_BUTTON_PRESS = 43,
    PAD_BUTTON_RELEASE = 44,
    PAD_RING = 45,
    PAD_STRIP = 46,
    PAD_GROUP_MODE = 47,
    EVENT_LAST = 48
  }
  
  export enum FilterReturn {
    CONTINUE = 0,
    TRANSLATE = 1,
    REMOVE = 2
  }
  
  export enum FullscreenMode {
    CURRENT_MONITOR = 0,
    ALL_MONITORS = 1
  }
  
  export enum GLError {
    NOT_AVAILABLE = 0,
    UNSUPPORTED_FORMAT = 1,
    UNSUPPORTED_PROFILE = 2
  }
  
  export enum GrabOwnership {
    NONE = 0,
    WINDOW = 1,
    APPLICATION = 2
  }
  
  export enum GrabStatus {
    SUCCESS = 0,
    ALREADY_GRABBED = 1,
    INVALID_TIME = 2,
    NOT_VIEWABLE = 3,
    FROZEN = 4,
    FAILED = 5
  }
  
  export enum Gravity {
    NORTH_WEST = 1,
    NORTH = 2,
    NORTH_EAST = 3,
    WEST = 4,
    CENTER = 5,
    EAST = 6,
    SOUTH_WEST = 7,
    SOUTH = 8,
    SOUTH_EAST = 9,
    STATIC = 10
  }
  
  export enum InputMode {
    DISABLED = 0,
    SCREEN = 1,
    WINDOW = 2
  }
  
  export enum InputSource {
    MOUSE = 0,
    PEN = 1,
    ERASER = 2,
    CURSOR = 3,
    KEYBOARD = 4,
    TOUCHSCREEN = 5,
    TOUCHPAD = 6,
    TRACKPOINT = 7,
    TABLET_PAD = 8
  }
  
  export enum ModifierIntent {
    PRIMARY_ACCELERATOR = 0,
    CONTEXT_MENU = 1,
    EXTEND_SELECTION = 2,
    MODIFY_SELECTION = 3,
    NO_TEXT_INPUT = 4,
    SHIFT_GROUP = 5,
    DEFAULT_MOD_MASK = 6
  }
  
  export enum NotifyType {
    ANCESTOR = 0,
    VIRTUAL = 1,
    INFERIOR = 2,
    NONLINEAR = 3,
    NONLINEAR_VIRTUAL = 4,
    UNKNOWN = 5
  }
  
  export enum OwnerChange {
    NEW_OWNER = 0,
    DESTROY = 1,
    CLOSE = 2
  }
  
  export enum PropMode {
    REPLACE = 0,
    PREPEND = 1,
    APPEND = 2
  }
  
  export enum PropertyState {
    NEW_VALUE = 0,
    DELETE = 1
  }
  
  export enum ScrollDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    SMOOTH = 4
  }
  
  export enum SettingAction {
    NEW = 0,
    CHANGED = 1,
    DELETED = 2
  }
  
  export enum Status {
    OK = 0,
    ERROR = -1,
    ERROR_PARAM = -2,
    ERROR_FILE = -3,
    ERROR_MEM = -4
  }
  
  export enum SubpixelLayout {
    UNKNOWN = 0,
    NONE = 1,
    HORIZONTAL_RGB = 2,
    HORIZONTAL_BGR = 3,
    VERTICAL_RGB = 4,
    VERTICAL_BGR = 5
  }
  
  export enum TouchpadGesturePhase {
    BEGIN = 0,
    UPDATE = 1,
    END = 2,
    CANCEL = 3
  }
  
  export enum VisibilityState {
    UNOBSCURED = 0,
    PARTIAL = 1,
    FULLY_OBSCURED = 2
  }
  
  export enum VisualType {
    STATIC_GRAY = 0,
    GRAYSCALE = 1,
    STATIC_COLOR = 2,
    PSEUDO_COLOR = 3,
    TRUE_COLOR = 4,
    DIRECT_COLOR = 5
  }
  
  export enum WindowEdge {
    NORTH_WEST = 0,
    NORTH = 1,
    NORTH_EAST = 2,
    WEST = 3,
    EAST = 4,
    SOUTH_WEST = 5,
    SOUTH = 6,
    SOUTH_EAST = 7
  }
  
  export enum WindowType {
    ROOT = 0,
    TOPLEVEL = 1,
    CHILD = 2,
    TEMP = 3,
    FOREIGN = 4,
    OFFSCREEN = 5,
    SUBSURFACE = 6
  }
  
  export enum WindowTypeHint {
    NORMAL = 0,
    DIALOG = 1,
    MENU = 2,
    TOOLBAR = 3,
    SPLASHSCREEN = 4,
    UTILITY = 5,
    DOCK = 6,
    DESKTOP = 7,
    DROPDOWN_MENU = 8,
    POPUP_MENU = 9,
    TOOLTIP = 10,
    NOTIFICATION = 11,
    COMBO = 12,
    DND = 13
  }
  
  export enum WindowWindowClass {
    INPUT_OUTPUT = 0,
    INPUT_ONLY = 1
  }
  
  export enum AnchorHints {
    FLIP_X = 1,
    FLIP_Y = 2,
    SLIDE_X = 4,
    SLIDE_Y = 8,
    RESIZE_X = 16,
    RESIZE_Y = 32,
    FLIP = 3,
    SLIDE = 12,
    RESIZE = 48
  }
  
  export enum AxisFlags {
    X = 2,
    Y = 4,
    PRESSURE = 8,
    XTILT = 16,
    YTILT = 32,
    WHEEL = 64,
    DISTANCE = 128,
    ROTATION = 256,
    SLIDER = 512
  }
  
  export enum DragAction {
    DEFAULT = 1,
    COPY = 2,
    MOVE = 4,
    LINK = 8,
    PRIVATE = 16,
    ASK = 32
  }
  
  export enum EventMask {
    EXPOSURE_MASK = 2,
    POINTER_MOTION_MASK = 4,
    POINTER_MOTION_HINT_MASK = 8,
    BUTTON_MOTION_MASK = 16,
    BUTTON1_MOTION_MASK = 32,
    BUTTON2_MOTION_MASK = 64,
    BUTTON3_MOTION_MASK = 128,
    BUTTON_PRESS_MASK = 256,
    BUTTON_RELEASE_MASK = 512,
    KEY_PRESS_MASK = 1024,
    KEY_RELEASE_MASK = 2048,
    ENTER_NOTIFY_MASK = 4096,
    LEAVE_NOTIFY_MASK = 8192,
    FOCUS_CHANGE_MASK = 16384,
    STRUCTURE_MASK = 32768,
    PROPERTY_CHANGE_MASK = 65536,
    VISIBILITY_NOTIFY_MASK = 131072,
    PROXIMITY_IN_MASK = 262144,
    PROXIMITY_OUT_MASK = 524288,
    SUBSTRUCTURE_MASK = 1048576,
    SCROLL_MASK = 2097152,
    TOUCH_MASK = 4194304,
    SMOOTH_SCROLL_MASK = 8388608,
    TOUCHPAD_GESTURE_MASK = 16777216,
    TABLET_PAD_MASK = 33554432,
    ALL_EVENTS_MASK = 16777214
  }
  
  export enum FrameClockPhase {
    NONE = 0,
    FLUSH_EVENTS = 1,
    BEFORE_PAINT = 2,
    UPDATE = 4,
    LAYOUT = 8,
    PAINT = 16,
    RESUME_EVENTS = 32,
    AFTER_PAINT = 64
  }
  
  export enum ModifierType {
    SHIFT_MASK = 1,
    LOCK_MASK = 2,
    CONTROL_MASK = 4,
    MOD1_MASK = 8,
    MOD2_MASK = 16,
    MOD3_MASK = 32,
    MOD4_MASK = 64,
    MOD5_MASK = 128,
    BUTTON1_MASK = 256,
    BUTTON2_MASK = 512,
    BUTTON3_MASK = 1024,
    BUTTON4_MASK = 2048,
    BUTTON5_MASK = 4096,
    MODIFIER_RESERVED_13_MASK = 8192,
    MODIFIER_RESERVED_14_MASK = 16384,
    MODIFIER_RESERVED_15_MASK = 32768,
    MODIFIER_RESERVED_16_MASK = 65536,
    MODIFIER_RESERVED_17_MASK = 131072,
    MODIFIER_RESERVED_18_MASK = 262144,
    MODIFIER_RESERVED_19_MASK = 524288,
    MODIFIER_RESERVED_20_MASK = 1048576,
    MODIFIER_RESERVED_21_MASK = 2097152,
    MODIFIER_RESERVED_22_MASK = 4194304,
    MODIFIER_RESERVED_23_MASK = 8388608,
    MODIFIER_RESERVED_24_MASK = 16777216,
    MODIFIER_RESERVED_25_MASK = 33554432,
    SUPER_MASK = 67108864,
    HYPER_MASK = 134217728,
    META_MASK = 268435456,
    MODIFIER_RESERVED_29_MASK = 536870912,
    RELEASE_MASK = 1073741824,
    MODIFIER_MASK = 1543512063
  }
  
  export enum SeatCapabilities {
    NONE = 0,
    POINTER = 1,
    TOUCH = 2,
    TABLET_STYLUS = 4,
    KEYBOARD = 8,
    ALL_POINTING = 7,
    ALL = 15
  }
  
  export enum WMDecoration {
    ALL = 1,
    BORDER = 2,
    RESIZEH = 4,
    TITLE = 8,
    MENU = 16,
    MINIMIZE = 32,
    MAXIMIZE = 64
  }
  
  export enum WMFunction {
    ALL = 1,
    RESIZE = 2,
    MOVE = 4,
    MINIMIZE = 8,
    MAXIMIZE = 16,
    CLOSE = 32
  }
  
  export enum WindowAttributesType {
    TITLE = 2,
    X = 4,
    Y = 8,
    CURSOR = 16,
    VISUAL = 32,
    WMCLASS = 64,
    NOREDIR = 128,
    TYPE_HINT = 256
  }
  
  export enum WindowHints {
    POS = 1,
    MIN_SIZE = 2,
    MAX_SIZE = 4,
    BASE_SIZE = 8,
    ASPECT = 16,
    RESIZE_INC = 32,
    WIN_GRAVITY = 64,
    USER_POS = 128,
    USER_SIZE = 256
  }
  
  export enum WindowState {
    WITHDRAWN = 1,
    ICONIFIED = 2,
    MAXIMIZED = 4,
    STICKY = 8,
    FULLSCREEN = 16,
    ABOVE = 32,
    BELOW = 64,
    FOCUSED = 128,
    TILED = 256
  }
  
  export class Atom {
    public name(): string;
  }
  
  export class Color {
    public pixel?: number;
    public red?: number;
    public green?: number;
    public blue?: number;
    
    public copy(): Color;
    public equal(colorb: Color): boolean;
    public free(): void;
    public hash(): number;
    public toString(): string;
  }
  
  export class DevicePadInterface {
    
  }
  
  export class DrawingContextClass {
    
  }
  
  export class EventAny {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
  }
  
  export class EventButton {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public x?: number;
    public y?: number;
    public axes?: number;
    public state?: ModifierType;
    public button?: number;
    public device?: Device;
    public xRoot?: number;
    public yRoot?: number;
  }
  
  export class EventConfigure {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public x?: number;
    public y?: number;
    public width?: number;
    public height?: number;
  }
  
  export class EventCrossing {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public subwindow?: Window;
    public time?: number;
    public x?: number;
    public y?: number;
    public xRoot?: number;
    public yRoot?: number;
    public mode?: CrossingMode;
    public detail?: NotifyType;
    public focus?: boolean;
    public state?: ModifierType;
  }
  
  export class EventDND {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public context?: DragContext;
    public time?: number;
    public xRoot?: number;
    public yRoot?: number;
  }
  
  export class EventExpose {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public area?: Rectangle;
    public region?: cairo.Region;
    public count?: number;
  }
  
  export class EventFocus {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public in?: number;
  }
  
  export class EventGrabBroken {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public keyboard?: boolean;
    public implicit?: boolean;
    public grabWindow?: Window;
  }
  
  export class EventKey {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public state?: ModifierType;
    public keyval?: number;
    public length?: number;
    public string?: string;
    public hardwareKeycode?: number;
    public group?: number;
    public isModifier?: number;
  }
  
  export class EventMotion {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public x?: number;
    public y?: number;
    public axes?: number;
    public state?: ModifierType;
    public isHint?: number;
    public device?: Device;
    public xRoot?: number;
    public yRoot?: number;
  }
  
  export class EventOwnerChange {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public owner?: Window;
    public reason?: OwnerChange;
    public selection?: Atom;
    public time?: number;
    public selectionTime?: number;
  }
  
  export class EventPadAxis {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public group?: number;
    public index?: number;
    public mode?: number;
    public value?: number;
  }
  
  export class EventPadButton {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public group?: number;
    public button?: number;
    public mode?: number;
  }
  
  export class EventPadGroupMode {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public group?: number;
    public mode?: number;
  }
  
  export class EventProperty {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public atom?: Atom;
    public time?: number;
    public state?: PropertyState;
  }
  
  export class EventProximity {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public device?: Device;
  }
  
  export class EventScroll {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public x?: number;
    public y?: number;
    public state?: ModifierType;
    public direction?: ScrollDirection;
    public device?: Device;
    public xRoot?: number;
    public yRoot?: number;
    public deltaX?: number;
    public deltaY?: number;
    public isStop?: number;
  }
  
  export class EventSelection {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public selection?: Atom;
    public target?: Atom;
    public property?: Atom;
    public time?: number;
    public requestor?: Window;
  }
  
  export class EventSequence {
    
  }
  
  export class EventSetting {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public action?: SettingAction;
    public name?: string;
  }
  
  export class EventTouch {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public time?: number;
    public x?: number;
    public y?: number;
    public axes?: number;
    public state?: ModifierType;
    public sequence?: EventSequence;
    public emulatingPointer?: boolean;
    public device?: Device;
    public xRoot?: number;
    public yRoot?: number;
  }
  
  export class EventTouchpadPinch {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public phase?: TouchpadGesturePhase;
    public nFingers?: number;
    public time?: number;
    public x?: number;
    public y?: number;
    public dx?: number;
    public dy?: number;
    public angleDelta?: number;
    public scale?: number;
    public xRoot?: number;
    public yRoot?: number;
    public state?: ModifierType;
  }
  
  export class EventTouchpadSwipe {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public phase?: TouchpadGesturePhase;
    public nFingers?: number;
    public time?: number;
    public x?: number;
    public y?: number;
    public dx?: number;
    public dy?: number;
    public xRoot?: number;
    public yRoot?: number;
    public state?: ModifierType;
  }
  
  export class EventVisibility {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public state?: VisibilityState;
  }
  
  export class EventWindowState {
    public type?: EventType;
    public window?: Window;
    public sendEvent?: number;
    public changedMask?: WindowState;
    public newWindowState?: WindowState;
  }
  
  export class FrameClockClass {
    
  }
  
  export class FrameClockPrivate {
    
  }
  
  export class FrameTimings {
    public getComplete(): boolean;
    public getFrameCounter(): number;
    public getFrameTime(): number;
    public getPredictedPresentationTime(): number;
    public getPresentationTime(): number;
    public getRefreshInterval(): number;
    public ref(): FrameTimings;
    public unref(): void;
  }
  
  export class Geometry {
    public minWidth?: number;
    public minHeight?: number;
    public maxWidth?: number;
    public maxHeight?: number;
    public baseWidth?: number;
    public baseHeight?: number;
    public widthInc?: number;
    public heightInc?: number;
    public minAspect?: number;
    public maxAspect?: number;
    public winGravity?: Gravity;
  }
  
  export class KeymapKey {
    public keycode?: number;
    public group?: number;
    public level?: number;
  }
  
  export class MonitorClass {
    
  }
  
  export class Point {
    public x?: number;
    public y?: number;
  }
  
  export class RGBA {
    public red?: number;
    public green?: number;
    public blue?: number;
    public alpha?: number;
    
    public copy(): RGBA;
    public equal(p2: RGBA): boolean;
    public free(): void;
    public hash(): number;
    public parse(spec: string): boolean;
    public toString(): string;
  }
  
  export class Rectangle {
    public x?: number;
    public y?: number;
    public width?: number;
    public height?: number;
    
    public equal(rect2: Rectangle): boolean;
    public intersect(src2: Rectangle, dest: Rectangle): boolean;
    public union(src2: Rectangle, dest: Rectangle): void;
  }
  
  export class TimeCoord {
    public time?: number;
    public axes?: number[];
  }
  
  export class WindowAttr {
    public title?: string;
    public eventMask?: number;
    public x?: number;
    public y?: number;
    public width?: number;
    public height?: number;
    public wclass?: WindowWindowClass;
    public visual?: Visual;
    public windowType?: WindowType;
    public cursor?: Cursor;
    public wmclassName?: string;
    public wmclassClass?: string;
    public overrideRedirect?: boolean;
    public typeHint?: WindowTypeHint;
  }
  
  export class WindowClass {
    public parentClass?: GObject.ObjectClass;
    
    pickEmbeddedChild : { (window: Window, x: number, _y: number): Window; };
    toEmbedder : { (window: Window, offscreenX: number, offscreenY: number, embedderX: number, embedderY: number): void; };
    fromEmbedder : { (window: Window, embedderX: number, embedderY: number, offscreenX: number, offscreenY: number): void; };
    createSurface : { (window: Window, width: number, height: number): cairo.Surface; };
    _gdkReserved1 : { (): void; };
    _gdkReserved2 : { (): void; };
    _gdkReserved3 : { (): void; };
    _gdkReserved4 : { (): void; };
    _gdkReserved5 : { (): void; };
    _gdkReserved6 : { (): void; };
    _gdkReserved7 : { (): void; };
    _gdkReserved8 : { (): void; };
  }
  
  export class WindowRedirect {
    
  }
  
  export interface Event {}
  
  export interface DevicePad {
    getFeatureGroup(feature: DevicePadFeature, featureIdx: number): number;
    getGroupNModes(groupIdx: number): number;
    getNFeatures(feature: DevicePadFeature): number;
    getNGroups(): number;
  }
  
  export class AppLaunchContext extends Gio.AppLaunchContext {
    constructor(props?: AppLaunchContextProps);
    
    display?: Display;
    
    public setDesktop(desktop: number): void;
    public setDisplay(display: Display): void;
    public setIcon(icon: Gio.Icon): void;
    public setIconName(iconName: string): void;
    public setScreen(screen: Screen): void;
    public setTimestamp(timestamp: number): void;
  }
  
  interface AppLaunchContextProps extends Gio.AppLaunchContextProps {
    display?: Display;
  }
  
  export class Cursor extends GObject.Object {
    constructor(props?: CursorProps);
    
    cursorType?: CursorType;
    display?: Display;
    
    public getCursorType(): CursorType;
    public getDisplay(): Display;
    public getImage(): GdkPixbuf.Pixbuf;
    public getSurface(xHot: number, yHot: number): cairo.Surface;
    public ref(): Cursor;
    public unref(): void;
  }
  
  interface CursorProps extends GObject.ObjectProps {
    cursorType?: CursorType;
    display?: Display;
  }
  
  export class Device extends GObject.Object {
    constructor(props?: DeviceProps);
    
    associatedDevice?: Device;
    axes?: AxisFlags;
    deviceManager?: DeviceManager;
    display?: Display;
    hasCursor?: boolean;
    inputMode?: InputMode;
    inputSource?: InputSource;
    nAxes?: number;
    name?: string;
    numTouches?: number;
    productId?: string;
    seat?: Seat;
    tool?: DeviceTool;
    type?: DeviceType;
    vendorId?: string;
    
    public getAssociatedDevice(): Device;
    public getAxes(): AxisFlags;
    public getAxis(axes: number[], use: AxisUse, value: number): boolean;
    public getAxisUse(index_: number): AxisUse;
    public getAxisValue(axes: number[], axisLabel: Atom, value: number): boolean;
    public getDeviceType(): DeviceType;
    public getDisplay(): Display;
    public getHasCursor(): boolean;
    public getHistory(window: Window, start: number, stop: number, events: TimeCoord[], nEvents: number): boolean;
    public getKey(index_: number, keyval: number, modifiers: ModifierType): boolean;
    public getLastEventWindow(): Window;
    public getMode(): InputMode;
    public getNAxes(): number;
    public getNKeys(): number;
    public getName(): string;
    public getPosition(screen: Screen, x: number, _y: number): void;
    public getPositionDouble(screen: Screen, x: number, _y: number): void;
    public getProductId(): string;
    public getSeat(): Seat;
    public getSource(): InputSource;
    public getState(window: Window, axes: number[], mask: ModifierType): void;
    public getVendorId(): string;
    public getWindowAtPosition(winX: number, winY: number): Window;
    public getWindowAtPositionDouble(winX: number, winY: number): Window;
    public grab(window: Window, grabOwnership: GrabOwnership, ownerEvents: boolean, eventMask: EventMask, cursor: Cursor, time_: number): GrabStatus;
    public listAxes(): GLib.List;
    public listSlaveDevices(): GLib.List;
    public setAxisUse(index_: number, use: AxisUse): void;
    public setKey(index_: number, keyval: number, modifiers: ModifierType): void;
    public setMode(mode: InputMode): boolean;
    public ungrab(time_: number): void;
    public warp(screen: Screen, x: number, _y: number): void;
    
    public on(event: 'changed', listener: () => void): this;
    public on(event: 'toolChanged', listener: (tool: DeviceTool) => void): this;
    
    public static freeHistory(events: TimeCoord[], nEvents: number): void;
    public static grabInfoLibgtkOnly(display: Display, device: Device, grabWindow: Window, ownerEvents: boolean): boolean;
  }
  
  interface DeviceProps extends GObject.ObjectProps {
    associatedDevice?: Device;
    axes?: AxisFlags;
    deviceManager?: DeviceManager;
    display?: Display;
    hasCursor?: boolean;
    inputMode?: InputMode;
    inputSource?: InputSource;
    nAxes?: number;
    name?: string;
    numTouches?: number;
    productId?: string;
    seat?: Seat;
    tool?: DeviceTool;
    type?: DeviceType;
    vendorId?: string;
  }
  
  export class DeviceManager extends GObject.Object {
    constructor(props?: DeviceManagerProps);
    
    display?: Display;
    
    public getClientPointer(): Device;
    public getDisplay(): Display;
    public listDevices(type: DeviceType): GLib.List;
    
    public on(event: 'deviceAdded', listener: (device: Device) => void): this;
    public on(event: 'deviceChanged', listener: (device: Device) => void): this;
    public on(event: 'deviceRemoved', listener: (device: Device) => void): this;
  }
  
  interface DeviceManagerProps extends GObject.ObjectProps {
    display?: Display;
  }
  
  export class DeviceTool extends GObject.Object {
    constructor(props?: DeviceToolProps);
    
    axes?: AxisFlags;
    hardwareId?: number;
    serial?: number;
    toolType?: DeviceToolType;
    
    public getHardwareId(): number;
    public getSerial(): number;
    public getToolType(): DeviceToolType;
  }
  
  interface DeviceToolProps extends GObject.ObjectProps {
    axes?: AxisFlags;
    hardwareId?: number;
    serial?: number;
    toolType?: DeviceToolType;
  }
  
  export class Display extends GObject.Object {
    constructor(props?: DisplayProps);
    
    public beep(): void;
    public close(): void;
    public deviceIsGrabbed(device: Device): boolean;
    public flush(): void;
    public getAppLaunchContext(): AppLaunchContext;
    public getDefaultCursorSize(): number;
    public getDefaultGroup(): Window;
    public getDefaultScreen(): Screen;
    public getDefaultSeat(): Seat;
    public getDeviceManager(): DeviceManager;
    public getEvent(): Event;
    public getMaximalCursorSize(width: number, height: number): void;
    public getMonitor(monitorNum: number): Monitor;
    public getMonitorAtPoint(x: number, _y: number): Monitor;
    public getMonitorAtWindow(window: Window): Monitor;
    public getNMonitors(): number;
    public getNScreens(): number;
    public getName(): string;
    public getPointer(screen: Screen, x: number, _y: number, mask: ModifierType): void;
    public getPrimaryMonitor(): Monitor;
    public getScreen(screenNum: number): Screen;
    public getWindowAtPointer(winX: number, winY: number): Window;
    public hasPending(): boolean;
    public isClosed(): boolean;
    public keyboardUngrab(time_: number): void;
    public listDevices(): GLib.List;
    public listSeats(): GLib.List;
    public notifyStartupComplete(startupId: string): void;
    public peekEvent(): Event;
    public pointerIsGrabbed(): boolean;
    public pointerUngrab(time_: number): void;
    public putEvent(event: Event): void;
    public requestSelectionNotification(selection: Atom): boolean;
    public setDoubleClickDistance(distance: number): void;
    public setDoubleClickTime(msec: number): void;
    public storeClipboard(clipboardWindow: Window, time_: number, targets: Atom[], nTargets: number): void;
    public supportsClipboardPersistence(): boolean;
    public supportsComposite(): boolean;
    public supportsCursorAlpha(): boolean;
    public supportsCursorColor(): boolean;
    public supportsInputShapes(): boolean;
    public supportsSelectionNotification(): boolean;
    public supportsShapes(): boolean;
    public sync(): void;
    public warpPointer(screen: Screen, x: number, _y: number): void;
    
    public on(event: 'closed', listener: (isError: boolean) => void): this;
    public on(event: 'monitorAdded', listener: (monitor: Monitor) => void): this;
    public on(event: 'monitorRemoved', listener: (monitor: Monitor) => void): this;
    public on(event: 'opened', listener: () => void): this;
    public on(event: 'seatAdded', listener: (seat: Seat) => void): this;
    public on(event: 'seatRemoved', listener: (seat: Seat) => void): this;
    
    public static getDefault(): Display;
    public static open(displayName: string): Display;
    public static openDefaultLibgtkOnly(): Display;
  }
  
  interface DisplayProps extends GObject.ObjectProps {
    
  }
  
  export class DisplayManager extends GObject.Object {
    constructor(props?: DisplayManagerProps);
    
    defaultDisplay?: Display;
    
    public getDefaultDisplay(): Display;
    public listDisplays(): GLib.SList;
    public openDisplay(name: string): Display;
    public setDefaultDisplay(display: Display): void;
    
    public on(event: 'displayOpened', listener: (display: Display) => void): this;
    
    public static get(): DisplayManager;
  }
  
  interface DisplayManagerProps extends GObject.ObjectProps {
    defaultDisplay?: Display;
  }
  
  export class DragContext extends GObject.Object {
    constructor(props?: DragContextProps);
    
    public getActions(): DragAction;
    public getDestWindow(): Window;
    public getDevice(): Device;
    public getDragWindow(): Window;
    public getProtocol(): DragProtocol;
    public getSelectedAction(): DragAction;
    public getSourceWindow(): Window;
    public getSuggestedAction(): DragAction;
    public listTargets(): GLib.List;
    public manageDnd(ipcWindow: Window, actions: DragAction): boolean;
    public setDevice(device: Device): void;
    public setHotspot(hotX: number, hotY: number): void;
    
    public on(event: 'actionChanged', listener: (action: DragAction) => void): this;
    public on(event: 'cancel', listener: (reason: DragCancelReason) => void): this;
    public on(event: 'dndFinished', listener: () => void): this;
    public on(event: 'dropPerformed', listener: (time: number) => void): this;
  }
  
  interface DragContextProps extends GObject.ObjectProps {
    
  }
  
  export class DrawingContext extends GObject.Object {
    constructor(props?: DrawingContextProps);
    
    clip?: cairo.Region;
    window?: Window;
    
    public getCairoContext(): cairo.Context;
    public getClip(): cairo.Region;
    public getWindow(): Window;
    public isValid(): boolean;
  }
  
  interface DrawingContextProps extends GObject.ObjectProps {
    clip?: cairo.Region;
    window?: Window;
  }
  
  export class FrameClock extends GObject.Object {
    constructor(props?: FrameClockProps);
    
    public beginUpdating(): void;
    public endUpdating(): void;
    public getCurrentTimings(): FrameTimings;
    public getFrameCounter(): number;
    public getFrameTime(): number;
    public getHistoryStart(): number;
    public getRefreshInfo(baseTime: number, refreshIntervalReturn: number, presentationTimeReturn: number): void;
    public getTimings(frameCounter: number): FrameTimings;
    public requestPhase(phase: FrameClockPhase): void;
    
    public on(event: 'afterPaint', listener: () => void): this;
    public on(event: 'beforePaint', listener: () => void): this;
    public on(event: 'flushEvents', listener: () => void): this;
    public on(event: 'layout', listener: () => void): this;
    public on(event: 'paint', listener: () => void): this;
    public on(event: 'resumeEvents', listener: () => void): this;
    public on(event: 'update', listener: () => void): this;
  }
  
  interface FrameClockProps extends GObject.ObjectProps {
    
  }
  
  export class GLContext extends GObject.Object {
    constructor(props?: GLContextProps);
    
    display?: Display;
    sharedContext?: GLContext;
    window?: Window;
    
    public getDebugEnabled(): boolean;
    public getDisplay(): Display;
    public getForwardCompatible(): boolean;
    public getRequiredVersion(major: number, minor: number): void;
    public getSharedContext(): GLContext;
    public getUseEs(): boolean;
    public getVersion(major: number, minor: number): void;
    public getWindow(): Window;
    public isLegacy(): boolean;
    public makeCurrent(): void;
    public realize(): boolean;
    public setDebugEnabled(enabled: boolean): void;
    public setForwardCompatible(compatible: boolean): void;
    public setRequiredVersion(major: number, minor: number): void;
    public setUseEs(useEs: number): void;
    
    public static clearCurrent(): void;
    public static getCurrent(): GLContext;
  }
  
  interface GLContextProps extends GObject.ObjectProps {
    display?: Display;
    sharedContext?: GLContext;
    window?: Window;
  }
  
  export class Keymap extends GObject.Object {
    constructor(props?: KeymapProps);
    
    public addVirtualModifiers(state: ModifierType): void;
    public getCapsLockState(): boolean;
    public getDirection(): Pango.Direction;
    public getEntriesForKeycode(hardwareKeycode: number, keys: KeymapKey[], keyvals: number[], nEntries: number): boolean;
    public getEntriesForKeyval(keyval: number, keys: KeymapKey[], nKeys: number): boolean;
    public getModifierMask(intent: ModifierIntent): ModifierType;
    public getModifierState(): number;
    public getNumLockState(): boolean;
    public getScrollLockState(): boolean;
    public haveBidiLayouts(): boolean;
    public lookupKey(key: KeymapKey): number;
    public mapVirtualModifiers(state: ModifierType): boolean;
    public translateKeyboardState(hardwareKeycode: number, state: ModifierType, group: number, keyval: number, effectiveGroup: number, level: number, consumedModifiers: ModifierType): boolean;
    
    public on(event: 'directionChanged', listener: () => void): this;
    public on(event: 'keysChanged', listener: () => void): this;
    public on(event: 'stateChanged', listener: () => void): this;
    
    public static getDefault(): Keymap;
    public static getForDisplay(display: Display): Keymap;
  }
  
  interface KeymapProps extends GObject.ObjectProps {
    
  }
  
  export class Monitor extends GObject.Object {
    constructor(props?: MonitorProps);
    
    display?: Display;
    geometry?: Rectangle;
    heightMm?: number;
    manufacturer?: string;
    model?: string;
    refreshRate?: number;
    scaleFactor?: number;
    subpixelLayout?: SubpixelLayout;
    widthMm?: number;
    workarea?: Rectangle;
    
    public getDisplay(): Display;
    public getGeometry(geometry: Rectangle): void;
    public getHeightMm(): number;
    public getManufacturer(): string;
    public getModel(): string;
    public getRefreshRate(): number;
    public getScaleFactor(): number;
    public getSubpixelLayout(): SubpixelLayout;
    public getWidthMm(): number;
    public getWorkarea(workarea: Rectangle): void;
    public isPrimary(): boolean;
    
    public on(event: 'invalidate', listener: () => void): this;
  }
  
  interface MonitorProps extends GObject.ObjectProps {
    display?: Display;
    geometry?: Rectangle;
    heightMm?: number;
    manufacturer?: string;
    model?: string;
    refreshRate?: number;
    scaleFactor?: number;
    subpixelLayout?: SubpixelLayout;
    widthMm?: number;
    workarea?: Rectangle;
  }
  
  export class Screen extends GObject.Object {
    constructor(props?: ScreenProps);
    
    fontOptions?: any;
    resolution?: number;
    
    public getActiveWindow(): Window;
    public getDisplay(): Display;
    public getFontOptions(): cairo.FontOptions;
    public getHeight(): number;
    public getHeightMm(): number;
    public getMonitorAtPoint(x: number, _y: number): number;
    public getMonitorAtWindow(window: Window): number;
    public getMonitorGeometry(monitorNum: number, dest: Rectangle): void;
    public getMonitorHeightMm(monitorNum: number): number;
    public getMonitorPlugName(monitorNum: number): string;
    public getMonitorScaleFactor(monitorNum: number): number;
    public getMonitorWidthMm(monitorNum: number): number;
    public getMonitorWorkarea(monitorNum: number, dest: Rectangle): void;
    public getNMonitors(): number;
    public getNumber(): number;
    public getPrimaryMonitor(): number;
    public getResolution(): number;
    public getRgbaVisual(): Visual;
    public getRootWindow(): Window;
    public getSetting(name: string, value: GObject.Value): boolean;
    public getSystemVisual(): Visual;
    public getToplevelWindows(): GLib.List;
    public getWidth(): number;
    public getWidthMm(): number;
    public getWindowStack(): GLib.List;
    public isComposited(): boolean;
    public listVisuals(): GLib.List;
    public makeDisplayName(): string;
    public setFontOptions(options: cairo.FontOptions): void;
    public setResolution(dpi: number): void;
    
    public on(event: 'compositedChanged', listener: () => void): this;
    public on(event: 'monitorsChanged', listener: () => void): this;
    public on(event: 'sizeChanged', listener: () => void): this;
    
    public static getDefault(): Screen;
    public static height(): number;
    public static heightMm(): number;
    public static width(): number;
    public static widthMm(): number;
  }
  
  interface ScreenProps extends GObject.ObjectProps {
    fontOptions?: any;
    resolution?: number;
  }
  
  export class Seat extends GObject.Object {
    constructor(props?: SeatProps);
    
    display?: Display;
    
    public getCapabilities(): SeatCapabilities;
    public getDisplay(): Display;
    public getKeyboard(): Device;
    public getPointer(): Device;
    public getSlaves(capabilities: SeatCapabilities): GLib.List;
    public grab(window: Window, capabilities: SeatCapabilities, ownerEvents: boolean, cursor: Cursor, event: Event, prepareFunc: SeatGrabPrepareFunc, prepareFuncData: any): GrabStatus;
    public ungrab(): void;
    
    public on(event: 'deviceAdded', listener: (device: Device) => void): this;
    public on(event: 'deviceRemoved', listener: (device: Device) => void): this;
    public on(event: 'toolAdded', listener: (tool: DeviceTool) => void): this;
    public on(event: 'toolRemoved', listener: (tool: DeviceTool) => void): this;
  }
  
  interface SeatProps extends GObject.ObjectProps {
    display?: Display;
  }
  
  export class Visual extends GObject.Object {
    constructor(props?: VisualProps);
    
    public getBitsPerRgb(): number;
    public getBluePixelDetails(mask: number, shift: number, precision: number): void;
    public getByteOrder(): ByteOrder;
    public getColormapSize(): number;
    public getDepth(): number;
    public getGreenPixelDetails(mask: number, shift: number, precision: number): void;
    public getRedPixelDetails(mask: number, shift: number, precision: number): void;
    public getScreen(): Screen;
    public getVisualType(): VisualType;
    
    public static getBest(): Visual;
    public static getBestDepth(): number;
    public static getBestType(): VisualType;
    public static getBestWithBoth(depth: number, visualType: VisualType): Visual;
    public static getBestWithDepth(depth: number): Visual;
    public static getBestWithType(visualType: VisualType): Visual;
    public static getSystem(): Visual;
  }
  
  interface VisualProps extends GObject.ObjectProps {
    
  }
  
  export class Window extends GObject.Object {
    constructor(props?: WindowProps);
    
    cursor?: Cursor;
    
    public addFilter(_function: FilterFunc, data: any): void;
    public beep(): void;
    public beginDrawFrame(region: cairo.Region): DrawingContext;
    public beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void;
    public beginMoveDragForDevice(device: Device, button: number, rootX: number, rootY: number, timestamp: number): void;
    public beginPaintRect(rectangle: Rectangle): void;
    public beginPaintRegion(region: cairo.Region): void;
    public beginResizeDrag(edge: WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void;
    public beginResizeDragForDevice(edge: WindowEdge, device: Device, button: number, rootX: number, rootY: number, timestamp: number): void;
    public configureFinished(): void;
    public coordsFromParent(parentX: number, parentY: number, x: number, _y: number): void;
    public coordsToParent(x: number, _y: number, parentX: number, parentY: number): void;
    public createGlContext(): GLContext;
    public createSimilarImageSurface(format: number, width: number, height: number, scale: number): cairo.Surface;
    public createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface;
    public deiconify(): void;
    public destroy(): void;
    public destroyNotify(): void;
    public enableSynchronizedConfigure(): void;
    public endDrawFrame(context: DrawingContext): void;
    public endPaint(): void;
    public ensureNative(): boolean;
    public flush(): void;
    public focus(timestamp: number): void;
    public freezeToplevelUpdatesLibgtkOnly(): void;
    public freezeUpdates(): void;
    public fullscreen(): void;
    public fullscreenOnMonitor(monitor: number): void;
    public geometryChanged(): void;
    public getAcceptFocus(): boolean;
    public getBackgroundPattern(): cairo.Pattern;
    public getChildren(): GLib.List;
    public getChildrenWithUserData(userData: any): GLib.List;
    public getClipRegion(): cairo.Region;
    public getComposited(): boolean;
    public getCursor(): Cursor;
    public getDecorations(decorations: WMDecoration): boolean;
    public getDeviceCursor(device: Device): Cursor;
    public getDeviceEvents(device: Device): EventMask;
    public getDevicePosition(device: Device, x: number, _y: number, mask: ModifierType): Window;
    public getDevicePositionDouble(device: Device, x: number, _y: number, mask: ModifierType): Window;
    public getDisplay(): Display;
    public getDragProtocol(target: Window): DragProtocol;
    public getEffectiveParent(): Window;
    public getEffectiveToplevel(): Window;
    public getEventCompression(): boolean;
    public getEvents(): EventMask;
    public getFocusOnMap(): boolean;
    public getFrameClock(): FrameClock;
    public getFrameExtents(rect: Rectangle): void;
    public getFullscreenMode(): FullscreenMode;
    public getGeometry(x: number, _y: number, width: number, height: number): void;
    public getGroup(): Window;
    public getHeight(): number;
    public getModalHint(): boolean;
    public getOrigin(x: number, _y: number): number;
    public getParent(): Window;
    public getPassThrough(): boolean;
    public getPointer(x: number, _y: number, mask: ModifierType): Window;
    public getPosition(x: number, _y: number): void;
    public getRootCoords(x: number, _y: number, rootX: number, rootY: number): void;
    public getRootOrigin(x: number, _y: number): void;
    public getScaleFactor(): number;
    public getScreen(): Screen;
    public getSourceEvents(source: InputSource): EventMask;
    public getState(): WindowState;
    public getSupportMultidevice(): boolean;
    public getToplevel(): Window;
    public getTypeHint(): WindowTypeHint;
    public getUpdateArea(): cairo.Region;
    public getUserData(data: any): void;
    public getVisibleRegion(): cairo.Region;
    public getVisual(): Visual;
    public getWidth(): number;
    public getWindowType(): WindowType;
    public hasNative(): boolean;
    public hide(): void;
    public iconify(): void;
    public inputShapeCombineRegion(shapeRegion: cairo.Region, offsetX: number, offsetY: number): void;
    public invalidateMaybeRecurse(region: cairo.Region, childFunc: WindowChildFunc, userData: any): void;
    public invalidateRect(rect: Rectangle, invalidateChildren: boolean): void;
    public invalidateRegion(region: cairo.Region, invalidateChildren: boolean): void;
    public isDestroyed(): boolean;
    public isInputOnly(): boolean;
    public isShaped(): boolean;
    public isViewable(): boolean;
    public isVisible(): boolean;
    public lower(): void;
    public markPaintFromClip(cr: cairo.Context): void;
    public maximize(): void;
    public mergeChildInputShapes(): void;
    public mergeChildShapes(): void;
    public move(x: number, _y: number): void;
    public moveRegion(region: cairo.Region, dx: number, dy: number): void;
    public moveResize(x: number, _y: number, width: number, height: number): void;
    public peekChildren(): GLib.List;
    public processUpdates(updateChildren: boolean): void;
    public raise(): void;
    public registerDnd(): void;
    public removeFilter(_function: FilterFunc, data: any): void;
    public reparent(newParent: Window, x: number, _y: number): void;
    public resize(width: number, height: number): void;
    public restack(sibling: Window, above: boolean): void;
    public scroll(dx: number, dy: number): void;
    public setAcceptFocus(acceptFocus: boolean): void;
    public setBackground(color: Color): void;
    public setBackgroundPattern(pattern: cairo.Pattern): void;
    public setBackgroundRgba(rgba: RGBA): void;
    public setChildInputShapes(): void;
    public setChildShapes(): void;
    public setComposited(composited: boolean): void;
    public setCursor(cursor: Cursor): void;
    public setDecorations(decorations: WMDecoration): void;
    public setDeviceCursor(device: Device, cursor: Cursor): void;
    public setDeviceEvents(device: Device, eventMask: EventMask): void;
    public setEventCompression(eventCompression: boolean): void;
    public setEvents(eventMask: EventMask): void;
    public setFocusOnMap(focusOnMap: boolean): void;
    public setFullscreenMode(mode: FullscreenMode): void;
    public setFunctions(functions: WMFunction): void;
    public setGeometryHints(geometry: Geometry, geomMask: WindowHints): void;
    public setGroup(leader: Window): void;
    public setIconList(pixbufs: GLib.List): void;
    public setIconName(name: string): void;
    public setInvalidateHandler(handler: WindowInvalidateHandlerFunc): void;
    public setKeepAbove(setting: boolean): void;
    public setKeepBelow(setting: boolean): void;
    public setModalHint(modal: boolean): void;
    public setOpacity(opacity: number): void;
    public setOpaqueRegion(region: cairo.Region): void;
    public setOverrideRedirect(overrideRedirect: boolean): void;
    public setPassThrough(passThrough: boolean): void;
    public setRole(role: string): void;
    public setShadowWidth(left: number, right: number, top: number, bottom: number): void;
    public setSkipPagerHint(skipsPager: boolean): void;
    public setSkipTaskbarHint(skipsTaskbar: boolean): void;
    public setSourceEvents(source: InputSource, eventMask: EventMask): void;
    public setStartupId(startupId: string): void;
    public setStaticGravities(useStatic: boolean): boolean;
    public setSupportMultidevice(supportMultidevice: boolean): void;
    public setTitle(title: string): void;
    public setTransientFor(parent: Window): void;
    public setTypeHint(hint: WindowTypeHint): void;
    public setUrgencyHint(urgent: boolean): void;
    public setUserData(userData: GObject.Object): void;
    public shapeCombineRegion(shapeRegion: cairo.Region, offsetX: number, offsetY: number): void;
    public show(): void;
    public showUnraised(): void;
    public showWindowMenu(event: Event): boolean;
    public stick(): void;
    public thawToplevelUpdatesLibgtkOnly(): void;
    public thawUpdates(): void;
    public unfullscreen(): void;
    public unmaximize(): void;
    public unstick(): void;
    public withdraw(): void;
    public createSurface(width: number, height: number): cairo.Surface;
    public fromEmbedder(embedderX: number, embedderY: number, offscreenX: number, offscreenY: number): void;
    public pickEmbeddedChild(x: number, _y: number): Window;
    public toEmbedder(offscreenX: number, offscreenY: number, embedderX: number, embedderY: number): void;
    
    public on(event: 'createSurface', listener: (width: number, height: number) => cairo.Surface): this;
    public on(event: 'fromEmbedder', listener: (embedderX: number, embedderY: number, offscreenX: number, offscreenY: number) => void): this;
    public on(event: 'movedToRect', listener: (flippedRect: any, finalRect: any, flippedX: boolean, flippedY: boolean) => void): this;
    public on(event: 'pickEmbeddedChild', listener: (x: number, _y: number) => Window): this;
    public on(event: 'toEmbedder', listener: (offscreenX: number, offscreenY: number, embedderX: number, embedderY: number) => void): this;
    
    public static atPointer(winX: number, winY: number): Window;
    public static constrainSize(geometry: Geometry, flags: WindowHints, width: number, height: number, newWidth: number, newHeight: number): void;
    public static processAllUpdates(): void;
    public static setDebugUpdates(setting: boolean): void;
  }
  
  interface WindowProps extends GObject.ObjectProps {
    cursor?: Cursor;
  }

}