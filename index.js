// Основы JavaScript

// ДЗ 1. Семинар. Знакомство с JavaScript

/*
// Задание 1.

let tempDeg = 19;
const tempFar = (9 / 5) * tempDeg + 32;

console.log(`Температура (в Цельсиях): ${tempDeg}
Температура (в Фаренгейтах): ${tempFar}`)

 */

/*
// Задание 2.

const userName = "Nikolay";
let admin = userName;
console.log(`Admin: ${admin}`)

 */

// Семинар 2. Знакомство с JavaScript

/*
// Задание 1

const yourAge = Number(prompt('Какой ваш возраст?', 'Введите возраст'));
alert(`Вам ${yourAge} лет`);

const yourName = prompt('Какое Ваше имя?', 'Введите имя');
alert(`Добро пожаловать на сайт, ${yourName}`);

 */

/* Типы данных:
- Number()
- Boolean()
- String()
- toString()
- parseFloat()
- parseInt()

// console.log(isNaN("5")); // false
// console.log(!isNaN("5")); //true
// console.log(Boolean(0)); // false
// console.log(String("5"));
// console.log(parseFloat("4.76"));
// console.log(parseInt("4.76")); // 4
// console.log(Math.round(4.76));
 */

// Задание 2

const a = 13;
const b = 5;
// console.log(a % b);

const inNum = 5;

// Вариант 1
if (inNum > 5) console.log(`Число '${inNum}' больше 5`);
else if (inNum < 5) console.log(`Число '${inNum}' меньше 5`);
else console.log(`Число '${inNum}' равно 5`);

// Вариант 2
console.log(
    (inNum > 5) ? `'${inNum}' > 5`
        : (inNum < 5) ? `'${inNum}' < 5`
            : `'${inNum}' = 5`)

// Вариант 3
switch (true) {
    case inNum > 5:
        console.log(`Число '${inNum}' больше 5`);
        break;
    case inNum < 5:
        console.log(`Число '${inNum}' меньше 5`);
        break;
    default:
        console.log(`Число '${inNum}' равно 5`);
        break;
}