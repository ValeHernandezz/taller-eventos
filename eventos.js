document.querySelector('div').addEventListener('click', function () {
  alert('Hola! Soy el div')
})

document.querySelector('button').addEventListener('click', function (evento) {
  evento.stopPropagation()  // Detiene la propagación del evento click al div
  alert('Hola!')
})