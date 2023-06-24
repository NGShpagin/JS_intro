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

// const word = "example";
// arrWord = word.split("");
// console.log(arrWord);
// console.log(arrWord.pop());
//
// console.log(arrWord.join("").toUpperCase());

const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0,
    engineStarted: false,
    startEngine: function () {
        this.engineStarted = true;
    },
    stopEngine: function () {
        this.engineStarted = false;
    },
    haveRoadTrip: function (distance) {
        if (this.engineStarted) this.odometer += distance;
        else alert("Engine is off");
    }
}

const product = {
    name: "Table",
    price: 2000,
    count: 2,
    userRegister: true,
    register: function () {
        this.userRegister = true;
    },
    countProduct: function () {
        if (product.count > 0) console.log("Вы купили данный товар");
        else console.log("Товара нет в наличии")
    },
    buyProduct: function () {
        if (this.userRegister) console.log("ТОвар добавлен");
        else console.log("Пользователь не зарегистрирован");
    }
}

console.log(product);

product.description = "Product description";

console.log(product);

delete product.description;

console.log(product);

let productSale = product;

productSale.price = 1500;

console.log("Sale: " + productSale);
console.log("Product: " + product)

const object = {
    1: "Ivanov",
    2: "Petrov",
}

// const students = object.map((student) => `student: ${student}`);
console.log(Object.values(car));


const studentPracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Sidorov",
        practiceTime: 149
    },
    {
        firstName: "Belkin",
        practiceTime: 28
    },
    {
        firstName: "Avdeev",
        practiceTime: 168
    }
]


// Без reduce
let totalTime = 0;
for (let index = 0; index < studentPracticeTime.length; index++) {
    totalTime += studentPracticeTime[index].practiceTime;
}
console.log(totalTime);

// some
const studentBelkin = studentPracticeTime.find((student) => {
    return student.firstName === "Belkin";
})


const array = [1, 2, 3, 10, 15]

// map
const arrayMap = array.map(item => item * 2);
console.log(arrayMap);

// filter
const arrayFilter = array.filter(item => item >= 10);
console.log(arrayFilter);

// some
const arraySome = array.some(item => item >= 10);
console.log(arraySome);

// reduce
const arrayReduce = array.reduce((a, b) => a + b);
console.log(arrayReduce);