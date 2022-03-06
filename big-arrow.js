const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(13, 9, 2);

const square = (num) => num * num;
const output = square(13);
//if parameter quantity is 1,then there is no need to give bracket
const qube = num => num * num * num;
const answer = qube(4);
//if there is no parameter
const getname = () => 'Arafat sunny';
const name = getname();
//if there are multilines in return part
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const value = doMath(8, 5)
console.log(value);