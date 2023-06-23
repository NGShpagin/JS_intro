/*
let age = Number(prompt('Сколько Вам лет?'));

function upAge() {
    return age + 5;
}

// Стрелочная функция

// const lvlUpAge = () => {
//     return age + 5;
// }

// Можно записать без return

const lvlUpAge = () => age + 5;


console.log(`Через 5 лет Вам будет ${lvlUpAge()}`)

function hello() {
    console.log('Hello function')
}

const sum = (param1, param2) => {
    return param1 + param2;
}

console.log(sum(2, 5));

const salary = (money) => {
    money = money * 0.87;
    return money * 0.75;
}

const userMoney = Number(prompt('Сколько ты зарабатываешь?'))

let moneyMonth = salary(userMoney)

console.log(`Для рсходо можно использовать ${salary(userMoney)}`);
console.log(`На еду желательно потратить не больше ${moneyMonth}`)

 */

// function askQuestion(question, answer) {
//     const userAnswer = prompt(question);
//     if (userAnswer.toLowerCase() === answer) console.log('Right')
//     else console.log('Wrong')
// }
//
// function clickPuzzle() {
//     askQuestion('Зимой и летом одним цветом', 'елка');
//     askQuestion('Сидит дед, во сто шубодет. Кто его раздевает, тот слезы проливает', 'лук');
// }


// let pass;
// let count = 0;
// do {
//     if (count >= 3) {
//         alert("Пароль не верный")
//     }
//     pass = Number(prompt("Введите пароль"));
//     count++;
// } while (pass !== 123)

//
// for (let count = 0; count <= 2; count++) {
//     pass = Number(prompt("Введите пароль"));
//     if (pass === 234) break;
//     if (count === 2) alert("Пароль не верный");
// }

const word = "example";
arrWord = word.split("");
console.log(arrWord);
console.log(arrWord.pop());

console.log(arrWord.join("").toUpperCase());