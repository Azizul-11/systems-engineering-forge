// // // // The Modern Way (ES6 Class)
// // // class Player {
// // //     // This replaces 'function Player(name)'
// // //     constructor(name) {
// // //         this.name = name;
// // //         this.score = 0;
// // //     }

// // //     // You don't have to type Player.prototype anymore! 
// // //     // JS automatically puts this on the DNA Backup.
// // //     login() {
// // //         console.log(this.name + " logged in.");
// // //     }
// // // }

// // // const p1 = new Player("Alice");
// // // p1.login();



// // // Ex 1


// // class Startup {
// //     constructor(name) {
// //         this.name = name;
// //     }
// // }

// // // If 'class' is just a fake mustache, what is its actual data type under the hood?
// // console.log(typeof Startup);


// // // The constructor() { } method: This is the exact same thing as the Blueprint function from Phase 5.2. It runs instantly when you use new.


// // Ex 2

// class Database {
//     constructor(dbName) {
//         this.dbName = dbName;
//     }
// }

// // I forgot the 'new' keyword!
// const myDb = Database("Users"); 
// // Does this silently pollute the Window like Phase 5.2, or does it crash?


// // The Upgrades: If you forget to use new with a class, it doesn't pollute the global Window; it throws a massive error to protect you.




class DumrooUser{
    constructor(username){
        this.username=username;
    }

    getPlan(){
        console.log(this.username + " Free Plan");
        
    }
}

class PremiumUser extends DumrooUser{
    constructor(username){
        super(username)
        this.storage = "100GB";
    }

    downloadVideo(){
        console.log(this.username + " is downloading a video using " + this.storage);
    }
}

const pro = new PremiumUser("Charlie");
pro.getPlan(); 
pro.downloadVideo(); 

