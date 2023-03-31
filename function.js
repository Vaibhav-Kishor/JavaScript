//! FUNCTION
//* function is a pieace of code, which perform some specific task

//? Traditional function
//* also called function declaration or definition
// function sum(a,b) {
//     console.log(a+b);
// }

//? Function return value or expression 
// function sum(a,b) {
//     return a+b;
// }

//? function takes argument
// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(5,5)) //! output: 10
// console.log(sum(5)) //! output: undefined
// console.log(sum()) //! output: undefined


//? Before default value feauture,how to handle undefined
// function sum(a,b) {
//     if(b==="undefined" || a ==="undefined"){
//        a=0; b=0;
//     }
//     return a+b;
// }
// sum() //! output: 0
// sum(5); //! output: 5
// sum(5,5) //! output: 10


//? Function with default value
function sum(a=0,b=0) {
    return a+b;
}
// sum() //! output: 0
// sum(5); //! output: 5
// sum(5,5) //! output: 10



//! REST PARAMETER
// function myFun(a,b,...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`c is `,c);
// }
console.log(myFun(3,4,5,6,7,8,9));


//? perform add using rest paramater 
// function addAll(...numbers) {
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// const ans = addAll(1,2,3,4,5,6,8,9,0)
// console.log(ans) //! output: 38




//! Parameter Destructuring

//? object destructuring as function parameter
const person = {
    firstName : "vaibhav",
    gender : male,
}

//? traditional way
// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

//? another way
// function printDetails({firstName,gender}) {
//     console.log(firstName);
//     console.log(gender);
// }
// printDetails(person);

//? taking anoter name of parameter
// function printDetails({firstName:personName ,gender:personGender}) {
//     console.log(personName);
//     console.log(personGender);
// }
// printDetails(person);





//! callback function
//* those function which takes function as parameter and call it within own block
// function myFun2() {
//     console.log("Inside my fun2");
// }

// function myFun(callback) {
//     console.log("Hello there, I am a function and I can...")
//     callback();
// }
// myFun(myFun2);


//! function returning function
// function myFun() {
//     function hello() {
//         return "Hello World";
//     }
//     return hello;
// }
// const ans = myFun();
// console.log(ans());




