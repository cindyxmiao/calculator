function add(a,b){
    return (a+b);
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b){
    return a * b;
}

function divide (a,b){
    return a / b;
}



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

console.log(operate('*',5,3));