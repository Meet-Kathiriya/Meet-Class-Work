// Event Loop

// Event Loop Defination :- the event loop in JS is a mechanism that manages how task are executed , including asynchronous tasks like API request and user interactions. it's a key part of JS's concurrency model.


// setTimeout

console.log("heloo 0");
console.log("heloo 1");
console.log("heloo 2");
console.log("heloo 3");
console.log("heloo 4");

setTimeout(() => {
    console.log("this is Web API");

}, 1000);

console.log("heloo 5");
console.log("heloo 6");
console.log("heloo 7");
console.log("heloo 8");
console.log("heloo 9");


// setInterval

const interval = setInterval(() => {
    console.log("Hellooo");
}, 1000)

setTimeout(() => {
    clearInterval("interval")
}, 3000);