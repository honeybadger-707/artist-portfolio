藝術家個人網站入門包
====================

檔案：
- index.html：網站內容與結構
- style.css：顏色、排版、字體、手機版設計
- script.js：作品彈出視窗與手機選單互動
- images/：放你自己的作品圖片（目前使用 CSS 製作的抽象示意圖）

如何在電腦上預覽：
1. 解壓縮這個 ZIP。
2. 打開 artist_portfolio_starter 資料夾。
3. 連按兩下 index.html，就會在瀏覽器開啟網站。
4. 修改檔案後，回到瀏覽器重新整理即可看到更新。

第一步先修改：
1. index.html 中的 ARTIST NAME、作品標題、年份、About、CV、電子郵件。
2. script.js 裡 works 陣列中的作品名稱、年份和作品介紹。
3. style.css 可修改顏色、字體大小、間距與版面。

如何免費發布到 GitHub Pages：
1. 註冊或登入 https://github.com/
2. 建立一個新的 repository（儲存庫），例如 artist-portfolio。
3. 將 index.html、style.css、script.js 與 images 資料夾上傳到儲存庫根目錄。
4. 進入儲存庫的 Settings → Pages。
5. 在 Build and deployment 中選擇 Deploy from a branch。
6. Branch 選 main，資料夾選 / (root)，按 Save。
7. 等待部署完成，GitHub Pages 會顯示網站網址，通常是：
   https://你的帳號.github.io/artist-portfolio/

注意：
- GitHub Pages 適合 HTML、CSS、JavaScript 等靜態網站。
- 如果你要放大型影片，建議使用影片託管服務並嵌入，而不是把大型影片直接放進 GitHub。
- 免費網址會帶有 github.io；自訂網域通常需要另外購買。
