/**
 * gets two numbers and returns their sum
 * 
 * @param {string} a
 * @param {string} b 
 */
export function sum(a, b) {
    let [topNum, botNum] = a.length > b.length ? [a, b] : [b, a];

    botNum = botNum.padStart(topNum.length, '0');

    topNum = topNum.split('');
    botNum = botNum.split('');

    let result = [];

    let tens = 0;
    for (let i = topNum.length - 1; i >= 0; i--) {
        let sum = +tens + +topNum[i] + +botNum[i];

        if (sum > 9) {
            tens = (sum + '')[0];
            sum = (sum + '')[1];
        } else {
            tens = 0;
        }

        result.push(sum)
    }

    +tens > 0 ? result.push(tens) : null;

    return result.reverse().join('')
}

/**
 * gets two numbers and returns their difference
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns 
 */
export function subtraction(a, b) {
    let sign;
    let numOne, numTwo;

    if (b.length > a.length || (b.length == a.length && b[0] > a[0])) {
        sign = '-';
        numTwo = a;
        numOne = b;
    } else {
        sign = '';
        numOne = a;
        numTwo = b;
    }

    numOne = numOne.padStart(numTwo.length, '0').split('');
    numTwo = numTwo.padStart(numOne.length, '0').split('');

    let result = [];

    for (let i = numTwo.length - 1; i >= 0; i--) {
        let diff = +numOne[i] - +numTwo[i];
        if (diff < 0) {
            for (let j = i - 1; j >= 0; j--) {
                if (numOne[j] > 0) {
                    numOne[j] = numOne[j] - 1;
                    break;
                } else {
                    numOne[j] = 9;
                }
            }
            diff = 10 + +numOne[i] - +numTwo[i];
        }
        result.push(diff)
    }

    return sign + result
        .reverse()
        .join('')
        .replace(/^0+(?!$)/, "");
}

/**
 * gets two numbers and returns the result of their multiplication
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns 
 */
export function multiply(a, b) {
    let result = [];

    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--) {

            let mul = a[i] * b[j] + (result[i + j + 1] || 0);

            result[i + j + 1] = mul % 10;

            result[i + j] = Math.floor(mul / 10) + (result[i + j] || 0);
        }
    }
    return result
        .join("")
        .replace(/^0+/, "") || "0";
}

/**
 * gets two numbers and returns the result of their division
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns 
 */
export function divide(a, b) {
    if (b == '0') return Infinity;

    let result = '';
    let remainder = 0;

    for (let i = 0; i < a.length; i++) {
        remainder = (remainder * 10 + +a[i]);
        let digit = Math.floor(remainder / b);
        result += digit;
        remainder -= digit * b;
    }

    return result
        .replace(/^0+(?!$)/, "");
}
