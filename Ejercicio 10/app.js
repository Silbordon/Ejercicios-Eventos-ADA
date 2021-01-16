// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.

let chica = document.getElementsByClassName('chica');
let grande = document.getElementById('grande');



for (let i=0 ; i < chica.length; i++){
    chica[i].addEventListener('mouseover', () =>{
        let src = chica[i].getAttribute('src');
        grande.setAttribute('src', src);
    })
  
}

