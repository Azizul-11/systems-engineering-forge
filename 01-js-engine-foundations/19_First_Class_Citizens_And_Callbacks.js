// // // // 1. The Worker (Callback)
// // // const makeUppercase = (text) => text.toUpperCase();

// // // // 2. The Boss (Higher Order Function)
// // // function processNames(nameArray, workerFunction) {
// // //     let results = [];
// // //     for (let i = 0; i < nameArray.length; i++) {
// // //         // The Boss hands the data to the Worker
// // //         let changedName = workerFunction(nameArray[i]); 
// // //         results.push(changedName);
// // //     }
// // //     return results;
// // // }

// // // const students = ["alice", "bob"];
// // // // We pass the Worker into the Boss (Notice there are NO parentheses after makeUppercase! We pass the function itself, we don't execute it).
// // // console.log(processNames(students, makeUppercase)); // ["ALICE", "BOB"]




// // function greet(name) {
// //     console.log("Welcome, " + name);
// // }

// // function authUser(user, callback) {
// //     console.log("Authenticating " + user + "...");
// //     callback(user);
// // }

// // authUser("Admin", greet);


// // // greet is a callback and authUser is a HOF




// // EX 2


// function doMath(a, b, mathWorker) {
//     return mathWorker(a, b);
// }

// // We invent the worker directly inside the arguments!
// const total = doMath(10, 5, (x, y) => x - y);
// console.log(total);


// // output -> 5



// mini project


// The React Button (This is the HOF / The Boss)
function Button(label, onClickCallback) {
    console.log("Rendering button: [" + label + "]");
    
    // Simulating a user clicking the button 2 seconds later:
    setTimeout(() => {
        console.log("--- User clicked [" + label + "] ---");
        // CALL THE WORKER HERE!
        onClickCallback();
    }, 2000);
}


Button("checkout", ()=> {
    console.log("Processing Payment")
});

