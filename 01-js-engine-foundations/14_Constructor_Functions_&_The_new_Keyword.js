// // // // 1. The Blueprint
// // // function Player(name) {
// // //     // Secret Step 1 & 2: this = {}
// // //     this.name = name; 
// // //     this.score = 0;
// // //     // Secret Step 4: return this;
// // // }

// // // // We attach the shared function to the Blueprint's DNA Backup ONCE.
// // // Player.prototype.login = function() {
// // //     console.log(this.name + " logged in.");
// // // };

// // // // 2. Pressing the Magic Button
// // // const player1 = new Player("Alice"); 
// // // player1.login(); // Prints: "Alice logged in." (Found via the automatic DNA link!)




// // // EX 1

// // function Car(model) {
// //     this.model = model;
// // }

// // // I forgot to type 'new'!
// // const myCar = Car("Mustang"); 

// // console.log(myCar); // What is myCar?
// // console.log(window.model); // Wait, what happened here?!


// function Robot(name) {
//     this.name = name;
// }
// const bot = new Robot("R2D2");

// // Does the bot's secret DNA link match the Blueprint's prototype?
// console.log(bot.__proto__ === Robot.prototype); // true or false?










function DumrooUser(username){
    this.username=username;
}

DumrooUser.prototype.getPlan=function(){
    console.log(this.username+" Free plan");
}

const user1=new DumrooUser("Alice");
user1.getPlan();
const user2=new DumrooUser("Bob");
console.log(user2.username);
