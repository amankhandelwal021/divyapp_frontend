// function sum(a, b) {
//     return a + b;
// }

// let sum;

// sum = 2;

// sum = "Ezee"

// let name = "Ezee";
// console.log("name", name);

// name = "Aman"
// console.log("name", name);

// addition(2, 3);

// const addition = (a, b) => {
//     return a + b;
// }

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// setInterval(() => {
//     console.log("Ezee");
// }, 2000);
// _____________________________________________________________________________________

// const myFun = (a, b, ...manyMoreArgs) => {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs);
// };

// myFun("one", "two", "three", "four", "five", "six");

// __________________________________________________________________

// const array = [34, 21, 65, 23, 76, 67];
// const array2 = [34, 21, 63];

// console.log("array", array);

// array.push(21);

// console.log("array", array);
// console.log("array", array.length);

// let new_array = array.concat(array2);
// console.log("new_array", new_array);

// let new_array2 = [...array, ...array2];
// console.log("new_array", new_array2);

// console.log("new_array", array.reverse());
// console.log("new_array", array.sort());

// let temp = array.sort((a, b) => b - a);
// console.log("temp", temp);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2, 3);
// console.log("citrus", citrus);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.splice(1, 2);
// console.log("citrus", citrus);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const fruits_string = fruits.join(" ");
// console.log("fruits_string", fruits_string);

// const fruits_pop = fruits.pop();
// console.log("fruits_pop", fruits_pop);
// console.log("fruits_pop", fruits);

// const new_name = "Aman Khandelwal, this is javascript & jQuery";

// let temp = new_name.substring(2, 6);
// console.log("temp", temp);

// let temp = new_name.replaceAll("a", "e");
// console.log("temp", temp);

// let temp = new_name.split("");
// console.log("temp", temp);

// const func = (a, b) => {
//    const inner_func = (b, c) => {
//         return b + c;
//     }
// }

// const array = [34, 21, 65, 23, 76, 67];

// array.forEach((item, index, array) => {
//     console.log("item", item);
//     console.log("index", index);
//     console.log("array", array);
// });

// let temp = array.map((item, index) => {
//    return item - 10;
// });

// console.log("temp", temp);


// let temp = array.filter((item, index) => {
//     return item > 50;
// });

// console.log("temp", temp);

// const result = array.reduce((total, item, index, arr) => {
//     return total + item;
// }, 10);

// console.log("result", result);   

// let number = 20;

// if (number == 20) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (number === 20) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// _______________________________________________________________________________________

const array = [34, 21, 65, 23, 76, 67];

// const result = array.reduce((total, item, index, arr) => {
//     return total + item;
// }, 0);

const addition = (ezee) => {
    let sum = 0;
    // for (let i = 0; i < ezee.length; i++) {
    //     sum += ezee[i];
    // }
    // return sum;

    ezee.forEach((item, index) => {
        sum += item;
    });

    return sum;
}

// let result = addition(array);
// console.log("result", result);




