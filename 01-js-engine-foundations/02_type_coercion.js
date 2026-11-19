// Ex 1 -> String Lover

console.log(2+2+"2"); // 42
console.log("2"+2+2); // 222


// EX 2 -> strict Math Teacher


console.log("10" - 2);
console.log("10" * "2");




// Thruty and Falsy Values

let userName = "";
let userAge = 0;
let userCart = [];

if (userName) console.log("Has Name");
if (userAge) console.log("Has Age");
if (userCart) console.log("Has Cart");



// Mini Project Balance Adder


function addBalance(balance){
    return Number(balance)+50;
}


console.log(addBalance(100));
console.log(addBalance("100"));
