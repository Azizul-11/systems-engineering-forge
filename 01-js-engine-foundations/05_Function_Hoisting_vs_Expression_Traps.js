// // EX 1: Function Hoisting


// startCar();
// startBike();

// function startCar() {
//     console.log("Vroom!");
// }

// var startBike = function() {
//     console.log("Ring ring!");
// };






// // NEW, BROKEN CODE:
// processPayment();

// const processPayment = () => {
//     console.log("Payment of $50 processed.");
// };

// the fix with arrow function is to move the function declaration above the call, like this:

const processPayment = () => {
    console.log("Payment of $50 processed.");
}

processPayment();
