// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

let chica = document.getElementsByClassName('chica');
let grande = document.getElementById('grande');



for (let i=0 ; i < chica.length; i++){
    chica[i].addEventListener('click', () =>{
        let src = chica[i].getAttribute('src');
        grande.setAttribute('src', src);
    })
  
}

