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

function askQuestion(question, answer) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) console.log('Right')
    else console.log('Wrong')
}

function clickPuzzle() {
    askQuestion('Зимой и летом одним цветом', 'елка');
    askQuestion('Сидит дед, во сто шубодет. Кто его раздевает, тот слезы проливает', 'лук');
}