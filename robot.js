// 引入 robotjs 模組
const robot = require("robotjs");
const { execSync } = require('child_process');

// 定義要貼上的預先設定好的文字
const textsToPaste = [
    ["朱嘉新", "886921988551", "F128836068"],
    ["林思妤", "886921988551", "F128836068"],
    ["鄭佳豪", "886921988551", "F128836068"],
    ["龔淑娟", "886921988551", "F128836068"]
];

// 延遲一段時間
robot.setKeyboardDelay(1);

// 模擬鼠標按鍵點擊
robot.mouseClick();

// 迴圈處理每個要貼上的文字組合
for (let i = 0; i < textsToPaste.length; i++) {
    const textToPasteGroup = textsToPaste[i];
    // 迴圈處理每個要貼上的文字
    for (let j = 0; j < textToPasteGroup.length; j++) {
        const textToPaste = textToPasteGroup[j];
        // 將文字設置到系統剪貼板中
        execSync(`echo ${textToPaste.trim()} | clip`);
        // 模擬按下 Ctrl + V 貼上文字
        robot.keyTap("v", ["control"]);
        // 如果不是最後一個元素，則模擬按下 Tab 鍵
        if (j < textToPasteGroup.length - 1) {
            robot.keyTap("tab");
        }
    }
    // 如果不是最後一個組合，則模擬按下 Tab 鍵
    if (i < textsToPaste.length - 1) {
        robot.keyTap("tab");
    }
}
