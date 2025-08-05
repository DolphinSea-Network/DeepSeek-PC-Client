const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// 禁用默认菜单
Menu.setApplicationMenu(null);

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: "DeepSeek Chat",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false // 允许跨域请求
    }
  });

  // 加载DeepSeek聊天页面
  mainWindow.loadURL('https://chat.deepseek.com');

  // 打开开发者工具 (调试时使用)
  // mainWindow.webContents.openDevTools();
}

// 当Electron完成初始化并准备创建浏览器窗口时调用
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // 在macOS上，当点击dock图标且没有其他窗口打开时，通常会重新创建一个窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 当所有窗口都关闭时退出应用
app.on('window-all-closed', () => {
  // 在macOS上，应用及其菜单栏通常保持活动状态，直到用户使用Cmd + Q显式退出
  if (process.platform !== 'darwin') app.quit();
});
