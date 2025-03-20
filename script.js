import { ipcRenderer } from "elctron";

let fileChooser = document.getElementById('file-chooser');

fileChooser.addEventListener('change', () => {
  ipcRenderer.send('open-file-dialog')
})

ipcRenderer.on('selected-file', (event, filePath) => {
  console.log(filePath)
  fileChooser.value = filePath;
})


