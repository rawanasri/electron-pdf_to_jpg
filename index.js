import { app, BrowserWindow, ipcMain, dialog } from 'electron'

const createWindow = () => {
  const win = new BrowserWindow({
    menu: null,
    width: 500,
    height: 300
    })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
