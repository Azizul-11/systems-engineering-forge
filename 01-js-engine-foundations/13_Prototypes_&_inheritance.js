// // const animal = {
// //     eats: true
// // };

// // const rabbit = {
// //     jumps: true
// // };

// // // We manually link the rabbit's DNA to the animal's DNA:
// // rabbit.__proto__ = animal; 

// // console.log(rabbit.jumps); // Prints: true (Found on the rabbit itself)
// // console.log(rabbit.eats);  // Prints: true (Not on rabbit! It followed the DNA link to animal)



// // ex1

// const machine = { isOn: true };
// const laptop = { isOn: false };

// laptop.__proto__ = machine;

// console.log(laptop.isOn); // What prints? Does it use its own value or the parent's?

// // it will print false because it find the false in itself





const userBase={
    getPlan: function() { return "Free"; } 
}


const user1 = { name: "Alice" };
user1.__proto__=userBase;


console.log(user1.getPlan())

const user2 = { name: "Bob" };

user2.__proto__=userBase;

console.log(user2.getPlan())