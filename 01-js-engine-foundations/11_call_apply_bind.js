// // // const user = { name: "Alice" };

// // // function introduce(language, role) {
// // //     console.log(`I am ${this.name}, a ${role} writing ${language}.`);
// // // }

// // // // 1. call (C is for Comma) - Runs immediately
// // // introduce.call(user, "JavaScript", "Engineer"); 

// // // // 2. apply (A is for Array) - Runs immediately
// // // introduce.apply(user, ["Python", "Data Scientist"]); 

// // // // 3. bind (Builds a new copy) - Does NOT run immediately
// // // const lockedIntroduce = introduce.bind(user); 
// // // lockedIntroduce("C++", "Intern"); // We call it later!



// // // Ex 1

// // const premiumUser = {
// //     plan: "Gold",
// //     printPlan: function() {
// //         console.log("Plan: " + this.plan);
// //     }
// // };

// // const freeUser = { plan: "Basic" };

// // premiumUser.printPlan.call(freeUser); // Look closely at the Puppeteer!




// // // Ex 2


//  const server = {
//     status: "Online",
//     getStatus: function() {
//         console.log("Server is " + this.status);
//     }
// };

// // We glue the nametag on permanently:
// const safeGetStatus = server.getStatus.bind(server);

// // Now we run it without a dot:
// safeGetStatus();




// Mini Project


const enterpriseCust = {
    name: "TechCorp",
    discount: 20,
    calculateTotal: function(cartValue) {
        return cartValue - (cartValue * (this.discount / 100));
    }
};

const total=enterpriseCust.calculateTotal(100); // Using the method directly
console.log("Enterprise Total: $" + total);

const startupCust = {
    name: "Dumroo",
    discount: 10
};


// Using call to borrow the method
const startupTotal = enterpriseCust.calculateTotal.call(startupCust, 100); // Using call to borrow the method


const startupTotal2= enterpriseCust.calculateTotal.apply(startupCust, [100]);

console.log("Startup Total: $" + startupTotal);
console.log("Startup Total: $" + startupTotal2);