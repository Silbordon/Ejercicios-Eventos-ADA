// adivinar-numero
// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
// si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
// si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"
// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)

const mensaje =  document.getElementById('mensaje');
const reiniciar = document.getElementById('reiniciar');

const numeroAleatorio = () => (Math.random() * 9).toFixed(0);
let valorNumeroRandow = numeroAleatorio();

window.addEventListener('keypress', (e)=>{
const valorIngresado = e.key.valueOf();
 
if(valorIngresado>= 0 && valorIngresado<=9 ){

    if(valorIngresado > valorNumeroRandow){
        mensaje.innerHTML = `El numero es mas chico. Numero ingresado: ${valorIngresado}`;
    } else if (valorIngresado < valorNumeroRandow){
        mensaje.innerHTML = `El numero es mas grande. Numero ingresado: ${valorIngresado};`
    } else{
        mensaje.innerHTML = `ADIVINASTE. Numero ingresado: ${valorIngresado}`
    };
} else{
    alert('Presiona solo teclas numericas');
}
})


reiniciar.addEventListener('click', ()=>{
    valorNumeroRandow = numeroAleatorio();
    mensaje.innerHTML = `Nueva partida, presione un numero`;
})