// // // Example

// // let score = 10;

// // // ❌ IMPURE (Changes an outside variable!)
// // function addBonusBad() {
// //     score = score + 5; 
// // }

// // // ❌ IMPURE (Mutates the original array passed in!)
// // function addPlayerBad(teamArray, player) {
// //     teamArray.push(player); 
// //     return teamArray;
// // }

// // // ✅ PURE (Does not touch 'score'. Just returns a new number based on input)
// // function addBonusGood(currentScore) {
// //     return currentScore + 5;
// // }

// // // ✅ PURE (Uses the Spread Operator to return a brand new array)
// // function addPlayerGood(teamArray, player) {
// //     return [...teamArray, player]; 
// // }


// // //Ex1

// // function getGreeting(name) {
// //     return "Hello " + name;
// // }

// // Pure Function, because it's not mutating anything


// // Ex2

// let totalItems = 0;
// function addToCart(price) {
//     totalItems++;
//     return price + 10;
// }

// // ImPure Function Because it's mutating the totalItems variable




// // BROKEN (Impure - Mutates the original array)
// function addTask(todoList, newTask) {
//     todoList.push(newTask);
//     return todoList;
// }


function addTask(todoList, newTask) {
    return [...todoList, newTask];
}

const todayTasks = ["Learn JS", "Learn React"];
const newTasks = addTask(todayTasks, "Get Hired");