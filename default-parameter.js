//when there are more parameter than arguments
function add(num1, num2 = 67) {
    //1st way
    /* if(num2==undefined){
        num2=0;
    } */
    //2nd way  
    // num2=num2||0;
    const total = num1 + num2;
    return total;
}
const result = add(56);

//another exmpl
function fullName(first, last = 'Hossain') {
    const name = first + ' ' + last;
    return name;
}
const output = fullName('sarafat',);
console.log(output);


