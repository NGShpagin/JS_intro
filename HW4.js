// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:

for (let i = 0; i < 11; i++) {
    if (i === 0) console.log(`${i} - это ноль`);
    else if (i % 2 === 0) console.log(`${i} - четное число`);
    else console.log(`${i} - нечетное число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const newArr = [];
for (let i = 0; i < 5; i++) {
    newArr.push(Number(Math.random().toString().split("").pop()));
}
console.log(newArr);

let sum = 0;
let minNumber = newArr[0];
let isThree = false;
for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
    if (newArr[i] < minNumber) minNumber = newArr[i];
    if (newArr[i] === 3) isThree = true;
}
console.log(`Сумма всех чисел массива: ${sum}`);
console.log(`Минимальное число: ${minNumber}`);
console.log(`Есть ли в массиве цифра 3: ${isThree}`);

// Доп задание
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx

let string = "";
const array = [];

for (let i = 0; i < 20; i++) {
    //Вариант 1. Через строку
    string += "X"
    console.log(string)
    // Вариант 2. Через массива
    array.push("X");
    console.log(array.join(""));
}