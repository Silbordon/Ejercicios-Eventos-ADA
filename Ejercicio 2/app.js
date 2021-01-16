// contador
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

let total = document.getElementById('total');
let resultado = 0;
total.innerHTML = resultado;

let buttonMenos1 = document.getElementById('F-1');
let buttonMas1 = document.getElementById('F+1');
let buttonMenos5 = document.getElementById('F-5');
let buttonMas5 = document.getElementById('F+5');
let buttonMenos10 = document.getElementById('F-10');
let buttonMas10 = document.getElementById('F+10');


let menosUno = () => {
    resultado = Number(resultado) - 1;
    total.innerHTML = resultado;  
}

let masUno = () => {
    resultado = Number(resultado) + 1;
    total.innerHTML = resultado;  
}

let menosCinco = () => {
    resultado = Number(resultado) - 5;
    total.innerHTML = resultado;  
}

let masCinco = () => {
    resultado = Number(resultado) + 5;
    total.innerHTML = resultado;  
}

let menosDiez = () => {
    resultado = Number(resultado) - 10;
    total.innerHTML = resultado;  
}

let masDiez = () => {
    resultado = Number(resultado) + 10;
    total.innerHTML = resultado;  
}


buttonMenos1.addEventListener('click', menosUno);
buttonMas1.addEventListener('click', masUno);
buttonMenos5.addEventListener('click', menosCinco);
buttonMas5.addEventListener('click', masCinco);
buttonMenos10.addEventListener('click', menosDiez);
buttonMas10.addEventListener('click', masDiez);

//Resolucion con forEach-Jonh
// const buttons = document.getElementsByTagName('button');

// Array.from(buttons).forEach(buton => {
//   buton.addEventListener('click', () => {
//     console.log(buton.id);
//     count.innerHTML = parseInt(count.innerHTML) + parseInt(buton.id)
//   });
// });
