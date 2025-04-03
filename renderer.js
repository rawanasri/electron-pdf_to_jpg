
let fileChooser = document.getElementById('fileChooser')
let convertButton = document.getElementById('conversionButton')
let format = document.getElementById('format')

fileChooser.addEventListener('change', () => {
  convertButton.disabled = false
})

document.addEventListener('DOMContentLoaded', () => {
  const { ipcRenderer } = require('electron')

  ipcRenderer.on('file-path-response', (event, path) =>   {
    format.innerText = `File Path : ${path}`
  })
})

