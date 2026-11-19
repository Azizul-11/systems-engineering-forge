// // function createMultiplier(multiplier) {
// //     return function(number) {
// //         return number * multiplier;
// //     };
// // }

// // const double = createMultiplier(2);
// // const triple = createMultiplier(3);

// // console.log(double(5));
// // console.log(triple(5));



// function createCounter() {
//     let count = 0;
//     return function() {
//         count = count + 1;
//         console.log(count);
//     };
// }

// const myCounter = createCounter();
// myCounter();
// myCounter();



function idGeneratorMaker(){
    let currentId=100;
    return function(){
        currentId=currentId+1;
        return currentId;
    }
}

const getNewId=idGeneratorMaker();
console.log(getNewId());
console.log(getNewId());
console.log(getNewId());