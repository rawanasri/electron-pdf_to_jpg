let fileChooser = document.getElementById('fileChooser')
let convertButton = document.getElementById('conversionButton')

fileChooser.addEventListener('change', () => {
  convertButton.disabled = false
})
