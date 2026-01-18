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