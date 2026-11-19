// // // // // Example

// // // // console.log("1. Cashier takes first order.");

// // // // // The Cashier sees a Timer. They immediately send it to the Kitchen!
// // // // setTimeout(() => {
// // // //     console.log("2. Kitchen finished cooking.");
// // // // }, 0); // Even at 0 seconds, it MUST go to the Kitchen and the Waiting Area.

// // // // console.log("3. Cashier takes next order.");

// // // // // Output:
// // // // // "1. Cashier takes first order."
// // // // // "3. Cashier takes next order."
// // // // // "2. Kitchen finished cooking." 
// // // // // (The timer waits until the Cashier is done with all synchronous code!)



// // // //Ex 1


// // // console.log("A");

// // // setTimeout(() => {
// // //     console.log("B");
// // // }, 0);

// // // console.log("C");


// // // output=> A C B


// // // EX2


// // setTimeout(() => {
// //     console.log("Timer Finished");
// // }, 1000);

// // // We simulate a heavy math problem that takes 3 seconds for the Cashier to solve.
// // const start = Date.now();
// // while (Date.now() - start < 3000) {
// //     // Blocking the Call Stack for 3 full seconds!
// // }

// // console.log("Math Finished");


// // // output after 3 second print Math Finished then Timer FInished




// // Mini Project


// // BROKEN (Freezes the UI)
// function processHeavyData() {
//     console.log("Processing started...");
//     // Imagine this loop takes 5 seconds
//     for (let i = 0; i < 1000000000; i++) {} 
//     console.log("Processing finished.");
// }
// processHeavyData();
// console.log("UI is ready for clicks.");



// fix


// BROKEN (Freezes the UI)
function processHeavyData() {
    console.log("Processing started...");
    // Imagine this loop takes 5 seconds
   setTimeout(()=>{
     for (let i = 0; i < 1000000000; i++) {} 
    console.log("Processing finished.");
   },0);
}
processHeavyData();
console.log("UI is ready for clicks.");