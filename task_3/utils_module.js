/**
 * gets a number and array of words, then returns a string containing the specified number of words 
 * 
 * @example
 * getTestString(5);
 * //returns 'sit amet adipiscing elit ut'
 * @param {[]} dictionary array of words
 * @param {number} countWords number of words
 * @returns a string with the specified number of words
 */
export function getTestString(countWords, dictionary) {
    let str = '';
    for (let i = 0; i < countWords; i++) {
        str += dictionary[Math.floor(Math.random() * (dictionary.length - 1))] + ' ';
    }

    return str.trim();
}

/**
 * takes a string and parses it into an array of substrings
 * 
 * @example
 * parseString('name-contains-fd&price-=2&quantity->5&description-ends-abc');
 * 
 * ┌─────────┬───────────────┬────────────┬───────┐
 * │ (index) │       0       │     1      │   2   │
 * ├─────────┼───────────────┼────────────┼───────┤
 * │    0    │    'name'     │ 'contains' │ 'fd'  │
 * │    1    │    'price'    │    '='     │  '2'  │
 * │    2    │  'quantity'   │    '>'     │  '5'  │
 * │    3    │ 'description' │   'ends'   │ 'abc' │
 * └─────────┴───────────────┴────────────┴───────┘
 * @param {string} str string like “name-starts-fd&quantity-=5”
 * @returns {[][]}
 */
export function parseString(str) {
    return str.split('&')
        .map(arr => arr.split('-'))
        .map(arr => {
            if (arr.length == 3) return arr;

            return [arr[0], arr[1].replace(/[0-9]/g, ''), arr[1].replace(/[=<>]/g, '')]
        })
}