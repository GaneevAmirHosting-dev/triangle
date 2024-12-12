let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.button');
div = document.querySelector('out');

button.onclick = function (){
    let b = +inputIn.ariaValueMax;
div.innerHTML = b;
}