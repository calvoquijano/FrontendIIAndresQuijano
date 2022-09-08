miPerri()

function miPerri() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (respuesta) {
      return respuesta.json()
    }).then(function (respuesta) {
      const imgPerrito = respuesta.message
      document.getElementById('imagen').setAttribute('src', imgPerrito)
    })
}
