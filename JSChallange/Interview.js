// function fun1(){
//     return 9;
// }
// function fun2(){
//     return 4;
// }
// let a = (fun1(),fun2())
// console.log(a);
// output :- 4
const arr = ["nitish","rnajan","bhai","kya"]
const str = "my name is something";

const filterArray = (arr, filterStr) => {
    return arr.filter(item => item.includes(filterStr))
}

const filterString = (str, filterStr) => {
    return str.includes(filterStr)
}

console.log(filterArray(arr, "n"));
// output:- [ 'nitish', 'ranjan' ] because  it contain the chrector "n" in both the array string;
console.log(filterString(str, "i"));
// output:- true it also contain the "i" in the given string so that's why it contain a true;

