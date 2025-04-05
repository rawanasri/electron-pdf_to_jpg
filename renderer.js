const { ipcRenderer } = require('electron')

let fileChooser = document.getElementById('fileChooser')
let convertButton = document.getElementById('conversionButton')
let format = document.getElementById('format')

fileChooser.addEventListener('change', () => {
  convertButton.disabled = false
})

//ipcRenderer.on('file-path-response', (event, path) =>   {
//  console.log((`File Path : ${path}`))
//})
//
//ipcRenderer.send('open-file-dialog')
