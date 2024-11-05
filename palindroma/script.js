// const userWord = prompt("Inserisci la parola");
const userWord = "ciao";
let result = "";
reverseString(userWord);
console.log(result); 

/**
 * Description placeholder
*
* @param {string} userWord
* @returns {string}
*/

// funzioni
function reverseString(userWord) {
    for (let i = userWord.length - 1; i >= 0; i--) {
        const curChar = userWord[i];
        result = result + curChar;
    }
    return result;
}

