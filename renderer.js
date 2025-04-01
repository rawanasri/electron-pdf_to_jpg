let fileChooser = document.getElementById('fileChooser')
let convertButton = document.getElementById('conversionButton')
let format = document.getElementById('format')

fileChooser.addEventListener('change', (event) => {
  convertButton.disabled = false
  const filePath = event.target.files[0]?.path;

  if (filePath) {
    format.innerText = `${filePath}`
  }
  else {
    format.innerText = 'no file selected.'
  }
})
