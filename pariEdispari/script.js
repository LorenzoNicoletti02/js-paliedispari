
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

function evenodd (numToCheck) {
    let result = "dispari";
    IF (numToCheck % 2 === 0) {
        result = "pari";
    }
    return result;
}

