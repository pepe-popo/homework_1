/**
 * gets a number and array of words, then returns a string containing the specified number of words 
 * 
 * @example
 * getTestData(5);
 * //returns 'sit amet adipiscing elit ut'
 * @param {[]} dictionary array of words
 * @param {number} countWords number of words
 * @returns the number of words in a line is equal to the argument passed to the function
 */
export function getTestData(countWords, dictionary) {
    let str = '';
    for (let i = 0; i < countWords; i++) {
        str += dictionary[Math.floor(Math.random() * (dictionary.length - 1))] + ' ';
    }

    return str.trim();
}