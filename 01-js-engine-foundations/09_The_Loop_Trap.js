// // // // // The Example

// // // // // THE TRAP: Using var
// // // // for (var i = 1; i <= 3; i++) {
// // // //     setTimeout(function() {
// // // //         console.log("var loop:", i); 
// // // //     }, 1000); 
// // // // }
// // // // // 1 second later, it prints: 4, 4, 4 
// // // // // (Wait, 4? Yes! The loop stopped when i became 4, so the final scoreboard says 4!)



// // // // Ex1:  Modern Fix

// // // for (let j = 1; j <= 3; j++) {
// // //     setTimeout(function() {
// // //         console.log("let loop:", j);
// // //     }, 1000);
// // // }



// // // Ex2 No Timer

// // for (var k = 1; k <= 3; k++) {
// //     console.log("Instant loop:", k);
// // }



// // Mini Project


// const users = ["Alice", "Bob", "Charlie"];

// function sendWelcomeEmails() {
//     for (var i = 0; i < users.length; i++) {
//         setTimeout(function() {
//             console.log("Sending email to: " + users[i]);
//         }, 1000);
//     }
// }

// sendWelcomeEmails();


// // Fixing the Mini Project

const users = ["Alice", "Bob", "Charlie"];

function sendWelcomeEmails() {
    for (let i = 0; i < users.length; i++) {
        setTimeout(function() {
            console.log("Sending email to: " + users[i]);
        }, 1000);
    }
}

sendWelcomeEmails();