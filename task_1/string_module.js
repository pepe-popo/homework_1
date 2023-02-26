/**
 * gets a string and converts it to lowercase, but the first letter is uppercase
 * 
 * @param {string} str 
 */
export function myToLowerCase(str) {
    return str[0]
        .toUpperCase() + str.slice(1)
            .toLowerCase();
}

/**
 * gets a string and removes excess spaces
 * 
 * @param {string} str 
 */
export function fixSpaces(str) {
    return str.split(' ') // пробелы конвертируются в пустые строки
        .filter(char => char) // пустые строки съедаются фильтром
        .join(' ')
        .replace(' ,', ',')
        .replace(' .', '.');
}

/**
 * calculates the number of words in a string
 * 
 * @param {string} str 
 * @returns {number} the number of words in a line
 */
export function howManyWords(str) {
    return str.replaceAll(/[.,!?-]/g, '')
        .split(' ')
        .filter(char => char)
        .length;
}

/**
 * counts the number of unique words in a string and outputs a table of results
 * 
 * @param {string} str 
 */
export function uniqueWords(str) {
    let result = { 'кол-во повторений': {} }

    let arrayWords = str.replaceAll(/[.,!?-]/g, '')
        .toLowerCase()
        .split(' ');

    for (let word of arrayWords) {
        result['кол-во повторений'].hasOwnProperty(word) ?
            result['кол-во повторений'][word]++
            : result['кол-во повторений'][word] = 1;
    }

    console.table(result); // Вообще можно вернуть сам объект, а дальше уже как надо его обработать, но пусть будет так
}