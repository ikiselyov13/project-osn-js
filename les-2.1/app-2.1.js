'use strict';

let a = +prompt('Введите первое число');
let operation = prompt('Введите операцию');
let b = +prompt('Введите второе число');



/* function mathOperation(a, b, operation) {
    switch (operation) {
        case "сложение":
            function plus(a, b) {
                return a + b;
            }
            alert(plus(a, b));
            break;
    }
} */


/**
 * Функция складывает переданные параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function plus(a, b) {
    return a + b;
}

/**
 * Функция вычитает переданные параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function minus(a, b) {
    return a - b;
}

/**
 * Функция умножает переданные параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function mult(a, b) {
    return a * b;
}

/**
 * Функция делит переданные параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function div(a, b) {
    return a / b;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case "+":
            return plus(a, b);
        case "-":
            return minus(a, b);
        case "*":
            return mult(a, b);
        case "/":
            return div(a, b);
    }
}

alert(mathOperation(a, b, operation));



