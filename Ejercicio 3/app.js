// adivinanza
// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

const h1 = document.getElementById('adivinanza');
const pato = document.getElementById('pato');
const mariposa = document.getElementById('mariposa');
const murcielago = document.getElementById ('murcielago');


const correcto = () => {
    const p = document.createElement('p');
    p.innerHTML = `¡CORRECTO!`;
    p.style.fontSize = '20px';
    h1.appendChild(p);
    murcielago.classList.add('verde');
}

const fallaste = () => {
    const p = document.createElement('p');
    p.innerHTML = `¡Le erraste!`;
    h1.appendChild(p);
    murcielago.classList.add('verde'); 
    pato.classList.add('rojo');
    mariposa.classList.add('rojo');
}

murcielago.addEventListener('click', correcto);
pato.addEventListener('click', fallaste);
mariposa.addEventListener('click', fallaste);