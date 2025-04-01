import { app, BrowserWindow, ipcMain, dialog } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 250
    })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
}

ipcMain.on('open-file-dialog', (e) => {
  dialog.showOpenDialog(win, {
    properties: ['openFile']
  }).then(result => {
    if (!result.canceled) {
      event.reply('file-path-response', result.filePaths[0])
    }
  }).catch(err => {
    console.log('Error opening file Dialog', err)
  })
});

app.whenReady().then(() => {
  createWindow()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
