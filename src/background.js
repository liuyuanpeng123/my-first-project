// electron/main.js
import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import { URL } from 'url'

// 避免垃圾回收导致窗口关闭
let win

// 创建窗口函数
function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,  // 允许渲染进程使用 Node.js API
      contextIsolation: false,  // 关闭上下文隔离（与 nodeIntegration 配合使用）
    },
  }) 

  // 开发环境加载 Vite 服务，生产环境加载本地 HTML
  if (process.env.VITE_DEV_SERVER_URL) {
    // 开发环境：加载 Vite 启动的地址
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    // 打开开发者工具
    win.webContents.openDevTools()
  } else {
    // 生产环境：加载打包后的 index.html
    win.loadURL(
      new URL('./dist/index.html', 'file://' + __dirname).toString()
    )
  }
}
app.on('ready', () => {
  // 在创建窗口前禁用缓存
  // app.commandLine.appendSwitch('--disable-http-cache');
  
  createWindow()
});

// 应用就绪后创建窗口
// app.whenReady().then(createWindow)

// 关闭所有窗口时退出应用（macOS 除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// macOS 点击 Dock 图标时重新创建窗口
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})