let arr = ["apple", "banana", "grapes"]


// Pass by refrence 


let arr2 = arr;

arr.pop()

console.log(arr);
console.log(arr2);


// Pass by value


let a = 15
let b = a

a = 35

console.log(a);



// let name = "meet";

// console.log(name.split("").reverse().join(" "));