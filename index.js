import { app, BrowserWindow, ipcMain, dialog } from 'electron';

let isDev = true;

const createWindow = () => {
  const win = new BrowserWindow({
    width: isDev ? 1300 :450,
    height: isDev ? 850 : 250,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false
      preload: path.join(__dirname, 'preload.js')
    }
    })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)

  ipcMain.on('open-file-dialog', (e) => {
    dialog.showOpenDialog(win, {
      properties: ['openFile']
    }).then((result) => {
      if (!result.canceled) {
        const filePath = result.filePaths[0]
        console.log('file Path :', filePath)
        e.sender.send('file-path-response', filePath)
      }
    }).catch((err) => {
      console.log('Error opening file Dialog', err)
    })
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
