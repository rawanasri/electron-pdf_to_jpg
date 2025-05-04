
let fileChooser = document.getElementById('fileChooser')
let convertButton = document.getElementById('conversionButton')
let format = document.getElementById('format')

fileChooser.addEventListener('change', () => {
  convertButton.disabled = false
})

convertButton.addEventListener('click', () => {
  window.api.sendConvertClick()
})
