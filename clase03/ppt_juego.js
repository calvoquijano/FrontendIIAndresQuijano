let opcionUsuario = parseInt(prompt("Ingresa una opción: 1 -Piedra, 2-Papel, 3-Tijera"));
let opcionMaquina = parseInt(Math.random() * 3 + 1)
let resultadoPartida = "No han jugado";
if (opcionMaquina === opcionUsuario){
    resultadoPartida = "Empate"
}
else if (opcionUsuario === 1){
    if (opcionMaquina === 2){
        resultadoPartida = "Perdiste"
    }
    else if (opcionMaquina === 3){
        resultadoPartida = "Ganaste"
    }
}
else if (opcionUsuario === 2){
    if (opcionMaquina === 1){
        resultadoPartida = "Ganaste"
    }
    else if (opcionMaquina === 3){
        resultadoPartida = "Perdiste"
    }
}
else if (opcionUsuario === 3){
    if (opcionMaquina === 1){
        resultadoPartida = "Perdiste"
    }
    else if (opcionMaquina === 2){
        resultadoPartida = "Ganaste"
    }
}

alert("La máquina eligió: "+opcionMaquina + "\nTú elegiste: " + opcionUsuario + "\nY este es el resultado: " + resultadoPartida);

function obtenerNumeroAlAzar(){
    return parseInt(Math.random()*3+1);
}


