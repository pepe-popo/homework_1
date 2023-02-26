/*Создать класс данных “Товар”
С полями
Название
Цена
Количество
Описание
Наполнить массив объектами такого класса.
Написать метод, который получает строку вида
“name-contains-fd&price-=2&quantity->5&description-ends-abc”
“name-starts-fd&quantity-=5”
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)*/
import { getTestString, parseString } from "./utils_module.js";
import { dictionary } from './lorem.js'

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    /**
     * takes a string and an array of objects, filters it and returns an array with matching objects
     * 
     * @example
     * Product.filterProducts('name-contains-dolore&description-ends-nisi&price->150000&quantity-<=35', productArray)
     * @param {string} str string with conditions
     * @param {[]} arrOfproducts array of objects
     * @returns 
     */
    static filterProducts(str, arrOfproducts) {
        const methods = {
            contains: (prop, value) => prop.includes(value),
            starts: (prop, value) => prop.startsWith(value),
            ends: (prop, value) => prop.endsWith(value),
            "=": (prop, value) => prop == value,
            ">": (prop, value) => prop > value,
            "<": (prop, value) => prop < value,
            "<=": (prop, value) => prop <= value,
            ">=": (prop, value) => prop >= value
        }

        const parsed = parseString(str);
        const result = arrOfproducts
            .filter(product => parsed
                .every(arr => methods[arr[1]](product[arr[0]], arr[2])));
        return result;
    }


}

let productArray = [];

//Заполнение массива объектами(товарами). Лучше заполнить побольше, чтобы наверняка что-то найти 
//Используется функция из файла ./utils_module.js и массив слов из файла ./lorem.js
for (let i = 0; i < 100000; i++) {

    let name = getTestString(Math.floor(Math.random() * 4) + 1, dictionary);
    let description = getTestString(Math.floor(Math.random() * 11) + 5, dictionary);
    let price = Math.floor(Math.random() * 299499) + 500;
    let quantity = Math.floor(Math.random() * 100) + 1;

    productArray.push(new Product(name, price, quantity, description));
}

// пример использования. В статический метод класса первым аргументом передается строка запроса, а вторым аргументом массив с объектами который нужно отфильтровать по этой строке
// пример слов можно взять из файла ./lorem.js
console.table(Product.filterProducts('name-contains-dolore&description-ends-nisi&price->150000&quantity-<=35', productArray))
