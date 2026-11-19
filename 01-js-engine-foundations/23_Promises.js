// // // // The example 


// // // // 1. Creating the Promise (The Kitchen gives you a buzzer)
// // // const foodOrder = new Promise((resolve, reject) => {
// // //     let foodIsReady = true; // Pretend the kitchen succeeded

// // //     setTimeout(() => {
// // //         if (foodIsReady) {
// // //             resolve("🍔 Burger is ready!"); // Changes state to Fulfilled
// // //         } else {
// // //             reject("🔥 Kitchen caught fire!"); // Changes state to Rejected
// // //         }
// // //     }, 1000);
// // // });

// // // // 2. Consuming the Promise (Waiting for the buzzer)
// // // foodOrder
// // //     .then((food) => { console.log("Yay! " + food); })
// // //     .catch((error) => { console.log("Oh no. " + error); });



// // // Ex 1

// // console.log("Start");

// // const myPromise = new Promise((resolve) => {
// //     resolve("Secret Data"); 
// // });

// // myPromise.then((data) => {
// //     console.log(data);
// // });

// // console.log("End");


// // // start end secerect Data




// // EX 2


// Promise.resolve(10)
//     .then(num => num * 2)
//     .then(num => num + 5)
//     .then(finalNum => console.log("Final: " + finalNum));


// final 25



// Mini Project


function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ name: "Alice", role: "Admin" });
            }
            else {
                reject("User Not Found");
            }
        }, 2000)
    })
}


fetchUser(1)
    .then(userName => console.log(userName.name))
    .catch((error) => console.log(error))


fetchUser(2)
    .then(userName => console.log(userName.name))
    .catch((error) => console.log(error))