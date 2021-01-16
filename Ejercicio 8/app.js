// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px	orange

// let body = document.getElementById('body');
// let height = 0;
// document.body.height = `${height}px`;



// Funciono a medias

// const cambios = () =>{

//     if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <= 500){
//         body.classList.add('red');
//     } 

//     if 
//         (document.documentElement.scrollTop > 501 && document.documentElement.scrollTop <= 1000 ){
//             body.classList.add('green');  
//     }
//     if 
//         (document.documentElement.scrollTop > 1001 && document.documentElement.scrollTop <= 1500 ){
//             body.classList.add('blue');  
//     }

//     if 
//     (document.documentElement.scrollTop > 1501 && document.documentElement.scrollTop <= 2000 ){
//         body.classList.add('orange');  
// }


// }


// window.addEventListener('scroll', cambios);


// Respuesta de Ra :)
// window.onscroll = function (e){
//     let top = window.pageYOffset || document.documentElement.scrollTop;

//     if( top>=0 && top<=500){
//         document.body.style.backgroundColor = 'red';
//     }

//     if( top>=501 && top<=1000){
//         document.body.style.backgroundColor = 'green';
//     }
//     if( top>=1001 && top<=1500){
//         document.body.style.backgroundColor = 'blue';
//     }
//     if( top>=1501 && top<=2000){
//         document.body.style.backgroundColor = 'orange';
//     } 
// };


// Respuesta de Jonh
window.addEventListener('scroll', () =>{
    const body = document.getElementById('body');
    const tamañoScroll = 362
    // const tamanoPantalla = document.body.scrollHeight;
    const coordenada = window.scrollY + tamañoScroll;
    console.log(coordenada);
    if(coordenada <= 500){
      body.style.backgroundColor = 'red';
    } else if(coordenada > 500 && coordenada <= 1000){
      body.style.backgroundColor = 'green';
    } else if(coordenada > 1000 && coordenada <= 1500){
      body.style.backgroundColor = 'blue';
    } else {
      body.style.backgroundColor = 'orange';
    }
  });
  