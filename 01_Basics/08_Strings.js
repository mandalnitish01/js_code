
// const name="Nitish"
// const AnotherName="Babu"
// const repocount= 50

//basics printing methods of strings

// console.log(name + " " + AnotherName )



const name="Nitish"
const AnotherName="Mandal"
const repocount= 50

// `` :- this is a backtiks string
console.log(`My name is ${name} ${AnotherName} and my repocount is ${repocount}`);



const gameName = 'nitish_mandal'

// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName[3])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())

const newstring = gameName.substring(0 , 6)
// console.log(newstring)
// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

 
const newStringOne = "   nitish   "
// console.log(newStringOne);
//trim() is used to hide unappproprite space in your line
// console.log(newStringOne.trim());

//  replace method 
// (replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; })
const url = "https://google.com/google%20baba"
// console.log(url.replace('%20', '-'));



//Uses of split function in javaScript
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


//uses of substr
const str1 = 'Mozilla';

console.log(str1.substr(1, 2)); //pass limit
// Expected output: "oz"

console.log(str1.substr(2));
// Expected output: "zilla"

