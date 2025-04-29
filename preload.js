import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld('call', {
  consoleLogs: () => ipcRenderer.invoke('success')
})
