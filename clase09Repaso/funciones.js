//Function
function sumar(n1, n2){
    const resultado = n1 + n2
    return resultado
}
//Arrow function
let suma = (n1,n2) => {
    return n1 + n2
}
//Arrow function simplificado
let sum = (n1,n2) => (n1 + n2)
// setInterval(() => {
//     i++
//     if (i>100){
//         clearInterval(intervalo)
//     }
//     console.log(i);
// }, 1)

// console.log(sumar(2,4), suma(4,4), sum(5,4));
let segundoEspera = 5;
let intervalo = setTimeout(() => {
    console.log("Esto se ejecuta en " + segundoEspera + " segundos")
}, segundoEspera * 1000)
