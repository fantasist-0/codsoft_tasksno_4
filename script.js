/* ============================================
   MUSIC PLAYER — JavaScript Engine
   ============================================ */

// ---- Global State & Data ----
let playlists = {
  'all_songs': {
    id: 'all_songs',
    name: 'Available Tracks',
    desc: 'All available songs',
    cover: 'album_midnight_study.jpg',
    songs: [
  {
    "id": 1,
    "title": "140 - audio only medium",
    "artist": "1684715141194131976Revolution",
    "artwork": "frieren.jpg",
    "src": "music/1684715141194131976Revolution-140_-_audio_only_medium.m4a"
  },
  {
    "id": 2,
    "title": "21 AMV Anime MV ILKwkbaWOyU",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/21_AMV_Anime_MV_ILKwkbaWOyU_140.mp3"
  },
  {
    "id": 3,
    "title": "@Rachel Lorin Kerosene Lyrics 7clouds Release",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/@Rachel_Lorin_Kerosene_Lyrics_7clouds_Release_256kbps_cbr_.mp3"
  },
  {
    "id": 4,
    "title": "Aathma Raama OtLyzDoUfI0",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Aathma_Raama_OtLyzDoUfI0_140.mp3"
  },
  {
    "id": 5,
    "title": "Aigiri Nandini Mahishasura Mardini Stuti pTSt2g3ER38",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Aigiri_Nandini_Mahishasura_Mardini_Stuti_pTSt2g3ER38_140.mp3"
  },
  {
    "id": 6,
    "title": "Aigiri Nandini PvlI2a2Lrro",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Aigiri_Nandini_PvlI2a2Lrro_140.mp3"
  },
  {
    "id": 7,
    "title": "Am I The Monster AMV Anime MV 7DVkVqK3vvo",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Am_I_The_Monster_AMV_Anime_MV_7DVkVqK3vvo_140.mp3"
  },
  {
    "id": 8,
    "title": "Ashes Stellar Official Lyric Video  wH3JmLBOnMU",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Ashes_Stellar_Official_Lyric_Video__wH3JmLBOnMU_140.mp3"
  },
  {
    "id": 9,
    "title": "Astronaut In The Ocean Lyrics Masked Wolf",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Astronaut_In_The_Ocean_Lyrics_Masked_Wolf_256kbps_cbr_.mp3"
  },
  {
    "id": 10,
    "title": "20221128-WA0028",
    "artist": "AUD",
    "artwork": "frieren.jpg",
    "src": "music/AUD-20221128-WA0028.m4a"
  },
  {
    "id": 11,
    "title": "The Nights ( 256kbps cbr )",
    "artist": "Avicii",
    "artwork": "frieren.jpg",
    "src": "music/Avicii - The Nights ( 256kbps cbr ).mp3"
  },
  {
    "id": 12,
    "title": "Babam Bam Paradox Hustle 2.0 9KCtZ9r4OAw",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Babam_Bam_Paradox_Hustle_2.0_9KCtZ9r4OAw_140.mp3"
  },
  {
    "id": 13,
    "title": "Survive ( 256kbps cbr )",
    "artist": "Beku San",
    "artwork": "frieren.jpg",
    "src": "music/Beku San - Survive ( 256kbps cbr ).mp3"
  },
  {
    "id": 14,
    "title": "Imagine Dragons",
    "artist": "Believer",
    "artwork": "frieren.jpg",
    "src": "music/Believer - Imagine Dragons.m4a"
  },
  {
    "id": 15,
    "title": "Bella Poarch Living Hell Official Music Video iCPm55hqA3k",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Bella_Poarch_Living_Hell_Official_Music_Video_iCPm55hqA3k_140.mp3"
  },
  {
    "id": 16,
    "title": "Besomorph & Coopex Redemption ft Riell NCS Release",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Besomorph_&_Coopex_Redemption_ft_Riell_NCS_Release_256kbps_cbr_.mp3"
  },
  {
    "id": 17,
    "title": "Blood Water fI69eQnMIvo",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Blood_Water_fI69eQnMIvo_140.mp3"
  },
  {
    "id": 18,
    "title": "Bye Bye Bye    NSYNC",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Bye Bye Bye    NSYNC.mp3"
  },
  {
    "id": 19,
    "title": "ceiling fan  ZFLz XNnVU8",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/ceiling_fan__ZFLz_XNnVU8_140.mp3"
  },
  {
    "id": 20,
    "title": "Ruth B",
    "artist": "Dandelions",
    "artwork": "frieren.jpg",
    "src": "music/Dandelions - Ruth B.m4a"
  },
  {
    "id": 21,
    "title": "Everything  NCS Release  ( 256kbps cbr )",
    "artist": "Diamond Eyes",
    "artwork": "frieren.jpg",
    "src": "music/Diamond Eyes - Everything _NCS Release_ ( 256kbps cbr ).mp3"
  },
  {
    "id": 22,
    "title": "Flutter (Lyrics)",
    "artist": "Diamond Eyes",
    "artwork": "frieren.jpg",
    "src": "music/Diamond Eyes - Flutter (Lyrics).mp3"
  },
  {
    "id": 23,
    "title": "Diamond Eyes 23 Lyrics I lost my best friend at 23",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Diamond_Eyes_23_Lyrics_I_lost_my_best_friend_at_23_256kbps_cbr_.mp3"
  },
  {
    "id": 24,
    "title": "Slow",
    "artist": "Diviners  Riell",
    "artwork": "frieren.jpg",
    "src": "music/Diviners  Riell - Slow.mp3"
  },
  {
    "id": 25,
    "title": "Ed Sheeran Shape of You Official Music Video",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Ed_Sheeran_Shape_of_You_Official_Music_Video_256kbps_cbr_.mp3"
  },
  {
    "id": 26,
    "title": "Eminem Mockingbird Lyrics  pWYP2ZmOGOA",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Eminem_Mockingbird_Lyrics__pWYP2ZmOGOA_140.mp3"
  },
  {
    "id": 27,
    "title": "Faasle zP9n2ZAS28Q",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Faasle_zP9n2ZAS28Q_140.mp3"
  },
  {
    "id": 28,
    "title": "Fairytale 8CsuLbpBuN4",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Fairytale_8CsuLbpBuN4_140.mp3"
  },
  {
    "id": 29,
    "title": "Har Fun Maula X Money in the Grave 4JDNfBGyz0w",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Har_Fun_Maula_X_Money_in_the_Grave_4JDNfBGyz0w_140.mp3"
  },
  {
    "id": 30,
    "title": "Husn  deqdZmKzyg",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Husn__deqdZmKzyg_140.mp3"
  },
  {
    "id": 31,
    "title": "Insane Insanity Remix  Ve tRM8N1RQ",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Insane_Insanity_Remix__Ve_tRM8N1RQ_140.mp3"
  },
  {
    "id": 32,
    "title": "JAWNY Honeypie Animation MV Original Full Version by Se mcYLzu 1cNc",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/JAWNY_Honeypie_Animation_MV_Original_Full_Version_by_Se_mcYLzu_1cNc.mp3"
  },
  {
    "id": 33,
    "title": "Jerry Lee Lewis Great Balls of Fire Lyric Video MMwq D DWsU",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Jerry_Lee_Lewis_Great_Balls_of_Fire_Lyric_Video_MMwq_D_DWsU_140.mp3"
  },
  {
    "id": 34,
    "title": "Jim Yosef",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Jim Yosef.mp3"
  },
  {
    "id": 35,
    "title": "Justin Timberlake Cry Me A River Official Video DksSPZTZES0",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Justin_Timberlake_Cry_Me_A_River_Official_Video_DksSPZTZES0_140.mp3"
  },
  {
    "id": 36,
    "title": "JVKE golden hour official music video  PEM0Vs8jf1w",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/JVKE_golden_hour_official_music_video__PEM0Vs8jf1w_140.mp3"
  },
  {
    "id": 37,
    "title": "Kaifi Khalil Kahani Suno 2 0 Official Music Video XBVWlI8TsQ",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Kaifi_Khalil_Kahani_Suno_2_0_Official_Music_Video_XBVWlI8TsQ_140.mp3"
  },
  {
    "id": 38,
    "title": "Laurindo Almeida The Lamp Is Low lkk6m14htzw",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Laurindo_Almeida_The_Lamp_Is_Low_lkk6m14htzw_140.mp3"
  },
  {
    "id": 39,
    "title": "Alec Benjamin",
    "artist": "Let Me Down Slowly",
    "artwork": "frieren.jpg",
    "src": "music/Let Me Down Slowly - Alec Benjamin.m4a"
  },
  {
    "id": 40,
    "title": "let me fall",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/let me fall.mp3"
  },
  {
    "id": 41,
    "title": "Light Switch AMV Anime MV xEj8fhEmjyA",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Light_Switch_AMV_Anime_MV_xEj8fhEmjyA_140.mp3"
  },
  {
    "id": 42,
    "title": "LIL DUSTY G INSECTS QQh1Mj6miqo",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/LIL_DUSTY_G_INSECTS_QQh1Mj6miqo_140.mp3"
  },
  {
    "id": 43,
    "title": "Cheriimoya",
    "artist": "Living Life In The Night",
    "artwork": "frieren.jpg",
    "src": "music/Living Life In The Night - Cheriimoya.mp3"
  },
  {
    "id": 44,
    "title": "Lost Sky Dreams pt II feat Sara Skinner NCS Release",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Lost_Sky_Dreams_pt_II_feat_Sara_Skinner_NCS_Release_256kbps_cbr_.mp3"
  },
  {
    "id": 45,
    "title": "Mere Mehboob Qayamat Hogi audio only me m",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Mere_Mehboob_Qayamat_Hogi_140_audio_only_me_m.mp3"
  },
  {
    "id": 46,
    "title": "Elley Duhe",
    "artist": "MIDDLE OF THE NIGHT",
    "artwork": "frieren.jpg",
    "src": "music/MIDDLE OF THE NIGHT - Elley Duhe.m4a"
  },
  {
    "id": 47,
    "title": "Middle of the Night AMV Anime MV UW4xw9Gz5z0",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Middle_of_the_Night_AMV_Anime_MV_UW4xw9Gz5z0_140.mp3"
  },
  {
    "id": 48,
    "title": "M\u00e5neskin I WANNA BE YOUR SLAVE Lyrics Testo Eurovision M6ZZKNPrSPw",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/M\u00e5neskin_I_WANNA_BE_YOUR_SLAVE_Lyrics_Testo_Eurovision_M6ZZKNPrSPw.mp3"
  },
  {
    "id": 49,
    "title": "nadaaniyan EFAJcxnFLgs",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/nadaaniyan_EFAJcxnFLgs_140.mp3"
  },
  {
    "id": 50,
    "title": "New Medicine Take Me Away Official Lyric Video e7Shp1jM KA",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/New_Medicine_Take_Me_Away_Official_Lyric_Video_e7Shp1jM_KA_140.mp3"
  },
  {
    "id": 51,
    "title": "New Punjabi Songs 2020 21 Guilty Official Video Inder C B8G3zCnZvMU",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/New_Punjabi_Songs_2020_21_Guilty_Official_Video_Inder_C_B8G3zCnZvMU.mp3"
  },
  {
    "id": 52,
    "title": "abcdefu (Lyrics)",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - abcdefu (Lyrics).mp3"
  },
  {
    "id": 53,
    "title": "All My Friends Are Fake (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - All My Friends Are Fake (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 54,
    "title": "Another Level (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Another Level (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 55,
    "title": "CHAMPION (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - CHAMPION (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 56,
    "title": "Cherry Gum (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Cherry Gum (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 57,
    "title": "Control (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Control (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 58,
    "title": "DJ Blow The Speakers (Lyrics)",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - DJ Blow The Speakers (Lyrics).mp3"
  },
  {
    "id": 59,
    "title": "Full Speed Ahead (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Full Speed Ahead (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 60,
    "title": "Ghost Town (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Ghost Town (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 61,
    "title": "Hiding In The Blue (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Hiding In The Blue (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 62,
    "title": "No Friends (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - No Friends (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 63,
    "title": "NOTORIOUS (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - NOTORIOUS (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 64,
    "title": "Odds Are (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Odds Are (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 65,
    "title": "PARANOIA (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - PARANOIA (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 66,
    "title": "Pokemon \u00dc (Lyrics)",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Pokemon \u00dc (Lyrics).mp3"
  },
  {
    "id": 67,
    "title": "Solo (Lyrics)",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - Solo (Lyrics).mp3"
  },
  {
    "id": 68,
    "title": "This Is It (Lyrics) ( 256kbps cbr )",
    "artist": "Nightcore",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore - This Is It (Lyrics) ( 256kbps cbr ).mp3"
  },
  {
    "id": 69,
    "title": "Rumors (Lyrics)",
    "artist": "Nightcore \u2013 NEFFEX",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore \u2013 NEFFEX - Rumors (Lyrics).mp3"
  },
  {
    "id": 70,
    "title": "Nightcore Close To The Sun TheFatRat Anjulie Lyrics xiJkUTazxRo",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore_Close_To_The_Sun_TheFatRat_Anjulie_Lyrics_xiJkUTazxRo.mp3"
  },
  {
    "id": 71,
    "title": "Nightcore Dreams pt. II Lyrics  ctcMylqea4Q",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore_Dreams_pt._II_Lyrics__ctcMylqea4Q_140.mp3"
  },
  {
    "id": 72,
    "title": "Nightcore Superhero In My Sleep Lyrics  DuOSih CFLQ",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore_Superhero_In_My_Sleep_Lyrics__DuOSih_CFLQ_140.mp3"
  },
  {
    "id": 73,
    "title": "Nightcore Take Me Out to California Lyrics",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Nightcore_Take_Me_Out_to_California_Lyrics_256kbps_cbr_.mp3"
  },
  {
    "id": 74,
    "title": "g",
    "artist": "Play Date AMV Anime MV tIOy4g4zD",
    "artwork": "frieren.jpg",
    "src": "music/Play_Date_AMV_Anime_MV_tIOy4g4zD-g_140.mp3"
  },
  {
    "id": 75,
    "title": "Zk",
    "artist": "Ravayan m9qJWCZ9",
    "artwork": "frieren.jpg",
    "src": "music/Ravayan_m9qJWCZ9-Zk_140.mp3"
  },
  {
    "id": 76,
    "title": "Rival Lonely Way ft Caravn NCS Release",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Rival_Lonely_Way_ft_Caravn_NCS_Release_256kbps_cbr_.mp3"
  },
  {
    "id": 77,
    "title": "m3c",
    "artist": "Sabrina Carpenter Looking at Me Lyrics  pJuabhB",
    "artwork": "frieren.jpg",
    "src": "music/Sabrina_Carpenter_Looking_at_Me_Lyrics__pJuabhB-m3c_140.mp3"
  },
  {
    "id": 78,
    "title": "Shikayat kCgN xD0qFY",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Shikayat_kCgN_xD0qFY_140.mp3"
  },
  {
    "id": 79,
    "title": "Shivers AMV Anime MV r4XjBWc8tE0",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Shivers_AMV_Anime_MV_r4XjBWc8tE0_140.mp3"
  },
  {
    "id": 80,
    "title": "skyfall",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/skyfall.mp3"
  },
  {
    "id": 81,
    "title": "Something Different AMV Anime MV aMZ7juu 8U0",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Something_Different_AMV_Anime_MV_aMZ7juu_8U0_140.mp3"
  },
  {
    "id": 82,
    "title": "Somewhere Only We Know AMV Anime MV mLyaG0uQzu4",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Somewhere_Only_We_Know_AMV_Anime_MV_mLyaG0uQzu4_140.mp3"
  },
  {
    "id": 83,
    "title": "Cradles  Official Music Video  ( 256kbps cbr )",
    "artist": "Sub Urban",
    "artwork": "frieren.jpg",
    "src": "music/Sub Urban - Cradles _Official Music Video_ ( 256kbps cbr ).mp3"
  },
  {
    "id": 84,
    "title": "Suzanne Vega DNA Tom s Diner j4jtIDaeaWI",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Suzanne_Vega_DNA_Tom_s_Diner_j4jtIDaeaWI_140.mp3"
  },
  {
    "id": 85,
    "title": "Take Me To Church JKlYOUfviXM",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Take_Me_To_Church_JKlYOUfviXM_140.mp3"
  },
  {
    "id": 86,
    "title": "Teri Yaad   Aditya Rikhari",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Teri Yaad   Aditya Rikhari.mp3"
  },
  {
    "id": 87,
    "title": "The Weeknd Blinding Lights Official Audio  fHI8X4OXluQ",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/The_Weeknd_Blinding_Lights_Official_Audio__fHI8X4OXluQ_140.mp3"
  },
  {
    "id": 88,
    "title": "Thodi Jagah song ANIME VERSION AMV A Beautiful Love Sto m ir6yaT1NI",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Thodi_Jagah_song_ANIME_VERSION_AMV_A_Beautiful_Love_Sto_m_ir6yaT1NI.mp3"
  },
  {
    "id": 89,
    "title": "Tom Petty Love Is A Long Road Lyrics  YxCzJlPi83c",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Tom_Petty_Love_Is_A_Long_Road_Lyrics__YxCzJlPi83c_140.mp3"
  },
  {
    "id": 90,
    "title": "Tum Kyu Chale Ate Ho (Lofi)(256k)",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Tum_Kyu_Chale_Ate_Ho_(Lofi)(256k).mp3"
  },
  {
    "id": 91,
    "title": "T & Sugah x NCT Stardust feat Miyoki Lyrics",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/T_&_Sugah_x_NCT_Stardust_feat_Miyoki_Lyrics_256kbps_cbr_.mp3"
  },
  {
    "id": 92,
    "title": "Sia",
    "artist": "Unstoppable",
    "artwork": "frieren.jpg",
    "src": "music/Unstoppable - Sia.m4a"
  },
  {
    "id": 93,
    "title": "Uraan Tu Hai Kahan Lyrics Raffey Usama Ahad lyOo1MZawU0",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/Uraan_Tu_Hai_Kahan_Lyrics_Raffey_Usama_Ahad_lyOo1MZawU0_140.mp3"
  },
  {
    "id": 94,
    "title": "YOASOBI Idol \u30a2\u30a4\u30c9\u30eb English Ver.  RkjSfZ30GM4",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/YOASOBI_Idol_\u30a2\u30a4\u30c9\u30eb_English_Ver.__RkjSfZ30GM4_140.mp3"
  },
  {
    "id": 95,
    "title": "YOASOBI \u30a2\u30a4\u30c9\u30eb Official Music Video ZRtdQ81jPUQ",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/YOASOBI_\u30a2\u30a4\u30c9\u30eb_Official_Music_Video_ZRtdQ81jPUQ_140.mp3"
  },
  {
    "id": 96,
    "title": "Below The Surface FNAF SISTER LOCATION SONG by Griffin CzG5E2NiZO8",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/_Below_The_Surface_FNAF_SISTER_LOCATION_SONG_by_Griffin_CzG5E2NiZO8.mp3"
  },
  {
    "id": 97,
    "title": "Remastered Ghalat Fehmi X Jo Tu Na Mila Amv JalRaj A S PabOhdBdnMk",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/_Remastered_Ghalat_Fehmi_X_Jo_Tu_Na_Mila_Amv_JalRaj_A_S_PabOhdBdnMk.mp3"
  },
  {
    "id": 98,
    "title": "\u0938\u0902\u092a\u0942\u0930\u094d\u0923 \u0917\u0940\u0924\u093e MAHABHARAT Krishna RAP Kavi Amit Sharma Z7fckUyPx4s",
    "artist": "Unknown Artist",
    "artwork": "frieren.jpg",
    "src": "music/\u0938\u0902\u092a\u0942\u0930\u094d\u0923_\u0917\u0940\u0924\u093e_MAHABHARAT_Krishna_RAP_Kavi_Amit_Sharma_Z7fckUyPx4s.mp3"
  }
],
    isCore: true
  },
  'favorites': {
    id: 'favorites',
    name: 'Liked Songs',
    desc: 'Songs you have liked',
    cover: 'album_library_hours.jpg',
    songs: [], // Populated dynamically
    isCore: true
  }
};

const state = {
  activePlaylistId: 'all_songs',   // The playlist currently playing
  viewedPlaylistId: 'all_songs',   // The playlist currently shown in the UI
  queue: [],                       // Independent playback queue
  queueSource: null,               // Source playlist ID for the queue
  currentIndex: 0,
  isPlaying: false,
  isShuffle: false,
  repeatMode: 'off',
  isAutoplay: false,
  isMuted: false,
  volume: 0.8,
  favoritesSet: new Set(),
  shuffleOrder: [],
  shufflePosition: 0,
  isDraggingProgress: false,
  isDraggingVolume: false,
  queueOpen: false,
};

// ---- DOM Elements ----
const audio = document.getElementById('audio-player');
const homeView = document.getElementById('home-view');
const playlistView = document.getElementById('playlist-view');
const playlistGrid = document.getElementById('playlist-grid');
const homeSongsList = document.getElementById('home-songs-list');
const btnBackHome = document.getElementById('btn-back-home');
const logoHomeBtn = document.getElementById('logo-home-btn');

const viewPlaylistCover = document.getElementById('view-playlist-cover');
const viewPlaylistTitle = document.getElementById('view-playlist-title');
const viewPlaylistDesc = document.getElementById('view-playlist-desc');
const playlistList = document.getElementById('playlist-list');
const mainPlayBtn = document.getElementById('main-play-btn');
const mainShuffleBtn = document.getElementById('main-shuffle-btn');
const btnCreatePlaylist = document.getElementById('btn-create-playlist');
const btnDeletePlaylist = document.getElementById('btn-delete-playlist');

const songTitle = document.getElementById('song-title');
const artworkImage = document.getElementById('artwork-image');
const songArtist = document.getElementById('song-artist');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const timeCurrent = document.getElementById('time-current');
const timeDuration = document.getElementById('time-duration');
const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');

const btnMute = document.getElementById('btn-mute');
const volumeBar = document.getElementById('volume-bar');
const volumeFill = document.getElementById('volume-fill');
const volumeSliderWrapper = document.querySelector('.volume-slider-wrapper');

const modalOverlay = document.getElementById('add-to-playlist-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalPlaylistList = document.getElementById('modal-playlist-list');
const modalCreatePlaylistBtn = document.getElementById('modal-create-playlist-btn');
let songToAddId = null; // Track which song is being added

const btnQueue = document.getElementById('btn-queue');
const queueSidebar = document.getElementById('queue-sidebar');
const closeQueueBtn = document.getElementById('close-queue-btn');
const queueList = document.getElementById('queue-list');
const toast = document.getElementById('toast');


// ---- Initialize ----
function init() {
  loadCustomPlaylists();
  loadFavorites();
  audio.volume = state.volume;
  renderHomeView();
  // By default, just load the first song from all_songs without playing
  loadTrack('all_songs', 0, false);
  setupEventListeners();
  lucide.createIcons();
}

// ---- Data Persistence ----
function saveCustomPlaylists() {
  // Only save custom playlists, not core ones. Also, we don't save uploaded songs (blob URLs die anyway).
  // Actually, we can save the structure, but songs will be empty.
  const customPls = {};
  for(const key in playlists) {
      if(!playlists[key].isCore) {
          customPls[key] = {
              id: playlists[key].id,
              name: playlists[key].name,
              desc: playlists[key].desc,
              cover: playlists[key].cover,
              songs: playlists[key].songs // Persist songs so custom playlists work across reloads
          };
      }
  }
  localStorage.setItem('ytClone_playlists', JSON.stringify(customPls));
}

function loadCustomPlaylists() {
  try {
    const saved = localStorage.getItem('ytClone_playlists');
    if (saved) {
      const parsed = JSON.parse(saved);
      for(const key in parsed) {
          playlists[key] = parsed[key];
      }
    }
  } catch(e) { console.warn("Failed to load custom playlists", e); }
}

// ---- View Management ----
function showHomeView() {
  playlistView.classList.remove('active');
  setTimeout(() => {
    playlistView.style.display = 'none';
    homeView.style.display = 'block';
    // tiny delay to allow display:block to apply before opacity transition
    setTimeout(() => homeView.classList.add('active'), 10);
  }, 300);
  renderHomeView();
}

function showPlaylistView(playlistId) {
  state.viewedPlaylistId = playlistId;
  const pl = playlists[playlistId];
  
  // Populate header
  viewPlaylistCover.src = pl.cover;
  viewPlaylistTitle.textContent = pl.name;
  viewPlaylistDesc.textContent = pl.desc;
  
  // Show/Hide delete button
  if (pl.isCore) {
      btnDeletePlaylist.style.display = 'none';
  } else {
      btnDeletePlaylist.style.display = 'flex';
  }
  
  renderPlaylistItems(playlistList, playlistId, true);

  homeView.classList.remove('active');
  setTimeout(() => {
    homeView.style.display = 'none';
    playlistView.style.display = 'block';
    setTimeout(() => playlistView.classList.add('active'), 10);
  }, 300);
}

function renderHomeView() {
  playlistGrid.innerHTML = '';
  
  Object.values(playlists).forEach(pl => {
    // Skip rendering the all_songs core playlist in the grid
    if (pl.id === 'all_songs') return;

    const card = document.createElement('div');
    card.className = 'playlist-card';
    card.innerHTML = `
      <div class="playlist-card-image-wrapper">
        <img class="playlist-card-image" src="${pl.cover}" alt="${pl.name}">
        <div class="playlist-card-play">
          <i data-lucide="play" fill="currentColor"></i>
        </div>
      </div>
      <div class="playlist-card-title">${pl.name}</div>
      <div class="playlist-card-desc">${pl.songs.length} songs</div>
    `;
    
    card.addEventListener('click', () => showPlaylistView(pl.id));
    
    const playBtn = card.querySelector('.playlist-card-play');
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if(pl.songs.length > 0) {
          playPlaylist(pl.id, 0);
      } else {
          showToast('Playlist is empty');
      }
    });

    playlistGrid.appendChild(card);
  });
  
  // Render the direct songs list on home view
  if (homeSongsList) {
      renderPlaylistItems(homeSongsList, 'all_songs', true);
  }
  
  lucide.createIcons();
}

// ---- Track Loading & Playback ----
function playPlaylist(playlistId, startIndex = 0) {
  state.activePlaylistId = playlistId;
  state.queueSource = playlistId;
  // Clone the playlist songs into the independent queue
  state.queue = [...playlists[playlistId].songs];
  loadTrack(playlistId, startIndex, true);
  renderPlaylistItems(queueList, 'queue', false, true); // Render the independent queue
}

function loadTrack(playlistId, index, autoPlay = false) {
  if(state.queue.length === 0) return;
  
  const track = state.queue[index];
  state.activePlaylistId = playlistId;
  state.currentIndex = index;

  audio.src = track.src;
  songTitle.textContent = track.title;
  songArtist.textContent = track.artist;
  if(artworkImage) {
      if (track && track.artwork) {
          artworkImage.src = track.artwork;
          artworkImage.style.display = 'block';
      } else {
          artworkImage.style.display = 'none';
      }
  }


  updateFavoriteButton();
  updatePlaylistActive(); // Update visual state in lists

  progressFill.style.width = '0%';
  timeCurrent.textContent = '0:00';
  timeDuration.textContent = '0:00';

  if (autoPlay) {
    audio.play().then(() => {
      setPlayingState(true);
    }).catch(err => {
      console.warn('Autoplay blocked:', err);
      setPlayingState(false);
    });
  } else {
      setPlayingState(false);
  }
}

function togglePlay() {
  // If we haven't started playing anything and click play, start the active playlist
  if (!audio.src) {
    playPlaylist(state.activePlaylistId, 0);
    return;
  }

  if (state.isPlaying) {
    audio.pause();
    setPlayingState(false);
  } else {
    audio.play().then(() => {
      setPlayingState(true);
    }).catch(err => console.warn('Play failed:', err));
  }
}

function setPlayingState(playing) {
  state.isPlaying = playing;

  if (playing) {
    btnPlay.innerHTML = '<i data-lucide="pause" fill="currentColor"></i>';
  } else {
    btnPlay.innerHTML = '<i data-lucide="play" fill="currentColor"></i>';
  }
  lucide.createIcons();
  updatePlaylistActive();
}

function playNext() {
  if (state.queue.length === 0) return;
  const currentPl = { songs: state.queue };

  let nextIndex;

  if (state.repeatMode === 'one') {
    nextIndex = state.currentIndex;
  } else if (state.isShuffle) {
    state.shufflePosition++;
    if (state.shufflePosition >= state.shuffleOrder.length) {
      if (state.repeatMode === 'all') {
        generateShuffleOrder();
        state.shufflePosition = 0;
      } else {
        setPlayingState(false);
        return;
      }
    }
    nextIndex = state.shuffleOrder[state.shufflePosition];
  } else {
    nextIndex = state.currentIndex + 1;
    if (nextIndex >= state.queue.length) {
      if (state.repeatMode === 'all') {
        nextIndex = 0;
      } else {
        setPlayingState(false);
        return;
      }
    }
  }
  loadTrack(state.activePlaylistId, nextIndex, true);
}

function playPrev() {
  if (state.queue.length === 0) return;
  const currentPl = { songs: state.queue };

  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  let prevIndex;

  if (state.isShuffle) {
    state.shufflePosition--;
    if (state.shufflePosition < 0) {
      state.shufflePosition = state.shuffleOrder.length - 1;
    }
    prevIndex = state.shuffleOrder[state.shufflePosition];
  } else {
    prevIndex = state.currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = currentPl.songs.length - 1;
    }
  }

  loadTrack(state.activePlaylistId, prevIndex, true);
}

// ---- Shuffle & Repeat ----
function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  btnShuffle.classList.toggle('active', state.isShuffle);

  if (state.isShuffle) {
    generateShuffleOrder();
    showToast('Shuffle is on');
  } else {
    showToast('Shuffle is off');
  }
}

function generateShuffleOrder() {
  if (state.queue.length === 0) return;
  const currentPl = { songs: state.queue };
  
  state.shuffleOrder = [...Array(currentPl.songs.length).keys()];
  for (let i = state.shuffleOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.shuffleOrder[i], state.shuffleOrder[j]] = [state.shuffleOrder[j], state.shuffleOrder[i]];
  }
  const currentPos = state.shuffleOrder.indexOf(state.currentIndex);
  if (currentPos > 0) {
    [state.shuffleOrder[0], state.shuffleOrder[currentPos]] = [state.shuffleOrder[currentPos], state.shuffleOrder[0]];
  }
  state.shufflePosition = 0;
}

function toggleRepeat() {
  const modes = ['off', 'all', 'one'];
  const currentModeIndex = modes.indexOf(state.repeatMode);
  state.repeatMode = modes[(currentModeIndex + 1) % modes.length];

  btnRepeat.classList.toggle('active', state.repeatMode !== 'off');
  btnRepeat.classList.toggle('repeat-one', state.repeatMode === 'one');

  const labels = { off: 'Repeat is off', all: 'Repeat all', one: 'Repeat one' };
  showToast(labels[state.repeatMode]);
}

// ---- Favorites ----
function toggleFavorite(trackId, sourcePlaylistId) {
  // Determine which track we are interacting with
  let trackToToggle;
  
  if (trackId === undefined) {
    // Toggled from bottom player bar
    if(!playlists[state.activePlaylistId].songs[state.currentIndex]) return;
    trackToToggle = playlists[state.activePlaylistId].songs[state.currentIndex];
  } else {
    // Toggled from a list
    const pl = playlists[sourcePlaylistId];
    trackToToggle = pl.songs.find(s => s.id === trackId);
  }

  if(!trackToToggle) return;

  if (state.favoritesSet.has(trackToToggle.id)) {
    state.favoritesSet.delete(trackToToggle.id);
    showToast('Removed from Liked songs');
  } else {
    state.favoritesSet.add(trackToToggle.id);
    showToast('Added to Liked songs');
  }

  saveFavorites();
  syncFavoritesPlaylist();
  updateFavoriteButton();
  
  // Re-render currently viewed list if it's the favorites list to show removals immediately
  if(state.viewedPlaylistId === 'favorites' && playlistView.style.display === 'block') {
      renderPlaylistItems(playlistList, 'favorites', true);
  } else {
      updatePlaylistFavorites(); // Just update icons if in another list
  }
  
  // Update home songs list icons if home view is active
  if (homeView.style.display !== 'none' && homeSongsList) {
      renderPlaylistItems(homeSongsList, 'all_songs', true);
  }
  
  // Update queue icons
  if(state.queueOpen) {
      renderPlaylistItems(queueList, 'queue', false, true);
  }
}

function syncFavoritesPlaylist() {
  // Rebuild the favorites playlist from all known songs
  // This is a simple approach. In a real app we'd have a master track database.
  // We'll scrape all playlists (except favorites itself) to find the full track objects.
  const favSongsMap = new Map();
  
  Object.keys(playlists).forEach(key => {
      if(key === 'favorites') return;
      playlists[key].songs.forEach(song => {
          if(state.favoritesSet.has(song.id)) {
              favSongsMap.set(song.id, song);
          }
      });
  });
  
  playlists['favorites'].songs = Array.from(favSongsMap.values());
}

function updateFavoriteButton() {
  // Removed global favorite button
}

function updatePlaylistFavorites() {
  document.querySelectorAll('.playlist-item-fav').forEach(btn => {
    // We need to parse as string if the id is a string (e.g. upload_xxx)
    // or int if it was a number. We'll use == for loose comparison or just String() 
    const id = btn.closest('.playlist-item').dataset.id;
    // Check if state.favoritesSet has it (we need to be careful with types)
    // Convert Set to array of strings to check
    const isFav = Array.from(state.favoritesSet).map(String).includes(String(id));
    btn.classList.toggle('favorited', isFav);
  });
}

function saveFavorites() {
  localStorage.setItem('ytClone_favorites', JSON.stringify([...state.favoritesSet]));
}

function loadFavorites() {
  try {
    const saved = localStorage.getItem('ytClone_favorites');
    if (saved) {
      state.favoritesSet = new Set(JSON.parse(saved));
      syncFavoritesPlaylist();
    }
  } catch (e) {}
}

// ---- Volume & Progress (unchanged mostly) ----
function setVolume(vol) {
  vol = Math.max(0, Math.min(1, vol));
  state.volume = vol;
  audio.volume = vol;
  state.isMuted = vol === 0;
  updateVolumeUI();
}

function toggleMute() {
  if (state.isMuted) {
    state.isMuted = false;
    audio.volume = state.volume > 0 ? state.volume : 0.5;
    if (state.volume === 0) state.volume = 0.5;
  } else {
    state.isMuted = true;
    audio.volume = 0;
  }
  updateVolumeUI();
}

function updateVolumeUI() {
  const displayVol = state.isMuted ? 0 : Math.round(state.volume * 100);
  volumeFill.style.width = `${displayVol}%`;
  volumeSliderWrapper.style.setProperty('--vol-percent', `${displayVol}%`);
  
  let iconName = 'volume-2';
  if (state.isMuted || state.volume === 0) iconName = 'volume-x';
  else if (state.volume < 0.5) iconName = 'volume-1';
  
  btnMute.innerHTML = `<i data-lucide="${iconName}"></i>`;
  lucide.createIcons();
}

function updateProgress() {
  if (state.isDraggingProgress || !audio.duration) return;
  const percent = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${percent}%`;
  progressBar.setAttribute('aria-valuenow', Math.round(percent));
  timeCurrent.textContent = formatTime(audio.currentTime);
}

function seekTo(e) {
  const rect = progressBar.parentElement.getBoundingClientRect();
  const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (audio.duration) {
    audio.currentTime = percent * audio.duration;
    progressFill.style.width = `${percent * 100}%`;
    timeCurrent.textContent = formatTime(audio.currentTime);
  }
}

function formatTime(seconds) {
  if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ---- Rendering Lists ----
function renderPlaylistItems(container, playlistId, showDuration, isQueue = false) {
  container.innerHTML = '';
  const songsArray = isQueue ? state.queue : playlists[playlistId].songs;
  
  if(!songsArray || songsArray.length === 0) {
      container.innerHTML = `<div class="empty-state">No songs in this playlist.</div>`;
      return;
  }

  songsArray.forEach((track, index) => {
    const li = document.createElement('li');
    
    // Check if this item is currently playing
    let isActive = false;
    const currentTrack = state.queue[state.currentIndex];
    if (currentTrack) {
        if (isQueue) {
            isActive = (state.currentIndex === index);
        } else {
            isActive = (String(track.id) === String(currentTrack.id));
        }
    }
    
    li.className = `playlist-item${isActive ? ' active' : ''}`;
    li.dataset.index = index;
    li.dataset.id = track.id;
    li.dataset.playlist = playlistId;

    const isFav = Array.from(state.favoritesSet).map(String).includes(String(track.id));

    li.innerHTML = `
      <div class="playlist-item-number">
        <span class="playlist-item-number-text">${index + 1}</span>
        <div class="playing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="playlist-item-info">
        <div class="playlist-item-title">${track.title}</div>
        <div class="playlist-item-artist">${track.artist}</div>
      </div>
      <div class="playlist-item-actions">
        <button class="playlist-item-fav${isFav ? ' favorited' : ''}">
          <i data-lucide="thumbs-up"></i>
        </button>
        <div class="dropdown-container">
            <button class="playlist-item-options" title="More options" onclick="toggleDropdown(event)">
                <i data-lucide="more-vertical"></i>
            </button>
            <div class="dropdown-menu">
                <div class="dropdown-item" onclick="handlePlayNext('${track.id}', '${playlistId}')"><i data-lucide="list-start"></i> Play next</div>
                <div class="dropdown-item" onclick="handleAddQueue('${track.id}', '${playlistId}')"><i data-lucide="list-plus"></i> Add to queue</div>
                ${!isQueue ? `<div class="dropdown-item" onclick="openAddToPlaylistModal('${track.id}', '${playlistId}')"><i data-lucide="plus-circle"></i> Add to playlist</div>` : `<div class="dropdown-item" onclick="removeFromQueue(${index})"><i data-lucide="x"></i> Remove from queue</div>`}
            </div>
        </div>
        ${showDuration ? `<span class="playlist-item-duration">--:--</span>` : ''}
      </div>
    `;

    // Click to play
    li.addEventListener('click', (e) => {
      if (e.target.closest('.playlist-item-fav') || e.target.closest('.dropdown-container')) return;
      if (isQueue) {
          loadTrack(state.activePlaylistId, index, true);
      } else {
          playPlaylist(playlistId, index);
      }
    });



    // Favorite click
    const favBtn = li.querySelector('.playlist-item-fav');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(track.id, playlistId);
    });

    container.appendChild(li);
  });
  
  lucide.createIcons();
}

function updatePlaylistActive() {
  const currentTrack = state.queue[state.currentIndex];
  
  document.querySelectorAll('.playlist-item').forEach((item) => {
    const pId = item.dataset.playlist;
    const idx = parseInt(item.dataset.index);
    const trackId = item.dataset.id;
    
    let isCurrent = false;
    if (currentTrack) {
        if (pId === 'queue') {
            isCurrent = (idx === state.currentIndex);
        } else {
            isCurrent = (String(trackId) === String(currentTrack.id));
        }
    }
    
    if (isCurrent) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function toggleQueue() {
  state.queueOpen = !state.queueOpen;
  queueSidebar.classList.toggle('open', state.queueOpen);
  btnQueue.classList.toggle('active', state.queueOpen);
  if(state.queueOpen) {
      renderPlaylistItems(queueList, 'queue', false, true);
  }
}

let toastTimeout;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2000);
}

// ---- Add to Playlist Modal ----
function openAddToPlaylistModal(trackId, sourcePlaylistId) {
  songToAddId = { trackId, sourcePlaylistId };
  
  // Populate the list of custom playlists
  modalPlaylistList.innerHTML = '';
  let hasCustom = false;
  
  Object.values(playlists).forEach(pl => {
    if (!pl.isCore) {
      hasCustom = true;
      const li = document.createElement('li');
      li.innerHTML = `<i data-lucide="list-music"></i> <span>${pl.name}</span>`;
      li.addEventListener('click', () => {
        addSongToPlaylist(pl.id);
        closeAddToPlaylistModal();
      });
      modalPlaylistList.appendChild(li);
    }
  });

  if (!hasCustom) {
    modalPlaylistList.innerHTML = '<li style="justify-content: center; color: var(--text-secondary); cursor: default;">No custom playlists yet</li>';
  }

  modalOverlay.style.display = 'flex';
  lucide.createIcons();
}

function closeAddToPlaylistModal() {
  modalOverlay.style.display = 'none';
  songToAddId = null;
}

function addSongToPlaylist(targetPlaylistId) {
  if (!songToAddId) return;
  const sourcePl = playlists[songToAddId.sourcePlaylistId];
  const track = sourcePl.songs.find(s => s.id === songToAddId.trackId);
  
  if (track) {
    // Clone track object to avoid reference issues
    const trackCopy = { ...track };
    playlists[targetPlaylistId].songs.push(trackCopy);
    saveCustomPlaylists(); // Only structure is saved right now per original code, let's assume it works for demo
    
    // In order to persist songs in custom playlists properly, we should update saveCustomPlaylists to save songs too.
    showToast(`Added to ${playlists[targetPlaylistId].name}`);
    
    // Refresh view if needed
    if (state.viewedPlaylistId === targetPlaylistId && playlistView.style.display === 'block') {
      renderPlaylistItems(playlistList, targetPlaylistId, true);
    }
    renderHomeView();
  }
}

// ---- Events ----
function setupEventListeners() {
  // Nav
  logoHomeBtn.addEventListener('click', showHomeView);
  btnBackHome.addEventListener('click', showHomeView);
  
  // Playlist Management
  btnCreatePlaylist.addEventListener('click', () => {
      const name = prompt("Enter a name for your new playlist:");
      if (name && name.trim()) {
          const id = 'custom_' + Date.now();
          playlists[id] = {
              id: id,
              name: name.trim(),
              desc: 'Custom Playlist',
              cover: 'album_midnight_study.jpg',
              songs: [],
              isCore: false
          };
          saveCustomPlaylists();
          renderHomeView();
          showToast(`Playlist "${name}" created!`);
      }
  });

  btnDeletePlaylist.addEventListener('click', () => {
      if(state.viewedPlaylistId && !playlists[state.viewedPlaylistId].isCore) {
          if(confirm(`Are you sure you want to delete "${playlists[state.viewedPlaylistId].name}"?`)) {
              const idToDelete = state.viewedPlaylistId;
              delete playlists[idToDelete];
              saveCustomPlaylists();
              
              if(state.activePlaylistId === idToDelete) {
                  audio.pause();
                  setPlayingState(false);
                  audio.src = '';
                  songTitle.textContent = 'Select a track';
                  songArtist.textContent = '';
              }
              showHomeView();
              showToast("Playlist deleted");
          }
      }
  });

  // Playback
  btnPlay.addEventListener('click', togglePlay);
  
  // Main buttons on playlist view
  mainPlayBtn.addEventListener('click', () => {
    playPlaylist(state.viewedPlaylistId, 0);
  });
  
  mainShuffleBtn.addEventListener('click', () => {
      state.isShuffle = true;
      btnShuffle.classList.add('active');
      playPlaylist(state.viewedPlaylistId, 0);
      generateShuffleOrder();
      showToast('Shuffle play started');
  });
  
  btnNext.addEventListener('click', playNext);
  btnPrev.addEventListener('click', playPrev);
  btnShuffle.addEventListener('click', toggleShuffle);
  btnRepeat.addEventListener('click', toggleRepeat);

  btnMute.addEventListener('click', toggleMute);

  // Queue Sidebar
  btnQueue.addEventListener('click', toggleQueue);
  closeQueueBtn.addEventListener('click', () => {
    state.queueOpen = false;
    queueSidebar.classList.remove('open');
    btnQueue.classList.remove('active');
  });

  // Modal Events
  closeModalBtn.addEventListener('click', closeAddToPlaylistModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeAddToPlaylistModal();
  });
  
  modalCreatePlaylistBtn.addEventListener('click', () => {
    const name = prompt("Enter a name for your new playlist:");
    if (name && name.trim()) {
      const id = 'custom_' + Date.now();
      playlists[id] = {
        id: id,
        name: name.trim(),
        desc: 'Custom Playlist',
        cover: 'album_midnight_study.jpg',
        songs: [],
        isCore: false
      };
      
      // Automatically add the song to the new playlist
      addSongToPlaylist(id);
      
      saveCustomPlaylists();
      renderHomeView();
      closeAddToPlaylistModal();
    }
  });

  // Volume & Progress drag
  volumeBar.addEventListener('mousedown', (e) => { state.isDraggingVolume = true; handleVolumeDrag(e); });
  const progContainer = progressBar.parentElement;
  progContainer.addEventListener('mousedown', (e) => { state.isDraggingProgress = true; seekTo(e); });

  document.addEventListener('mousemove', (e) => {
    if (state.isDraggingProgress) seekTo(e);
    if (state.isDraggingVolume) handleVolumeDrag(e);
  });

  document.addEventListener('mouseup', () => {
    state.isDraggingProgress = false;
    state.isDraggingVolume = false;
  });

  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', () => {
    timeDuration.textContent = formatTime(audio.duration);
    
    // Update duration in main playlist list if viewing the playing playlist
    if(state.viewedPlaylistId === state.activePlaylistId) {
        document.querySelectorAll('#playlist-list .playlist-item').forEach(item => {
            if(parseInt(item.dataset.index) === state.currentIndex) {
                const dur = item.querySelector('.playlist-item-duration');
                if(dur) dur.textContent = formatTime(audio.duration);
            }
        });
    }
  });

  audio.addEventListener('ended', () => {
    if (state.repeatMode === 'one') {
      audio.currentTime = 0;
      audio.play();
    } else {
      playNext();
    }
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    switch (e.code) {
      case 'Space': e.preventDefault(); togglePlay(); break;
      case 'ArrowRight':
        e.preventDefault();
        if (e.shiftKey) playNext();
        else if (audio.duration) audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (e.shiftKey) playPrev();
        else audio.currentTime = Math.max(0, audio.currentTime - 5);
        break;
      case 'ArrowUp': e.preventDefault(); setVolume(state.volume + 0.05); break;
      case 'ArrowDown': e.preventDefault(); setVolume(state.volume - 0.05); break;
      case 'KeyM': toggleMute(); break;
      case 'KeyS': toggleShuffle(); break;
      case 'KeyR': toggleRepeat(); break;
      case 'KeyQ': toggleQueue(); break;
    }
  });
}

function handleVolumeDrag(e) {
  const rect = volumeBar.getBoundingClientRect();
  const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  setVolume(percent);
}

document.addEventListener('DOMContentLoaded', init);

// ---- Context Menu Logic ----
function toggleDropdown(e) {
    e.stopPropagation();
    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== e.currentTarget.nextElementSibling) menu.classList.remove('show');
    });
    const menu = e.currentTarget.nextElementSibling;
    menu.classList.toggle('show');
}

// Close dropdowns on outside click
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
    });
});

function getTrackById(trackId, sourcePlaylistId) {
    if (sourcePlaylistId === 'queue') {
        return state.queue.find(t => t.id === trackId || String(t.id) === trackId);
    }
    const pl = playlists[sourcePlaylistId];
    if (pl) return pl.songs.find(t => t.id === trackId || String(t.id) === trackId);
    return null;
}

function handlePlayNext(trackId, sourcePlaylistId) {
    const track = getTrackById(trackId, sourcePlaylistId);
    if (track) {
        // Splice right after current index
        const insertIndex = state.queue.length === 0 ? 0 : state.currentIndex + 1;
        state.queue.splice(insertIndex, 0, track);
        showToast('Song will play next');
        if (state.queueOpen) renderPlaylistItems(queueList, 'queue', false, true);
        
        // If queue was empty, start playing it immediately
        if (state.queue.length === 1) {
             loadTrack('queue', 0, true);
        }
    }
}

function handleAddQueue(trackId, sourcePlaylistId) {
    const track = getTrackById(trackId, sourcePlaylistId);
    if (track) {
        state.queue.push(track);
        showToast('Added to queue');
        if (state.queueOpen) renderPlaylistItems(queueList, 'queue', false, true);
        
        // If queue was empty, start playing it immediately
        if (state.queue.length === 1) {
             loadTrack('queue', 0, true);
        }
    }
}

function removeFromQueue(index) {
    state.queue.splice(index, 1);
    showToast('Removed from queue');
    if (state.currentIndex === index) {
        if (state.queue.length === 0) {
            audio.pause();
            setPlayingState(false);
            audio.src = '';
            songTitle.textContent = 'Select a track';
            songArtist.textContent = '';
            if(artworkImage) {
                artworkImage.src = '';
                artworkImage.style.display = 'none';
            }

            timeCurrent.textContent = '0:00';
            timeDuration.textContent = '0:00';
            progressFill.style.width = '0%';
        } else {
            if (state.currentIndex >= state.queue.length) {
                state.currentIndex = 0;
            }
            loadTrack(state.queueSource || 'all_songs', state.currentIndex, true);
        }
    } else if (state.currentIndex > index) {
        state.currentIndex--;
    }
    if (state.queueOpen) renderPlaylistItems(queueList, 'queue', false, true);
}
