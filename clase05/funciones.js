//Fondo
// aplicarModoOscuro();
// function aplicarModoOscuro() {
//     let fondo = document.querySelector('body');
//     fondo.classList.toggle('bg');
//     //H1
//     let titulo = document.querySelector('h1');
//     titulo.classList.toggle('gris');

//     //items
//     let itemsNegro = document.querySelectorAll('.item');
//     for (let i = 0; i < itemsNegro.length; i++) {
//         itemsNegro[i].classList.toggle('item-negro');
//     }

//     //subtitulos
//     let subtitulos = document.querySelectorAll('.item h2');
//     for (let i = 0; i < subtitulos.length; i++) {
//         subtitulos[i].classList.toggle('colores');
//     }
//     //textos
//     let textosClaros = document.querySelectorAll('.item p');
//     for (let i = 0; i < textosClaros.length; i++) {
//         textosClaros[i].classList.toggle('colores');
//     }
// }

aplicarModoOscuro();
function aplicarModoOscuro() {
    let dark = document.querySelector('body');
    dark.classList.toggle('dark');
    let ligth = document.querySelector('body');
    ligth.classList.toggle('ligth');
}
