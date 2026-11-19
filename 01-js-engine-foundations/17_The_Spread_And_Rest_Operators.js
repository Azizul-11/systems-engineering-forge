// // // --- SPREAD (The Exploder) ---
// // const oldTools = ["HTML", "CSS"];
// // const newTools = [...oldTools, "React", "Node"]; 
// // // Explodes oldTools into the new array. 
// // console.log(newTools); // ["HTML", "CSS", "React", "Node"]

// // // --- REST (The Collector) ---
// // function buildTeam(manager, ...workers) {
// //     console.log("Manager:", manager);
// //     console.log("Workers:", workers); // Packed into an array!
// // }
// // buildTeam("Alice", "Bob", "Charlie", "Dave"); 
// // // Manager = "Alice". Workers = ["Bob", "Charlie", "Dave"]



// //  EX 1

// const user = { name: "Sam", role: "Intern" };
// const promotedUser = { ...user, role: "Senior", salary: "100k" };

// console.log(promotedUser.role); // "Intern" or "Senior"?

// // The role will be "Senior" because the spread operator copies the properties of the user object into promotedUser, and then the role property is overwritten with the new value "Senior".


// // Ex 2

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...theRest] = numbers;

// console.log(theRest); // What does this print?

// // This will print [30, 40, 50] because the first two elements of the numbers array are assigned to first and second, and the rest of the elements are collected into theRest array using the rest operator.


// Mini Project

// BROKEN REACT CODE:
// const appState = { 
//     userId: 99, 
//     username: "DumrooFan", 
//     email: "old@mail.com" 
// };

// function updateEmail(newEmail) {
//     appState.email = newEmail; // React hates this!
//     return appState;
// }



// Fixed React Code:

const appState={
    userId: 99,
    username: "DumrooFan",
    email: "old@mail.com"
}

const updateEmail=(newEmail)=>{
    return {...appState, email:newEmail}
}

console.log(updateEmail("new@email.com"));