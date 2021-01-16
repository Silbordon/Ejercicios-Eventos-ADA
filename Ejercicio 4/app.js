// paleta
// Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

const contenedor = document.getElementById('contenedor');

const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');
const azul = document.getElementById('azul');
const gris = document.getElementById('gris');
const naranja = document.getElementById('naranja');


rojo.addEventListener('click', (e) =>{
    contenedor.style.backgroundColor = 'red';
});

verde.addEventListener('click', (e) =>{
    contenedor.style.backgroundColor = 'green';
});

amarillo.addEventListener('click', (e) =>{
    contenedor.style.backgroundColor = 'yellow';
});

azul.addEventListener('click', (e) =>{
    contenedor.style.backgroundColor = 'blue';
});

gris.addEventListener('click', (e) =>{
    contenedor.style.backgroundColor = 'gray';
});

naranja.addEventListener('click', (e) =>{
    contenedor.style.backgroundColor = 'rgb(194, 114, 11)';
});