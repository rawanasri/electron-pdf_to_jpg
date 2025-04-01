import { ipcRenderer } from "electron"

let fileChooser = document.getElementById('fileChooser')
let convertButton = document.getElementById('conversionButton')
let format = document.getElementById('format')

convertButton.style.backgroundColor = 'green'

fileChooser.addEventListener('change', () => {
  convertButton.disabled = false
})

//
//ipcRenderer.on('file-path-response', (event, path) =>   {
//  format.innerText = `File Path : ${path}`
//})
