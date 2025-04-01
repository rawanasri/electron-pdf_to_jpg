import { app, BrowserWindow, ipcMain } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 250
    })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('selected-file', (event, filePath) => {
  console.log(`path : ${filePath}`)
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
