// const userWord = prompt("Inserisci la parola");
const userWord = "ciao";
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
    let result = "";
    for (let i = userWord.lenght - 1; i >= 0; i--) {
        const curChar = userWord[i];
        result = result + curChar;
    }
    return result;
}

