//Notes:--

// let score="12anc" //output value NuN
//let score="12" //output value 12
//let score=null //output value 0
//let score=undefined //output value NaN
//let score=true //output value 1
//let score=false //output value 0
let score="Nitish" //output value NaN
/*v
//We have 2 method for identify typeof values
console.log(typeof (score));
console.log(typeof score);
*/

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); 

  
//Notes:--

// let isLoggedIn = 1 return true
// let isLoggedIn = 0 return false
// let isLoggedIn = " " if space between the ("space") curly_braces the return true
// let isLoggedIn = "" retrun false
let isLoggedIn = "nitish" //retrun true

let booleanIs = Boolean(isLoggedIn)
// console.log(booleanIs)
//  node 03_conversionOperation.js
