const buttons = document.querySelectorAll('button');
var displayText = document.querySelector('#displayText');

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;


var num1 = '';
var num2 = '';
var operator;
var hasOperator = false;
var solution;


function operate(operator,a,b){
    var answer;
    switch(operator){
        case '+':
            answer = add(a,b);
            break;
        case '-':
            answer = subtract (a,b);
            break;
        case '*':
            answer = multiply (a,b);
            break;
        case '/':
            answer = divide (a,b);
            break;
    }
    return answer;
}

function writeToDisplay(e, current){
    input = current.id;
    inputType = current.className;
    displayText.textContent += `${input}`;
    runCalculator(input, inputType);
}


function runCalculator(input, inputType){

    if (inputType ==='number'){
        hasOperator === false? num1 = num1 + input: num2 = num2 += input;
        console.log('num1 is ' + num1);
        console.log('num2 is ' + num2);
    }
    else if (input == 'clear'){
        num1 = num2 = operator = '';
        hasOperator = false;
        displayText.textContent = '';

    }
    else if (input == '='){
        solution = operate (operator, Number(num1), Number(num2));
        displayText.textContent = solution;
        hasOperator = false;
        num1 = solution;
        num2 = '';
        operator = '';
    }
    //must be operator then
    else {
        operator = input;
        hasOperator = true;
    }
}

buttons.forEach((button)=> {
    button.addEventListener('click', function(e) {writeToDisplay(e, this);}, false);
});
