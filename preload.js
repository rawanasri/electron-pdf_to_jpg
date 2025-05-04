const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  sendConvertClick: () => ipcRenderer.send('convert-button-clicked')
})
