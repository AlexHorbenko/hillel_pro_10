const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1. Знайти суму та кількість позитивних елементів.

function countAndSum(array) {
    const result = {sum: 0, count: 0};
    array.forEach((number) => {
        if (number > 0) {
            result.sum += number;
            result.count += 1 // count++; // count = count + 1
        }
    })
    return result
};
console.log(countAndSum(array));


// 2. Знайти мінімальний елемент масиву та його порядковий номер.
let minNumber = Math.min(...array);
console.log(minNumber);
console.log(array.indexOf(minNumber));


// 3. Знайти максимальний елемент масиву та його порядковий номер.
let maxNumber = Math.max(...array);
console.log(maxNumber);
console.log(array.indexOf(maxNumber));


// 4. Визначити кількість негативних елементів.
function negativeCount(array) {
    let count = 0;
    array.forEach((number) => {
        if (number < 0) {
            count += 1
        }
    })
    return count;
};
console.log(negativeCount(array));


// 5. Знайти кількість непарних позитивних елементів.
function unpairedPositiveCount(array) {
    let count = 0;
    array.forEach((number) => {
        if (number % 2 === 1 && number > 0) {
            count += 1
        }
    })
    return count;
};
console.log(unpairedPositiveCount(array));


// 6. Знайти кількість парних позитивних елементів.
function pairedPositiveCount(array) {
    let count = 0;
    array.forEach((number) => {
        if (number > 0 && number % 2 === 0) {
            count += 1
        }
    })
    return count;
};
console.log(pairedPositiveCount(array));


// 7. Знайти суму парних позитивних елементів.
const result1 = array.reduce(function (sum, number) {
    if (number > 0 && number % 2 === 0) {
        return sum + number;
    }
    return sum;
}, 0);
console.log(result1);


// 8. Знайти суму непарних позитивних елементів.
const result2 = array.reduce(function (sum, number) {
    if (number > 0 && number % 2 !== 0 ) {
        return sum + number;
    }
    return sum;
}, 0);
console.log(result2);


// 9. Знайти добуток позитивних елементів.
const result3 = array.reduce(function (mult, number) {
    if (number > 0) {
        return mult * number;
    }
    return mult;
}, 1);
console.log(result3);


// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
    const maxNumberArray = Math.max(...array);
    // console.log(maxNumberArray);
    // console.log(array.indexOf(maxNumber));
    const newArray = array.map(v => v == maxNumberArray ? v : 0);
    console.log(newArray);