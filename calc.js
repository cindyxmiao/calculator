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
var hasSolution = false;
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
        if (hasSolution == true) {
            reset();
            displayText.textContent = input;
            hasSolution = false;
        }
        hasOperator === false? num1 = num1 + input: num2 = num2 += input;
        console.log('num1 is ' + num1);
        console.log('num2 is ' + num2);
    }
    else if (input == 'clear'){
        reset();

    }
    else if (input == '='){
        solution = operate (operator, Number(num1), Number(num2));
        reset()
        displayText.textContent = solution;
        num1 = solution;
        hasSolution = true;
    }
    //must be operator then
    else {
        if (hasOperator === false){
            hasSolution == true? hasSolution = false:hasSolution =false;
            operator = input;
            hasOperator = true;
        }
        else {
            num1 = operate (operator, Number(num1), Number(num2));
            operator = input;
            num2 = '';
        }
    }
}

const reset = function() {
    num1 = num2 = operator = '';
    hasOperator = false;
    displayText.textContent = '';
}

buttons.forEach((button)=> {
    button.addEventListener('click', function(e) {writeToDisplay(e, this);}, false);
});
