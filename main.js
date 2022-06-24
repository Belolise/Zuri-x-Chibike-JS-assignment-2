const number1 = parseFloat(prompt('Enter a number'));
const operator = prompt('Enter an operand (+, -, *, /)');
const number2 = parseFloat(prompt('Enter  second number'));

let result;

if (operator === "+"){
    result = number1 + number2
}else if (operator === "-"){
    result = number1 - number2
}else if (operator === '*'){
    result = number1 * number2
}else if (operator === "/"){
    result = number1 / number2
}else{
    prompt("input a valid operator")
}

alert("the answer is:" +result);