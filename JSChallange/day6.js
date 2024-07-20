// // Array notes
// // console.log("hello world!")

// const arr = ["1","2","3","4","5"];

// console.log(arr);
// Array(5) [ "1", "2", "3", "4", "5" ]

// undefined
// arr.charAt(3);

// 2
// arr.at(2)
// "3"
// arr.pop(0)
// "5"
// arr.length
// 4
// arr.push("nitish")
// 5
// console.log(arr)
// Array(5) [ "1", "2", "3", "4", "nitish" ]

// 2
// arr.shift()
// "1"
// arr.length
// 4
// arr.unshift()
// 4
// arr.unshift(3)
// 5
// console.log(arr)
// Array(5) [ 3, "2", "3", "4", "nitish" ]

// arr.toString()
// "3,2,3,4,nitish"

// console.log(arr)
// Array(5) [ 3, "2", "3", "4", "nitish" ]

// arr.at(0)
// 3
// let leng = arr.length
// undefined
// let len = arr.length()

// arr.at(arr.length - 1)
// "nitish" 



//forEach, map, filter, find, indexof.

// #foreach:-

// var arr = [1,2,3,4];
// arr.forEach(function(val) //arrow function (val)=>{ return val }
// {
//     // console.log(val + "Hello");
//     console.log(val + " Hello");
// })

// apne array me jo value hai, usse har ek element pr chalana hai or function ko return krnana hai wo value jo mere given array me hai.



// #map:-


// var arr = [1,2,3,4];
//  var newarr = arr.map(myfunction)
// function myfunction(val)
// {
//     return val*3; /*/output:- [ 3, 6, 9, 12 ]
// }
// console.log(newarr);
// var arr = [1,2,3,4];
//  var newarr = arr.map(function(val){
//     // return val; //output:- [1,2,3,4]
//     // return val*3; //output:- [ 3, 6, 9, 12 ]
//     // return 13; //output:- [ 13, 13, 13, 13 ]
// })
// console.log(newarr);


// change into string 

// let first = newarr.toString();
// console.log(first);
// in map, aapko hamesha new array return milta hai or jbb aap map use karte hai tbb aapke jitne size ka  new array create ho jata hai new array ko store kra sakte hai.



//#filter:-

// var arr = [1,2,3,4];
//  var newarr = arr.filter(function(val){
//     if(val >= 3) //you put the condition in () this box
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(newarr);

//  in filte, aap filtring karte hai kesi array me se kuch nikalna hai tb use karte hai
// when filter is used then, when size of your original array is less then the old array then we use a filter function.



// #find:-

// var arr = [1,2,3,4];
// var ans = arr.find(function(val)
// {
//     if(val === 2) // === is strict equality  comparison OR == IS only check vlaue equality
//     {
//         return val;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);
//in find function(), it is just like a filter . here you find any value in your array.

// #indexOf:-
// it is used to find in array the user is present or not.
// var arr = [1,2,3,4];
// arr.indexOf(2)

// #object:-
// var obj ={
//     name: "nitish",
//     age: 40,
// }
// Object.freeze(obj);
// obj.age = 19;

// #function:-
// ** find length of the function = function_name.length
// function name(a, b, c, d) {}

// console.dir(name)
// ƒ name(a,b,c,d)
// arguments
// :
// null
// caller
// :
// null
// length
// :
// 4
// name
// :
// "name"









// ********************* notes end 



// task 1

// const arr = ["1","2","3","4","5"];
// console.log(arr);

// task 2

// const arr = ["1","2","3","4","5"];
// let firstindex = arr.at(0);
// let lastindex = arr.at(arr.length - 1);
// console.log(`First index Element is ${firstindex} and last index Element is ${lastindex}`);

// task 3

// const arr = ["1","2","3","4","5"];
// let result = arr.push(6)
// console.log(`Our new array after push/add the value at the end of the array that is ${result}`)
// console.log(arr);


// task 4
// let popresult = arr.pop();
// console.log(`Our new array after popping/remove the last value that is ${popresult}`)
// console.log(arr);

// task 5
// const arr = ["1","2","3","4","5"];
// let shiftresult = arr.shift();

// // shift is used to remove first element of the arr
// // and pop is used to remove last element of the given array 
// console.log(shiftresult);
// console.log(arr);

// output 
// 1
// [ '2', '3', '4', '5' ]

// note:-
// let newarr = arr.slice(1,3);
// console.log(`New array after slicing is ${newarr}`);


// task 6
// const arr = ["1","2","3","4","5"];
// let unshiftresult = arr.unshift();

// // unshift is used to acces the last element of the given array and give the old array after doing unshift();
// console.log(unshiftresult);
// console.log(arr);


// task 7

// const oldArray = ["1","2","3","4","5"];
// const newArray = oldArray.map(mapfunction);
// function mapfunction(element){
//     return element*2;
// }
// console.log(newArray) //output:- [ 2, 4, 6, 8, 10 ]

// task 8
// const Array = ["1","2","3","4","5","6"];
// first way 
// const newarray = Array.filter(function(num)
// {
//     if(num % 2 == 0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// second way 

// const newarray = Array.filter(normalfun)
// function normalfun(num){
//     if(num % 2 == 0)
//     {
//         console.log(`${num} is even number!`)
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(`All filtered even number is : ${newarray}`);
// console.log(`Array form of filtered even number is:`,newarray)
// // let result = newarray.toString();
// // console.log(result);


// task 9(doubt)
// const Array = ["1","2","3","4","5","6"];

// // let newarray = Array.reduce(function(accumulator, currentValue) {
// //     return accumulator + currentValue;
// let array = Array.toString();

// let sum = 0;
// const result = array.reduce(myfunction)
// function myfunction(num,sum){
//     sum = sum + num;
//     return sum;
// }
// console.log(result);

// const numbers = ["45", "4", "9", "16", "25"];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// } 
// console.log(`Sum of all elements in the array is: ${sum}`);

// task 10
// const Array = ["1","2","3","4","5","6"]; 
// for(let i=0;i<Array.length;i++)
// {
//     console.log(Array[i]);
// }

// task 11
// const Array = ["1","2","3","4","5"];
// Array.forEach(function(index){
//     console.log(index);
// })