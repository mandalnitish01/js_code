// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//uses of slacce
// output is:-
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]

console.log(myn1);
console.log("B ", myArr);

//splice is used to delete the element at your given range of an array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// uses of splice
// output:-
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]


// output of splice and slice 
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]