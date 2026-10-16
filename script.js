// 這份檔案負責網站上的簡單互動。
// 你可以先不修改程式，等網站跑起來後再慢慢學。

const works = [
  {
    title: "Electronic Zoo",
    category: "VIDEO INSTALLATION / 2025",
    description: "在這裡寫作品介紹。可以描述作品的概念、使用的媒材、觀眾如何觀看，以及作品想提出的問題。"
  },
  {
    title: "The Cybernetic Interpreter",
    category: "GAME ART / 2024",
    description: "在這裡寫第二件作品的介紹，也可以補上作品使用的遊戲、軟體、展出方式與連結。"
  },
  {
    title: "Shot",
    category: "MOVING IMAGE / 2023",
    description: "在這裡寫第三件作品的介紹。年份、作品名稱和說明都可以依照實際資料調整。"
  }
];

const dialog = document.querySelector("#work-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCategory = document.querySelector("#dialog-category");
const dialogDescription = document.querySelector("#dialog-description");

document.querySelectorAll("[data-work]").forEach((button) => {
  button.addEventListener("click", () => {
    const work = works[Number(button.dataset.work)];
    dialogTitle.textContent = work.title;
    dialogCategory.textContent = work.category;
    dialogDescription.textContent = work.description;
    dialog.showModal();
  });
});

document.querySelector("#dialog-close").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const menuToggle = document.querySelector("#menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "CLOSE" : "MENU";
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "MENU";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
