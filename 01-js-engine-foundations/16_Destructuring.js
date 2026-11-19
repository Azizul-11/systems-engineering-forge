// // // // Example

// // // // --- OBJECT DESTRUCTURING ---
// // // const intern = { name: "Dev", role: "Backend", tool: "Node" };

// // // // We wrap the variables in { } to tell JS: "Open the object!"
// // // const { role, name } = intern; 
// // // console.log(role); // Prints: "Backend" (Order didn't matter, exact name did!)

// // // // --- ARRAY DESTRUCTURING ---
// // // const techStack = ["React", "Express", "MongoDB"];

// // // // We wrap the variables in [ ] to tell JS: "Open the array!"
// // // const [frontend, backend] = techStack; 
// // // console.log(frontend); // Prints: "React" (Order matters, name is invented!)



// // // Ex 1

// // const company = { title: "Dumroo", active: true };
// // const { title, funding } = company;

// // console.log(funding);


// // // it's undefined because the property 'funding' does not exist in the 'company' object.


// // // Ex 2
// const servers = ["AWS", "GCP", "Azure"];
// const [, , cloudThree] = servers;

// console.log(cloudThree);


// // // it prints "Azure" because we skipped the first two elements in the array and assigned the third element to the variable 'cloudThree'.



// OLD WAY: 
// function UserProfile(props) {
//     console.log("Rendering profile for: " + props.user.username);
//     console.log("Theme is: " + props.theme);
// }

// const mockProps = { 
//     user: { username: "Alice", id: 1 }, 
//     theme: "Dark Mode" 
// };

// UserProfile(mockProps);



// New Way:

function UserProfile({ user, theme }) {
    console.log("Rendering profile for: " + user.username);
    console.log("Theme is: " + theme);
}

const mockProps={user: {username: "Alice", id: 1}, theme: "Dark Mode"};

UserProfile(mockProps);