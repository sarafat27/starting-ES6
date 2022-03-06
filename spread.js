//spread operator brings the array elemments out
const numbers = [32, 45, 88, 23, 90];
// console.log(...numbers);
const max = Math.max(23, 5, 12);
const maxInArray = Math.max(...numbers);
// console.log(max,maxInArray);

const numbers2 = [77, ...numbers, 96];
numbers.push(75);
console.log(numbers, numbers2);