//return es una funcion de las GPP. 
//return reemplaza el let numeroSecreto = ..ya que se declara fuera de la funcion.

let numeroSecreto = 0; // condicionesIniciales(); le asignará luego bien el numero, solo para declarar.
let intentos = 0;  // condicionesIniciales(); le asignará luego bien el numero, solo para declarar.
let listaNumerosSorteados = []; // almacena los nuemros para no repetir el numero sorteado.
let numeroMaximo = 10;

condicionesIniciales();









function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // asignamos nombre 


console.log(listaNumerosSorteados); // trampa
console.log(numeroGenerado);  //trampilla

//si ya se terminaron los numeros
if(listaNumerosSorteados.length == numeroMaximo) {

asignarTextoElemento('p', 'Ya se acabaron todos los números posibles del juego, bye'); 

} else {

                // verificar si el numero generado esta incluido en la lista ...=Si. No-> jugar al toke.
                if(listaNumerosSorteados.includes(numeroGenerado)) {  // si ya esta en la lista pido otro y otro ...
                                                    
                return generarNumeroSecreto(); 

                } else {  // si no esta en la lista a jugar al toke y se debe guardar en la lista
                listaNumerosSorteados.push(numeroGenerado);
                 return numeroGenerado;
                }

            }
}







console.log(numeroSecreto);  // trampa






// h1 y p son elementos y se asigna el texto. 
// funcion válida si se declara fuera de los bloques o llaves. Hoisting.

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}






// input del usuario al juego.

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){             // condicion del juego, inicio del if
            asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos===1) ? "intento" : "intentos"}!`);
    
            //El usuario acierta, activo el boton del nuevo juego
    document.getElementById('reiniciar').removeAttribute('disabled');

        }else{  //el usuario no acertó
                  
            if(numeroDeUsuario > numeroSecreto) { 
                asignarTextoElemento('p','El número es menor');
            } else {
                asignarTextoElemento('p','El número es mayor');
            }
            intentos++;
                limpiarCaja();

    }  // fin del if else
    return;
}  // fin de la funcion






function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
}






function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número oculto');
    asignarTextoElemento('p', `Ingresar un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}







function reiniciarJuego() {

// limpiar caja
   limpiarCaja();
// indicar mensaje intervalos 1 a numeroMaximo
// generar el numero secreto aleatorio
// iniciar el contador de intentos 
   condicionesIniciales();
// deshabilitar el boton del nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
// #significa iD
//.setAtribute indicar atributo y un valor

}




