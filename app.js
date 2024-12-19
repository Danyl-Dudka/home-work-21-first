// Number 1 
const numbers = [];
const arrLength = parseInt(prompt("Enter the length of the desired array: "));
if (isNaN(arrLength) || arrLength <= 0) {
    alert("Please enter the correct value!")
} else {
    for (let i = 0; i < arrLength; i++) {
        let digit;
        do {
            digit = parseInt(prompt("Enter your digit: "));
            if (isNaN(digit) || digit < 0 || digit === "") {
                alert("Please enter the correct value!")
            }
        } while (isNaN(parseInt(digit)) || digit === "" || digit < 0);
        numbers.push(digit);
    }
}
document.write("Створений масив з довжиною та елементами користувача - " + numbers + ", " + "<br>");
const compareFn = function (a, b) {
    return a - b;
};

document.write("Відсортований масив за зростанням " + numbers.sort(compareFn) + ", " + "<br>");
numbers.splice(1, 3);
document.write("Масив з видаленими елементами - " + numbers + ", " + "<br>");

// Number 2
// 2 (a)
const secondArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPosElements = 0;
let count1 = 0;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] > 0) {
        sumPosElements += secondArr[i];
        count1++;
    }
}
document.write("Сума додатніх елементів в масиві буде дорівнювати = " + sumPosElements + "<br>");
document.write("Кількість додатних елементів масиву буде дорівнювати - " + count1 + "<br>");
// 2 (b)
const smallest = Math.min(...secondArr);
const smallestIndex = secondArr.indexOf(smallest);
document.write("Мінімальний елемент масива становить  " + smallest + " його порядковий індекс " + smallestIndex + "<br>");
// 2 (c)
const greatest = Math.max(...secondArr);
const greatestIndex = secondArr.indexOf(greatest);
document.write("Максимальний елемент масива становить  " + greatest + " його порядковий індекс " + greatestIndex + "<br>");
// 2 (d)
let negArrElements = 0;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] < 0) {
        negArrElements++;
    }
}
document.write("Кількість від’ємних елементів масива становить - " + negArrElements + "<br>");
// 2 (e)
let oddPosElem = 0;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] > 0 && secondArr[i] % 2 === 1) {
        oddPosElem++;
    }
}
document.write("Кількість непарних додатніх елементів масива становить - " + oddPosElem + "<br>");
// 2 (f)
let evenPosElem = 0;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] > 0 && secondArr[i] % 2 === 0) {
        evenPosElem++;
    }
}
document.write("Кількість парних додатніх елементів масива становить - " + evenPosElem + "<br>");
// 2 (g)
let sumOfEvenPosElements = 0;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] > 0 && secondArr[i] % 2 === 0) {
        sumOfEvenPosElements += secondArr[i];
    }
}
document.write("Сума парних додатніх елементів масива становить - " + sumOfEvenPosElements + "<br>");
// 2 (h)
let sumOfOddPosElements = 0;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] > 0 && secondArr[i] % 2 === 1) {
        sumOfOddPosElements += secondArr[i];
    }
}
document.write("Сума непарних додатніх елементів масива становить - " + sumOfOddPosElements + "<br>");
// 2 (i)
let multiplicationOfPosElements = 1;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] > 0) {
        multiplicationOfPosElements *= secondArr[i];
    }
}
document.write("Добуток всіх додатніх елементів масива становить - " + multiplicationOfPosElements + "<br>")
// 2 (j)
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] !== greatest) {
        secondArr[i] = 0;
    }
}
document.write("Змінив на 0 всі елементи окрім найбільшого - " +secondArr);