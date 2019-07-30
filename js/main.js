'use strict';


const field = document.querySelector('input');//app__field
const containerCounter = document.querySelector('.zero');//app__counter
const numberZero = document.querySelector('.app__counter');//app__clue
const button = document.querySelector('.btn');//app__play

let counter = 0;
containerCounter.innerHTML = counter;


// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}

// Anda, chacho, píntame en la consola un número random hasta 100;
const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);








