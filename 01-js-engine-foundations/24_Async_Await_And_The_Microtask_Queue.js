// // // // Example


// // // // Old Way:
// // // // fetchUser(1).then(user => console.log(user));

// // // // New Way (Async/Await):
// // // async function loadDashboard() {
// // //     try {
// // //         const user = await fetchUser(1); // PAUSES here until the buzzer rings!
// // //         console.log(user); 
// // //     } catch (error) {
// // //         console.log("Failed: " + error);
// // //     }
// // // }
// // // loadDashboard();



// // // Ex 1


// // console.log("1. Sync Script Start");

// // // Regular Queue (Macrotask)
// // setTimeout(() => {
// //     console.log("2. setTimeout finished");
// // }, 0);

// // // VIP Queue (Microtask)
// // Promise.resolve().then(() => {
// //     console.log("3. Promise resolved");
// // });

// // console.log("4. Sync Script End");


// // 1. Sync Script Start
// // 4. Sync Script End
// // 3. Promise resolved
// // 2. setTimeout finished


// // EX 2


// async function getNumber() {
//     return 99;
// }

// const result = getNumber();
// console.log(result); // Does this print '99' or 'Promise { <pending> }'?


// // output -> Promise { 99 }


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



async function initializeDumrooApp() {
    try {
        const user= await fetchUser(1);
        console.log(user.name);
    } catch (error) {
        console.log(error);
    }
}

initializeDumrooApp()