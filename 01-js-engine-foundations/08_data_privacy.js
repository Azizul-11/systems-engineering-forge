// // function setupGame() {
// //     let score = 0;
    
// //     return function() {
// //         score++;
// //         console.log("Score is: " + score);
// //     };
// // }

// // const playGame = setupGame();
// // playGame();
// // score = 999; // <--- What happens here? Does it change the game's score?
// // playGame();



// function createBankAccount() {
//     let balance = 1000; // The protected money (Inside the Vault)

//     // The Bank Teller (Inner Function)
//     return {
//         deposit: function(amount) {
//             balance = balance + amount;
//             console.log("Deposited. New balance: " + balance);
//         },
//         getBalance: function() {
//             return balance;
//         }
//     };
// }



// const accountOne = createBankAccount();
// const accountTwo = createBankAccount();

// accountOne.deposit(100); 
// console.log(accountTwo.getBalance()); // What does accountTwo print?




// Practice


function createTranscriber(apiKey){
    return function(audioFile){
        console.log("Using key: " + apiKey + " to transcribe " + audioFile);
    }
}


const transcribeAudio = createTranscriber("gsk_12345secretKey");

transcribeAudio("meeting.mp3");