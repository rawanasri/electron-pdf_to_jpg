const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { preload } = require('./preload.js')
const path = require('path')

let isDev = true;

const createWindow = () => {
  const win = new BrowserWindow({
    width: isDev ? 1300 :450,
    height: isDev ? 850 : 250,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
    })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)

  ipcMain.on('convert-button-clicked', (event) => {
    console.log('Convert Button Clicked !')
  });
}

app.whenReady().then(() => {
  createWindow()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
