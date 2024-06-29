// function MyName(){
//     console.log(M);
//     console.log(U);
//     console.log(N);
//     console.log(N);
//     console.log(A);
// }

// MyName refrence @& MyName() execute
// MyName()

function addNumber(num1, num2){
    //    let result = num1 + num2
       return num1 +  num2
}

const result = addNumber(5, 7)
// console.log("Result :", result);

function loginUserMessage(username){
    // if(username === undefined){
    if(!undefined){
        console.log("please insert unsername");
        return
    }
    return `${username} just loged in`
}

// console.log(loginUserMessage());

function calCarPrice(...num1){
return num1
}
// console.log((calCarPrice(60 , 90, 100)));

const user = {
    username : "Munna",
    price : 500
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} ad price is ${anyobj.price}`);
}

// handleObject(user)
handleObject({
    username: "khushbuddin",
    price : 8000
})

const myArray = [100, 200, 300, 400]
function returnSecValue(getArray){
    return getArray[2]
}
console.log(returnSecValue(myArray));