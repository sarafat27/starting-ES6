function getName(first, last = "hossain") {
    return first + ' ' + last;
}
const roll = 1626058;
//template string
const myIntro = `My name is ${getName('arafat')} and my roll is ${roll}`;
console.log(myIntro);

const getName2 = (first, second) => first + " " + second;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const first = x + y;
    const second = x * z;
    const result = first + second;
    return result;
}

const numbers = [23, 78, 56, 43];
const min = Math.min(...numbers);
console.log(min);