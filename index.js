import { app, BrowserWindow, ipcMain, dialog } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 250,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false
    }
    })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)

  ipcMain.on('open-file-dialog', (e) => {
    console.log('xxeie')
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
