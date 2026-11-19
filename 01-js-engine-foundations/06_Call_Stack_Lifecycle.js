// EX 1: Trace the Plates

function stepOne() {
    console.log("Step 1 Starting...");
    stepTwo();
    console.log("Step 1 Finished.");
}

function stepTwo() {
    console.log("Step 2 Running.");
}

stepOne();


// my prediction of the output is:
// Step 1 Starting...
// Step 2 Running.
// Step 1 Finished.



// EX 2: Call Stack Lifecycle

function inception() {
    console.log("Dreaming...");
    inception();
}

inception();

// my prediction of the output is:
// Dreaming...
// Dreaming...
// untill the call stack overflows and we get a "RangeError: Maximum call stack size exceeded" error.


function loadDashboard() {
    console.log("3. Dashboard Loaded.");
}

function authenticateUser() {
    console.log("2. Authenticating User...");
    loadDashboard();
    console.log("User Auth Complete."); 
}

function connectDatabase() {
    console.log("1. Connecting to DB...");
    authenticateUser();
    console.log("DB Connection Complete.");
}

connectDatabase();



// here is my fixed code, where I moved the function calls to the end of each function, so that they are executed in the correct order:

function loadDashboard() {
    console.log("3. Dashboard Loaded.");
}

function authenticateUser() {
    console.log("2. Authenticating User...");
    console.log("User Auth Complete."); 
    loadDashboard();
}

function connectDatabase() {
    console.log("1. Connecting to DB...");
    console.log("DB Connection Complete.");
    authenticateUser();
}

connectDatabase();