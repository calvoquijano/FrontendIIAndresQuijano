let personaje = {
    nombre: "Bojack",
    apellido: "Horseman",
    edad: 58
}
//For In
for(let recorrer in personaje){
    console.log(personaje[recorrer])
}

let movies = ["Little Miss Sunshine", "Billie Elliot", "Ciudad de Dios"]
//For of
for(let bestMovie of movies){
    console.log(bestMovie)
}
console.log(movies[1])

//Math

let numeroPI = Math.PI;
let numeroAleatorio = Math.round(Math.random() * 100);
let numeroRedondeado = Math.round(numeroPI)

console.log(numeroPI + " " + numeroRedondeado + " " + numeroAleatorio)
