// const tinderUser = new Object() singleton Object

const tinderUser= {}  // non singleton object

tinderUser.id = "420"
tinderUser.name = "Munna"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "munna@gmail.com",
    fullname: {
        userfullname: {
            fistname:"Munna",
            lastname: "Ansari"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "munna@gmail.com"
    },
    {
        id: 2,
        email: "munna2@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS Tutorial",
    price : "999",
    courseteacher: "Khushbuddin"
}

// course.courseteacher

const {courseteacher: mk} = course
console.log(mk);



// {
//     "name" : "munna kk",
//     "course" : "MBA",
//     "price" : "Free"
// }