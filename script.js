//three variables, one for each part of the operation
let operator;
let num1;
let num2;

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

console.log(add(2, 2, 2, 2));
console.log(subtract(5, 2, 1, 1));
console.log(multiply(2, 3, 2, 2));
console.log(divide(24, 2, 2, 2));
console.log("hello world");

function operate(number1, operator1, number2){

    if(operator1 === "+"){
        return add(number1, number2);

    } else if(operator1 === "-"){
        return subtract(number1, number2);

    } else if(operator1 === "*"){
        return multiply(number1, number2);

    } else if(operator1 === "/"){
        return divide(number1, number2);
    }

}

//Next session work on these
function updateNumber1(num){
num1 = num;
console.log(num1)
}

function updateDisplay(elm){
    document.querySelector(".display").textContent = elm;

}
updateDisplay()

//Event delegation for our buttons

const div = document.querySelector(".buttons");

//console.log("div: ", div)
div.addEventListener('click', event =>{
    const target = event.target;

    if(target.tagName === 'BUTTON'){
       // console.log(target.innerText);
        updateNumber1(target.innerText);
        updateDisplay(target.innerText);
    }
});

//we are getting somehwere so now when we click the numbers
//they can go to the update function but it's not only numbers that go
// it is all the buttons

//we need to find a way to only accept numbers or only send 
//numbers

//try to make the display work as well it must show numbers being clickes
//and also show the answer if possible
