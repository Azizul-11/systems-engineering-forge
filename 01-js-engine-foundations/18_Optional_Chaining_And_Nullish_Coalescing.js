// // // The Example

// // const user = { name: "Alice", score: 0 }; 
// // // Note: user.address is completely missing!

// // // THE CRASH:
// // // console.log(user.address.city); // 💥 CRASH! Cannot read 'city' of undefined

// // // THE SAFETY NET (?.):
// // console.log(user.address?.city); // Prints: undefined (No crash!)

// // // THE STRICT BACKUP (??):
// // // If we used || here, Alice's score of 0 would trigger the backup. We don't want that!
// // const finalScore = user.score ?? 100; 
// // console.log(finalScore); // Prints: 0 (Because 0 is not null/undefined)



// // EX1 

// const company = { 
//     ceo: { name: "Steve" } 
// };
// // We try to find the CTO's name
// console.log(company.cto?.name);

// // Output: Undefined (No crash! Because company.cto is undefined, so the optional chaining operator prevents the error and returns undefined )


// // Ex2

// let playerVolume = 0; // 0 means muted.

// const volumeA = playerVolume || 50; 
// const volumeB = playerVolume ?? 50;

// console.log(volumeA); // What prints?
// console.log(volumeB); // What prints?

// // output: VolumeA 50, And VolumeB 0


// Mini Project


const users = [
    { name: "Alice", profile: { twitter: "@alice" } },
    { name: "Bob" }, // Missing profile!
    { name: "Charlie", profile: {} } // Has profile, missing twitter!
];

// // BROKEN CODE:
// for (let user of users) {
//     console.log(user.profile.twitter); // CRASHES ON BOB!
// }



for(let user of users){
    console.log(user.profile?.twitter ?? "No Twitter Provided");
    
}