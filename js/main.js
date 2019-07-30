'use strict';


const field = document.querySelector('input');
const containerCounter = document.querySelector('.zero');
const numberZero = document.querySelector('.app__counter');
const button = document.querySelector('.btn');

let counter = 0;
containerCounter.innerHTML = counter;



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}


const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);









