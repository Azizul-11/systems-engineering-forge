// // Ex1

// let superPower = "Fly";
// function activate() {
//     console.log(superPower);
// }
// activate();



// Ex 2

// var speed = 100;

// function race() {
//     console.log(speed);
//     let speed = 200;
// }

// race();



// Mini Project: App Crashing Monitoring System

function checkSystem() {
    let streamConfig;
    if (streamConfig === undefined) {
        console.log("System Status: Configuration is completely missing!");
    } else {
        console.log("System Status: Configuration loaded successfully.");
    }
    
     streamConfig = { format: "mp3", sampleRate: 44100 };
}
checkSystem();