let numeroSecreto;
let numeroSecretoMaximo = 10;
let intentos;
let listaNumerosSorteados = [];

//Funcion para modificar los elementos de HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroSecretoMaximo)+1;

    console.log('El número secreto es: ' + numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroSecretoMaximo) {
        asignarTextoElemento('p','Ya se han asignado todos los números posibles.')
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Funcion para el botón de intento.
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario > numeroSecretoMaximo) {
        asignarTextoElemento('p', `Favor insertar un número entre 1 y ${numeroSecretoMaximo}.`);
        limpiarCaja();
    } else {
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Felicidades, acertaste el número secreto en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor.');
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor.');
            }

            intentos++;
            limpiarCaja();
        }
    }
    return;
}

//Todo lo que sale una vez se refresque la pagina
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Coloca un número entre el 1 y el 10.');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinicarJuego() {
//Limpiar la caja
limpiarCaja();
//Indicar mensaje de intervalo de números
//Generar el número aleatorio
//Iniciar el número de intentos
condicionesIniciales();
//Deshabilitar el botón de nuevo juego
document.getElementById('reiniciar').setAttribute('disabled','true');
}


function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
    return;
}




condicionesIniciales();