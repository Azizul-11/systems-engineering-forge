// // // const user = {
// // //     name: "Alice",
// // //     // 1. Regular Function (Gets its own nametag from the dot)
// // //     regularGreet: function() {
// // //         console.log("Regular: " + this.name);
// // //     },
// // //     // 2. Arrow Function (Ghost! Looks outside the 'user' object to the Global Playroom)
// // //     arrowGreet: () => {
// // //         console.log("Arrow: " + this.name);
// // //     }
// // // };

// // // user.regularGreet(); // Prints: "Regular: Alice"
// // // user.arrowGreet();   // Prints: "Arrow: undefined" (The Global Playroom has no name!)



// // // Ex1


// // const videoPlayer = {
// //     title: "JS Tutorial",
// //     play: function() {
// //         // 'this' is videoPlayer right now.
// //         setTimeout(() => {
// //             console.log("Playing: " + this.title); // What does the ghost see?
// //         }, 1000);
// //     }
// // };

// // videoPlayer.play();



// // EX2


// const car = { brand: "Ford" };

// const getBrand = () => {
//     console.log(this.brand);
// };

// // We try to force the nametag using the Puppeteer:
// getBrand.call(car); // What prints? "Ford" or "undefined"?




// Mini Project


const sessionWidget = {
    timeLeft: 60,
    startTimer: function() {
        // The junior dev used a regular function inside setInterval!
        setInterval(()=> {
            this.timeLeft--;
            console.log("Time left: " + this.timeLeft);
        }, 1000);
    }
};

sessionWidget.startTimer();