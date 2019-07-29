'use strict';


const input = document.querySelector('input');
const guess = document.querySelector('.guess');
const text = document.querySelector('.text');
const number = document.querySelector('.counter');
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');

function write(addEventListener) {
    const add = addEventListener.currentTarget.value;
    btn.innerHTML = add;
}
function getRandomNumber(addEventListener) {
    const number = addEventListener.currentTarget.value;
    number.innerHTML = add;
}

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}

// Anda, chacho, píntame en la consola un número random hasta 100;
const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

function number() {
    counter++ , counterBox.innerHTML = counter
}
input.addEventListener('keyup', write)
btn.addEventListener('click', getRandomNumber)
counter.addEventListener('click', number)
