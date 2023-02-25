//! Objects 
//* Array are good but not sufficient
//* for real world data
//* Objects store key value pair
//* objects don't have index
//* objects are reference type

// const person = {
//     name : "vaibhav",
//     age : 22
// };
// console.log(person);
// console.log(typeof(person))//! output: object, but we also called object literals
// console.log(person.name);
// console.log(person.age);

// object with array
// const person = {
//     name : "vaibhav",
//     age : 22,
//     hobbies : ["playing game", "listening music"]
// };
// console.log(person.hobbies);

//! How to add key value pair
//? using dot notation
// const person = {
//     name : "vaibhav",
//     age : 22,
//     hobbies : ["playing game", "listening music"]
// };
// person.gender = "male";
// console.log(person.gender);

//? bracket notation ->> object_name["key"]
// const person = {
//     name : "vaibhav",
//     age : 22,
//     hobbies : ["playing game", "listening music"]
// };
// console.log(person["name"]);
// person["gender"] = "male";
// console.log(person);

//? difference b/w .(dot) and [](bracket) notation
//? firstDiffernce
// const person = {
//     name : "vaibhav",
//     age : 22,
//    "person hobbies": ["playing game", "listening music"]
// };
// console.log(person.person hobbies);//! Error
// console.log(person["person hobbies"]);

//? secondDifference
// const key = "email";
// const person = {
//     name : "vaibhav",
//     age : 22,
//    "person hobbies": ["playing game", "listening music"]
// };
// person[key] = "vaibhavkishor7@gmail.com";



//! How to Iterate object
const person = {
    name : "vaibhav",
    age : 22,
   "person hobbies": ["playing game", "listening music"]
};
//? using for in loop
// for(let key in person){
// console.log(person[key]);
// console.log(`${key} : ${person[key]}`);
// }

//? using Object.keys(), 
// console.log(Object.keys(person));//! return array of keys

// for(let key of Object.keys(person)){
//  console.log(key);
//  console.log(person[key]);
// }

//? computed properties
const key1 = "objkey1";
const key2 = "objekey2";

const value1 = "myValue1";
const value2 = "myValue2";

//? 1st way
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;

//? better way
// let obj={};
// obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);











