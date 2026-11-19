// // // console.log( 100 == "100" );
// // // console.log( 100 === "100" );



// // let cart1 = [];
// // let cart2 = [];

// // console.log( cart1 === cart2 );




// let userA = { id: 1 };
// let userB = userA;

// console.log( userA === userB );




// The Mini-Project: The URL Parameter Bug
// The Scenario:
// You are building the user profile page for your startup.
// When a user clicks a link to edit their profile, the URL looks like this: dumroo.ai/users/5.
// Your code grabs that 5 from the URL. Because it comes from a URL, JavaScript reads it as a String: "5".
// However, inside your database, the user's ID is stored as a Number: 5.


urlId = "5";
databaseId = 5;

function verifyUser(urlId, databaseId) {
    if (Number(urlId) === databaseId) {
        return "Access Granted!";
    } else {
        return "Access Denied!";
    }
}

console.log( verifyUser(urlId, databaseId) );