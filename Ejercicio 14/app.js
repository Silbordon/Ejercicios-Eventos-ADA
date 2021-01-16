// color-aleatorio
// Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).

const generaNumero = (numero) => (Math.random() * numero).toFixed(0);

window.addEventListener('keypress', (e)=>{
    e.preventDefault();

    if(e.keyCode == 32 || e.code == "Space"){
        document.body.style.backgroundColor = `rgb(${generaNumero(255)}, ${generaNumero(255)}, ${generaNumero(255)})`;
        console.log(document.body.style.backgroundColor);
      
    }
})
    
    