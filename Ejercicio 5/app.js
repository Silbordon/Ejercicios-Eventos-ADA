// email (sin leer)
// Crear un documento html que tenga:

// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

let li = document.getElementsByTagName('li');
console.log(li);

const marcado = (e) => {
    e.target.classList.add('leido');
}


for ( let i =0; i< li.length; i++){
    li[i].addEventListener('click', marcado)
};




