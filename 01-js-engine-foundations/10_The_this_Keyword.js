// const user = {
//     name: "Alice",
//     greet: function() {
//         console.log("Hello, I am " + this.name);
//     }
// };

// // Look to the left of the dot! The object is 'user'. 
// // 'this' = user. 
// user.greet(); // Prints: "Hello, I am Alice"

// const stolenGreet = user.greet; // We copy the function out of the object.
// // Look to the left! There is NO dot! 
// // 'this' = Global Window.
// stolenGreet(); // Prints: "Hello, I am undefined



// EX 1


// const company = {
//     name: "Dumroo",
//     marketing: {
//         name: "Growth Team",
//         printName: function() {
//             console.log(this.name);
//         }
//     }
// };

// company.marketing.printName();

// // it will log "Growth Team" because 'this' refers to the marketing object, which has a name property with the value "Growth Team".



// EX 2

// const player = {
//     score: 100,
//     getScore: function() {
//         console.log("Score is: " + this.score);
//     }
// };

// const checkScore = player.getScore;
// checkScore();

// it will log "Score is: undefined" because 'this' refers to the global object (window in browsers), which does not have a score property. Therefore, this.score is undefined.



const userProfile = {
    username: "DevPro",
    updateStatus: function() {
        console.log(this.username + " is now online.");
    }
};

function simulateButtonClick(callback) {
    console.log("Button clicked!");
    callback(); // The function is called here!
}


// The interviewer passes the function as a callback:
simulateButtonClick(userProfile.updateStatus);



// Wrap userProfile.updateStatus inside an anonymous function (or just a regular function() {}) before passing it in, so that when it runs, the dot is preserved!

simulateButtonClick(function(){
    userProfile.updateStatus();
}); // this will log: "Button clicked!" followed by "DevPro is now online." 