//const variable can be updated if it is an array
const numbers = [45, 83, 73, 32];
numbers.push(53);
numbers[2] = 75;
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
}
console.log(sum);

const student = { Name: 'sunny', roll: 1626058, dept: 'cse' };
student.Name = 'sarafat';
