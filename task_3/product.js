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
import { getTestData } from "./getTestData_module.js";
import { dictionary } from './lorem.js'

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    static filterProducts(str) {

    }

    #parseString(str) {

    }
}

let productArray = [];

//Заполнение массива объектами(товарами)
//Используется функция из файла ./getTestData_module.js и массив слов из файла ./lorem.js
for (let i = 0; i < 1000; i++) {

    let name = getTestData(Math.floor(Math.random() * 4) + 1, dictionary);
    let description = getTestData(Math.floor(Math.random() * 11) + 5, dictionary);
    let price = Math.floor(Math.random() * 299499) + 500;
    let quantity = Math.floor(Math.random() * 100) + 1;

    productArray.push(new Product(name, price, quantity, description));
}

console.table(productArray)