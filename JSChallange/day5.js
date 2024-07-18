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



// task 6 (doubt)
// special charector finding

// const specialCharectorFind = (str) =>{
//   console.log(`Given String is ${str}`);
//  for(let i = 0; i<= str.length;i++)
//  {
//   let ch = str.charCodeAt(i);
//   console.log(ch);
//   if( !(ch >=65 && ch<=90) &&
//       !(ch >=97 && ch<=122) && 
//       !(ch >=48 && ch<=57)
//     )
//   {
//     return console.log("it  Contain a Special charector!");
//     console.log(true);
//   }
//  } 
// //  console.log("it does not contain a special charector!")                                      
// }
// let str = "Nitish$Mandal"
// specialCharectorFind(str);
