// function contadorAgregar(){
//     const valor = parseInt(document.getElementById('valor').innerText);
//     document.getElementById('valor').innerText = parseInt(valor) + 1;
//     console.log('Clic en +')
// }
// function contadorQuitar(){
//     const valor = parseInt(document.getElementById('valor').innerText);
//     document.getElementById('valor').innerText = parseInt(valor) - 1;
//     console.log('Clic en -')
// }

let i = 0;
const contador = document.getElementById('valor');
function contadorAgregar(){
    i += 1;
    contador.innerText = i;
    if (i>0){
        let borroso = document.getElementById('menos')
        borroso.classList.remove('borroso')
    }
}
function contadorQuitar(){
    i -= 1;
    contador.innerText = i;
    if (i<=0){
        i-=i;
        let borroso = document.getElementById('menos')
        borroso.classList.add('borroso')
        contador.innerText = i;
    }

}
