/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
/*----------------- Algo que encontré ------------*/
const ponerTilde = document.querySelector('.card-header :nth-child(4)');
ponerTilde.innerHTML = `Interés en JavaScript: <span id="javascript"></span>`;
/* ------------------ PUNTO 1 ------------------ */
function obtenerDatosDelUsuario() {
  let nombreUsuario = prompt("Por favor, ingresa tu nombre: ");
  let nacimientoUsuario = prompt("Por favor, ingresa el año de nacimiento: ");
  let anioActual = new Date().getFullYear();
  let ciudadUsuario = prompt("Por favor, ingresa la ciudad en donde vives: ");
  let usuarioGustaJS = confirm("¿Te gusta JavaScript? ");
  datosPersona.nombre = nombreUsuario;
  datosPersona.edad = anioActual - parseInt(nacimientoUsuario);
  datosPersona.ciudad = ciudadUsuario;
  datosPersona.interesPorJs = usuarioGustaJS;
}
/* ------------------ PUNTO 2 ------------------ */
function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  const imprimirNombre = document.querySelector('#nombre');
  const imprimirAnio = document.querySelector('#edad');
  const imprimirCiudad = document.querySelector('#ciudad');
  const imprimirGusto = document.querySelector('#javascript');
  imprimirNombre.innerHTML = datosPersona.nombre;
  imprimirAnio.innerHTML = datosPersona.edad;
  imprimirCiudad.innerHTML = datosPersona.ciudad;
  function siONo (){
    if(datosPersona.interesPorJs === true){
        return "Si"
      }
      else{
        return "No"
      }
    };
  imprimirGusto.innerHTML = siONo();
}

/* ------------------ PUNTO 3 ------------------ */
function recorrerListadoYRenderizarTarjetas() {
  const contenidoMaterias = document.getElementById('fila');
  contenidoMaterias.innerHTML = '';
  listado.forEach(materia => {
    contenidoMaterias.innerHTML += `
    <div class="caja">
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
      <p>${materia.lenguajes}</p>  
      <p>${materia.bimestre}</p>      
    </div>
    `
  })
}

/* ------------------ PUNTO 4 ------------------ */
function alternarColorTema() {
  let dark = document.querySelector('body');
  dark.classList.toggle('dark');
}
/* ------------------ PUNTO 5 ------------------ */
let sobreMi = document.querySelector('#sobre-mi');
document.addEventListener("keydown", function (event){
  if(event.key === 'f'){
    sobreMi.classList.remove('oculto');
  }
})





