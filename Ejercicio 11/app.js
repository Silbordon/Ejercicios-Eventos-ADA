// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.



    const generoTerror = document.getElementById('generoTerror');
    const generoCienciaFiccion = document.getElementById('generoCienciaFiccion');
    const generoComedia = document.getElementById('generoComedia');

    const terror = document.getElementById('terror');
    const cienciaFiccion = document.getElementById('cienciaFiccion');
    const comedia = document.getElementById('comedia');
    const todos = document.getElementById('todos');


    terror.addEventListener('click', ()=>{
        generoCienciaFiccion.classList.add('none');
        generoComedia.classList.add('none');
    })

    cienciaFiccion.addEventListener('click', ()=>{
        generoTerror.classList.add('none');
        generoComedia.classList.add('none');
    })

    comedia.addEventListener('click', ()=>{
        generoCienciaFiccion.classList.add('none');
        generoTerror.classList.add('none');
    })

    todos.addEventListener('click', ()=>{
        generoCienciaFiccion.classList.remove('none');
        generoComedia.classList.remove('none');
        generoTerror.classList.remove('none');
    })