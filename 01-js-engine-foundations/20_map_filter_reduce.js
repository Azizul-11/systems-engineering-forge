// // // const numbers = [1, 2, 3, 4];

// // // // 1. MAP (Multiply by 10)
// // // const tens = numbers.map(num => num * 10);
// // // console.log(tens); // [10, 20, 30, 40]

// // // // 2. FILTER (Keep only even numbers)
// // // const evens = numbers.filter(num => num % 2 === 0);
// // // console.log(evens); // [2, 4]

// // // // 3. REDUCE (Add them all up. 'total' is the snowball, 'num' is the current item, 0 is the starting size of the snowball)
// // // const sum = numbers.reduce((total, num) => total + num, 0);
// // // console.log(sum); // 10



// // // Ex1:

// // const users = ["Alice", "Bob"];
// // // This is exactly how you generate HTML lists in React!
// // const htmlList = users.map(user => "<li>" + user + "</li>");
// // console.log(htmlList);


// // EX: 2


// const words = ["hi", "", "hello"];
// const validWords = words.filter(word => word); 
// console.log(validWords);





// Mini Project

// const dumrooUsers = [
//     { name: "Alice", plan: "Free", price: 0 },
//     { name: "Bob", plan: "Premium", price: 15 },
//     { name: "Charlie", plan: "Premium", price: 15 }
// ];


// const premiumUsers= dumrooUsers.filter(user=> user.plan=="Premium");

// console.log(premiumUsers);


// const totalRevenue=premiumUsers.map(user=> user.price);

// console.log(totalRevenue);



// const totalRevenueReduce=totalRevenue.reduce((total, num)=> total+num, 0)

// console.log(totalRevenueReduce);


// BETTER APPROACH USING CHANING

const dumrooUsers = [
    { name: "Alice", plan: "Free", price: 0 },
    { name: "Bob", plan: "Premium", price: 15 },
    { name: "Charlie", plan: "Premium", price: 15 }
];

const total=dumrooUsers
.filter(user=> user.plan==="Premium")
.map(user=> user.price)
.reduce((sum, num)=> sum+num, 0);

console.log(total);
