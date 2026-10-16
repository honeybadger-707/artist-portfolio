藝術家作品集網站（深色電子／遊戲美學）
=====================================

檔案：
- index.html：網站內容
- style.css：視覺樣式
- script.js：中英語言切換
- images/：放置作品圖片

如何預覽：
1. 在 VS Code 選擇 File > Open Folder，開啟這個資料夾。
2. 點開 index.html。
3. 安裝 VS Code 的 Live Server 擴充功能後，在 index.html 上按右鍵 > Open with Live Server。
   也可以直接在檔案總管雙擊 index.html 用瀏覽器開啟。

替換作品圖片：
1. 將作品圖片放進 images 資料夾。
2. 依序命名為 work-01.jpg、work-02.jpg、work-03.jpg。
3. 若你的圖片是 PNG，請把 index.html 裡對應的 .jpg 改成 .png。
建議使用橫幅或高解析度作品照，並確認你有權公開使用。

替換影片：
在 index.html 搜尋「VIDEO EMBED」，把影片佔位區塊替換成 iframe。
YouTube 影片通常可使用：
<iframe src="https://www.youtube.com/embed/你的影片ID" title="作品影片" allowfullscreen loading="lazy"></iframe>
請將 iframe 放在 .video-frame 裡面。

修改個人資料：
- 在 index.html 搜尋 ARTIST_NAME、your.email@example.com，改成你的名字與聯絡信箱。
- CV 區塊中的示範展覽經歷請換成真實資料。
- 中英文文字可在 index.html 與 script.js 的 translations 區塊修改。

更新 GitHub Pages：
1. 儲存修改（Ctrl+S）。
2. 開啟 GitHub Desktop，確認目前 repository 是 artist-portfolio。
3. 左下 Summary 填寫例如 Update portfolio design。
4. 按 Commit to main。
5. 按 Push origin（若顯示 Fetch origin，先確認是否有待推送變更）。
6. 等 GitHub Pages 部署完成，再重新整理網站。

注意：這個版本使用免費 Google Fonts；若希望完全不依賴外部服務，可移除 style.css 最上方的 @import。
