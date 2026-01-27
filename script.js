//variables, one for each part of the operation
let operator = null;
let num1 = null;
let num2 = null;
let userNumbers1 = [];
let result;

//add, subtract, multiply and divide function
function add(...num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
       sum += num[i]; 
    }
    return sum;
}

function subtract(...num){
    let result = num[0];
    for(let i = 1; i < num.length; i++){
        result -= num[i];
    }
    return result;
}

function multiply(...num){
    let factor = num[0];
    for(let i = 1; i < num.length; i++){
        factor *= num[i];
    }
    return factor;
}

function divide(...num){
    let division = num[0];
    for(let i = 1; i < num.length; i++){
        division /= num[i];
    }
    return division;
}

//fucntion dealing with the calculations
function operate(number1, operator1, number2){

    // Convert strings to real numbers here
    const n1 = Number(number1);
    const n2 = Number(number2);
    

    if(operator1 === "+"){
        return add(n1, n2);
    } else if(operator1 === "-"){
        return subtract(n1, n2);
    } else if(operator1 === "x"){
        return multiply(n1, n2);
    } else if(operator1 === "/"){
        return divide(n1, n2);
    }
}





//Fucntion dealing with num1 and num2
function updateNumber1(num){

const number = Number(num)

if(!isNaN(number)){
    userNumbers1.push(number)
    let glued = userNumbers1.join('');
        // If no operator has been picked, we are still building num1
        if (operator === null) {
            num1 = glued;
    } else {
            // If an operator exists, we are building num2
            num2 = glued;
    }
}
}


//RECEIVING THE OPERATOR
function updateOperator(receivedOperator){
    operator = receivedOperator;
    // START AFRESH we clear the temporary array for the second number
    userNumbers1 = []; 
}


function updateDisplay(){

//Displays '' only if contentToShow is strictly null or undefined.
let displayNum1 = num1 ?? ''; 
let displayOperator = operator ?? ''; 
let displayNum2 = num2 ?? ''; 

document.querySelector(".display").textContent = displayNum1 + displayOperator + displayNum2; 
}
updateDisplay()




//Event delegation for our buttons
const div = document.querySelector(".buttons");


div.addEventListener('click', event => {
    const target = event.target;
    if (target.tagName !== 'BUTTON') return;

    const value = target.innerText;

    if (!isNaN(value)) {
        // 1. Update the numbers
        updateNumber1(value);
        console.log("num1:", num1, "num2:", num2);
    } else if (value === "AC") {
        // 2. Handle Clear 'AC'
        num1 = null;
        num2 = null;
        operator = null;
        userNumbers1 = []; // Clears the array too
    } else if (value === "=") {
        // 3. Handle Calculation
        if (num1 !== null && num2 !== null && operator !== null) {
             result = operate(num1, operator, num2);
            console.log("Result:", result);
            
            // IMPORTANT: Usually you want the result to become the new num1
            num1 = result;
            num2 = null;
            operator = null;
            userNumbers1 = [result]; // Reset helper array with the result
        }
    } else {
        // 4. Handle Operators (+, -, *, /)
        updateOperator(value);
        console.log("Operator:", operator);
    }

    updateDisplay();
});
