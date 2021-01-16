// playlist
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada


// const cancionUno = prompt('Ingrese la primer cancion');
// const cancionDos = prompt('Ingrese la segunda cancion');
// const cancionTres = prompt('Ingrese la tercer cancion');
// const cancionCuadtro = prompt('Ingrese la cuarta cancion');
// const cancionCinco = prompt('Ingrese la quinta cancion');

// const lista = document.getElementById('lista');
// const li = document.createElement('li');
// li.innerHTML = cancionUno;
// li.innerHTML = cancionDos;
// li.innerHTML = cancionTres;
// li.innerHTML = cancionCuadtro;
// li.innerHTML = cancionCinco;

// lista.appendChild(li);


let cancion = '';
const lista = document.getElementById('lista');

const myfunction = (cancion) => {
    const li = document.createElement('li');
    li.innerHTML = cancion;
    lista.appendChild(li);
   };

   
for (let i= 0 ; i<5; i++){
    cancion = prompt ('Ingrese la' + (i + 1) + 'canción');
    myfunction (cancion);
}

