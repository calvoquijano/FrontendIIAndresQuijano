// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetchFunction();





function fetchFunction() {
    fetch("https://randomuser.me/api/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //manipulamos la respuesta
            renderizarDatosUsuario(data);
        });
}

function renderizarDatosUsuario(data) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    const mailUsuario = data.results[0].email
    const nombreUsuario = `${data.results[0].name.first} ${data.results[0].name.last}` 
    const imagenUsuario = data.results[0].picture.large;
    const datos = document.querySelector('.tarjeta');
    datos.innerHTML = `
    <article>
        <div class="nombre"><b>Nombre:</b> ${nombreUsuario} </div>
        <div class="correo"><b>Correo eletrónico:</b> ${mailUsuario} </div>
        <img class="imagenUsuario" src="${imagenUsuario}">
    </article>
    `  
}



/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.


//Funciona
const btnUsuarioRamdon = document.querySelector("#random");
btnUsuarioRamdon.addEventListener("click", fetchFunction);