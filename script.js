const translations = {
  zh: {
    navWorks:"作品 WORKS",navAbout:"關於 ABOUT",navContact:"聯絡 CONTACT",
    heroEyebrow:"藝術家作品集 / 2026",heroLine1:"Selected",heroLine2:"Works.",
    heroIntro:"以遊戲、影像與裝置作為研究工具，探索數位系統如何形塑我們觀看、記憶與理解世界的方式。",
    explore:"探索作品",scroll:"向下捲動以進入檔案 ↓",worksTitle:"作品檔案_",worksNote:"選取作品 / 影像、遊戲與裝置",
    work1Title:"電子翻譯員",work1Desc:"作品將遊戲視為一種翻譯機制：玩家的操作、系統規則與影像回饋，在人與機器之間形成持續協商的語言。",
    work1Detail:"作品媒材｜單頻道錄像、遊戲引擎、互動系統\n關鍵字｜翻譯、控制、介面、玩家行為",
    work2Desc:"從遊戲中的戰爭影像出發，重新檢視觀看、模擬與紀錄之間的界線，以及影像如何被製造為證據。",
    work2Detail:"作品媒材｜雙頻道錄像、遊戲畫面\n關鍵字｜戰爭、模擬、觀看、影像政治",
    work3Title:"電子動物園",work3Desc:"虛擬生物在預設規則與數位棲地中活動，作品藉此提問：當生命被轉化為資料與行為模型，我們觀看的究竟是誰？",
    work3Detail:"作品媒材｜即時影像、遊戲引擎、裝置\n關鍵字｜虛擬生態、控制、物種、資料",
    readMore:"閱讀作品介紹",videoTitle:"影像放映_",videoNote:"作品預告 / 展覽紀錄 / moving image",
    videoPlaceholder:"將你的 YouTube 或 Vimeo 影片連結嵌入此處",videoCaption:"作品影像與展覽紀錄｜請替換為你的影片",
    aboutTitle:"關於藝術家_",aboutBig:"我把遊戲當作一種觀看世界的方法。",
    aboutText:"我的創作以遊戲、影像與裝置為媒介，關注數位技術、系統規則與日常經驗之間的關係。透過重新編排遊戲機制與影像語言，我嘗試讓隱藏在介面背後的權力、觀看位置與感知結構變得可見。",
    cvNote:"簡歷與展覽紀錄",cv1:"個展／展覽名稱，展覽空間，台灣",cv2:"作品名稱，聯展／放映計畫，台灣",cv3:"研究計畫／藝術節／駐村名稱",cvHint:"以上為示範文字，請改成你的真實經歷。",
    contactTitle:"有訊號就聯絡。<br><em>Let's connect.</em>",contactText:"展覽邀請、合作與其他訊息，歡迎來信。",backTop:"返回頂端 ↑"
  },
  en: {
    navWorks:"WORKS",navAbout:"ABOUT",navContact:"CONTACT",heroEyebrow:"ARTIST PORTFOLIO / 2026",
    heroLine1:"Selected",heroLine2:"Works.",heroIntro:"Using games, moving images and installation as research tools, I explore how digital systems shape the ways we see, remember and understand the world.",
    explore:"EXPLORE WORKS",scroll:"SCROLL TO ENTER THE ARCHIVE ↓",worksTitle:"Selected Works_",worksNote:"SELECTED PROJECTS / VIDEO, GAME & INSTALLATION",
    work1Title:"The Cybernetic Interpreter",work1Desc:"The work treats games as a form of translation. Player actions, system rules and visual feedback become a continuously negotiated language between humans and machines.",
    work1Detail:"MEDIA｜Single-channel video, game engine, interactive system\nKEYWORDS｜Translation, control, interface, player behaviour",
    work2Desc:"Starting from images of war in video games, this work examines the boundaries between looking, simulation and documentation, and how images are constructed as evidence.",
    work2Detail:"MEDIA｜Two-channel video, game footage\nKEYWORDS｜War, simulation, spectatorship, image politics",
    work3Title:"Electronic Zoo",work3Desc:"Virtual creatures move within programmed rules and digital habitats. The work asks: when life becomes data and behavioural models, who—or what—are we really looking at?",
    work3Detail:"MEDIA｜Real-time image, game engine, installation\nKEYWORDS｜Virtual ecology, control, species, data",
    readMore:"PROJECT NOTES",videoTitle:"Screening Room_",videoNote:"TRAILERS / EXHIBITION DOCUMENTATION / MOVING IMAGE",
    videoPlaceholder:"Embed your YouTube or Vimeo video here",videoCaption:"Artwork video and exhibition documentation — replace with your video",
    aboutTitle:"About the Artist_",aboutBig:"I use games as a way to look at the world.",
    aboutText:"My practice uses games, moving images and installation to examine the relationships between digital technology, system rules and everyday experience. By rearranging game mechanics and visual language, I make visible the power structures, viewing positions and perceptual systems hidden behind interfaces.",
    cvNote:"BIOGRAPHY & EXHIBITIONS",cv1:"Solo exhibition / exhibition title, venue, Taiwan",cv2:"Selected work, group exhibition / screening, Taiwan",cv3:"Research project / festival / residency",
    cvHint:"Sample entries — replace these with your actual credits.",contactTitle:"Signal received?<br><em>Let's connect.</em>",contactText:"For exhibition invitations, collaborations and other enquiries, feel free to email.",backTop:"BACK TO TOP ↑"
  }
};
let currentLanguage = "zh";
const toggle = document.getElementById("lang-toggle");
toggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "zh" ? "en" : "zh";
  document.documentElement.lang = currentLanguage === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) {
      element.innerHTML = translations[currentLanguage][key].replace(/\n/g, "<br>");
    }
  });
  toggle.textContent = currentLanguage === "zh" ? "EN / 中" : "中 / EN";
});
