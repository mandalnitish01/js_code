
// node 01_Basics/09_Number_Maths.js


const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString().length)
// console.log(balance.toFixed(2));


const  numdred = 1000000
// note:- by default tolocalstring return value accot=rding to UserActivationbut when you use in brecket('en-in') then they return accourding to indian counting

// console.log(numdred.toLocaleString());
// console.log(numdred.toLocaleString('en-in'));



// **********Maths in js*********

// let math = -3;
// console.log(Math);
// console.log(Math.abs(-4));
// note:- Math.round()

// The Math.round() static method returns the value of a number rounded to the nearest integer.
// console.log(Math.round(4.7));


console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor((Math.random()*10)) + 1)

const min=1;
const max=6;
//This formula is used in the dice in ludo

console.log(Math.floor(Math.random() * (max-min+1))+min);
