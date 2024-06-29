const JsUser = {
    name: "Munna",
    "Full Name": "Munna Ansari",
    age:"16",
    location: "Lucknow",
    email: "munna@gmail.com",
    isLoggedIn: false,
    LastLoginDay: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);

JsUser.greeting = function(){
    console.log("Hello User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());