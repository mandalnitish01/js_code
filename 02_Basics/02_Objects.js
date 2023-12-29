// const tinderUser = new Object() //singlton object
const tinderUser = {} //non singlton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nitish",
            lastname: "mandal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
 //output: [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));
// output:- [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));
//output:-[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//true

// console.log(tinderUser.hasOwnProperty('isLogged'));
//false 



//Day 3:-

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Nitish"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

//here we change our variable name acccording to your need
const {courseInstructor: instructor} = course
console.log(instructor);

//{} using this bracket you can make json. Json is the basically you can say API call 
// {
//     "name": "nitish",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]