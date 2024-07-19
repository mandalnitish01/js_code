// // Regular Javascript Function
// function sayHello(name) {
//     console.log(`Hello ${name}!`);
//   }
  
//   // Arrow Function
// //   () in this bracket you pass the arguement wather one or more then 2 
//   const sayHey = (name,age) => {
//     // console.log("hello ji!")
//     console.log(`Hey ${name}!`);
//     console.log(`Hey ${age}!`);
//   }
//   sayHey("nitish","34")
  

  // Using arrow function with map
//   const arr = "[1, 2, 3, 4, 5]";
  
// //   () in this bracket you basically pass the arguement
//   arr.map((ray) => {
//     console.log(ray);
//   });
  //here we have all threee types of function




//   template literals

// const firstname = 'show';
// const lastname = 'off';

// // Old way
// console.log('Hi ' + firstname + ' ' + lastname + '!');

// // Using template literals
// console.log(`Hi ${firstname} ${lastname}!`);


// higher order fun

// function shownum(num, newfun)
// {
//   console.log("first function called");
//   newfun(num);
// }
// // one way to shown
// // function showresult(result)
// // {
// //   console.log("resulting function called");
// // console.log(result);
// // }


// // another way to show the fun
// shownum(3, (val)=>{
//   console.log(val);
// });


 

// *************************************************************************************************
// Assignment 1



// Function decleration

// Task 1 chech number is even or odd by using function

// using normal function 
// function EvenOdd(num){
//   if(num % 2 == 0)
//   {
//     console.log(`${num} is even!`);
//   }
//   else{
//     console.log(`${num} is odd!`);
//   }
// }
// using Arrow function 
// const EvenOdd = (num)=>{
//   if(num % 2 == 0)
//     {
//       console.log(`${num} is even!`);
//     }
//     else{
//       console.log(`${num} is odd!`);
//     }
// } 
// let num = 90;
// EvenOdd(num);


// Task 2 Square of a number using a function
// const squarefun = (num) =>{
//   let result = num * num;
//   console.log(`the square of ${num} is ${result}`);
//   // console.log(num * num);
// }
// // let num = 2;
// squarefun(3);




// function expression
// TAsk 3
// const maximumnum = (num1,num2) =>{
//   if(num1 > num2)
//   {
//     console.log(`${num1} is greater then ${num2}!`)
//   }
//   else if(num1 == num2)
//   {
//     console.log(`${num1} is equal to ${num2}!`)
//   }
//   else{
//     console.log(`${num1} is Less then ${num2}!`)
//   }
// }
// maximumnum(5,5);


// Task 4 concat the string
// const concatfun = (str1, str2) =>{
//   // console.log(`my name is ${str1} ${str2}`) //using template litrels
//   // result = str1 +' '+ str2; using old method
//   // console.log(result);
// }

// let str1 = "Nitish";
// let str2 = "Mandal"
// concatfun(str1,str2);



// task 6 (doubtt)
// special charector finding

// const specialCharectorFind = (str) => {
//   console.log(`Given String is ${str}`);
//   for(let i = 0; i < str.length; i++) {
//     let ch = str.charCodeAt(i);
//     if(!(ch >= 65 && ch <= 90) &&
//        !(ch >= 97 && ch <= 122) && 
//        !(ch >= 48 && ch <= 57)) {
//         console.log(true);
//       console.log("It contains a special character!");
//       console.log(`The present charector code is ${ch}`);
      
//       return true;
//     }
//     else
//     {
//      console.log(false);
//   console.log("It does not contain a special character!");
//   return false;
//     }
//   }
// };

// let str = "NitishMandal";
// specialCharectorFind(str);


// Task 6

// function defaultparafun(name,age = 19){
//   console.log(name);
//   console.log(age);
//   // console.log("This is default parameter function");
// }
// defaultparafun("nitish");


// higher order function

// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.



// function higherOrderFunction(num,cb)
// {
//   console.log("higher order function called");
//   cb(num);
// }

// higherOrderFunction(2, function(result){
//   console.log(result);
// })



// task 7

// function TwoNumbers(num1,num2,newfunction)
// {
//   console.log(`first function called`);
//   console.log(`The first value is ${num1}`);
//   const result = num1 + num2;
//   newfunction(num2,result);
// }
// function showresult(num2,result){
//   console.log(`After higher order function called, The new function is execute`)
//   console.log(`the second number is ${num2}`);
//   console.log(`The sum of both  value is ${result}`);
// }
// TwoNumbers(3,5,showresult);


