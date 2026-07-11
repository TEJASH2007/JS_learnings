//Que : Write a JavaScript program to swap two variables.

let a = prompt("first variable");  // string
let b = prompt("second variable");  // string

// typeof(temp) = String;
let temp = a ;  

a = b;
b = temp;
console.log(`${a} ${b}`);