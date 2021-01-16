// favoritos
// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

let img = document.getElementsByTagName('figure');
let favorito = document.getElementById('nuevo');


for (let i = 0; i< img.length; i++){
    img[i].addEventListener('click', ()=>{
        favorito.innerHTML += img[i].innerHTML;
        const favoritosChild = favorito.children;
        for (let index =0; index<favoritosChild.length; index++){
            favoritosChild[index].classList.add('borrar');
        }
    })

}

window.addEventListener('click', (e)=>{
        if(e.target.classList.contains('borrar'))
        e.target.style.display = 'none';
    });
    
