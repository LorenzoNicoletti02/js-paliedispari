const userChoice = prompt("Scegli fra pari e dispari");
const userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log(userChoice, userNumber);

const computerNumber = getrandomInt (1, 5);

const sum = userNumber + computerNumber;

console.log(computerNumber, sum);

const sumResult = evenOdd(sum);
console.log(sumResult);

if(userChoice === sumResult) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}


/**
 * Description placeholder
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function getrandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}


/**
 * Description placeholder
 *
 * @param {number} numToCheck
 * @returns {string}
 */

function evenOdd (numToCheck) {
    let result = "dispari";
    if (numToCheck % 2 === 0) {
        result = "pari";
    }
    return result;
}

