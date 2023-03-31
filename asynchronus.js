//! synchronous programming vs asynchronous programming
//? synchronous programming
//* synchronous programming allow line by line execution,previous code block the execution which are comming to next
// console.log("synchronous programmig is single threade");
// 

//? asynchronous programming
//* asynchronous programming

//? Implementation of setTimeout() method
//? provide by browser
// console.log("script start");

// function hello(){
//     console.log("Hello world!");
// }
// setTimeout(hello,5000);//! return an 'id'

// setTimeout(()=>{
//     console.log("Hello, I am non-blocking");
// },5000);
// console.log("Script End");



//? clearTimeout(id) method
// console.log("script start ");

// const id = setTimeout(()=>{
//     console.log("Hello, I am non-blocking");
// },5000);
// clearTimeout(id);
// console.log("Script End");



//? setInterval() method
// console.log("script start");
// setInterval(() => {
//     console.log(Math.random());
// }, 1000);
// console.log("script end");