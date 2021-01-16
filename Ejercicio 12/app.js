// pin
// En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
// Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
// El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
// El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
// El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.

const reiniciar = document.getElementById('reiniciar');
const borrar = document.getElementById('borrar');
const texto = document.getElementById('texto');
const boton = document.getElementsByClassName('button');

for (let i=0 ; i< boton.length; i++){
    boton[i].addEventListener('click', ()=>{
        
    
        if(texto.innerHTML.length < 6){
            texto.innerHTML += boton[i].id;   
        }
    })
}

reiniciar.addEventListener('click' , ()=>{
    texto.innerHTML = '';
})


borrar.addEventListener('click', ()=>{
    texto.innerHTML = texto.innerHTML.slice(0,-1);
})
