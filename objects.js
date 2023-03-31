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


//? using spread operator
const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value3",
};
// console.log(obj1.key1); //! output: value3

const obj2 = {
    key3 : "value3",
    key4 : "value4",
};

// const newObj = { ...obj1,...obj2, key69 : "value69"}
// console.log(newObj);

//! Object destructuring
//? 1st way
const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName);
// console.log(famousSong);

// //? 2nd way
// const {bandName,famousSong} = band;
// console.log(bandName);

// let {bandName,famousSong,...restProps } = band

// const {bandName:var1,famousSong:var2} = band;

// console.log(bandName) //! output : reference error
// console.log(famousSong)//! output : reference error

// console.log(var1); //! output : led zepplin
// console.log(var2); //! output : stairway to heaven



//! OBJECTS IN ARRAY
//* very usefull in real world application
const users = [
    { userId : 1, firstName: 'vaibhav', gender : 'male'},
    { userId : 2, firstName: 'gulshan', gender : 'male'},
    { userId : 3, firstName: 'abhishek', gender : 'male'},
]
// console.log(users);

// for( let user of users){
// console.log(user);
// console.log(user.userId);
// }

//! destructuring object within array
// const [ user1, user2, user3] = users;
// console.log(user1);

//! destructuring key of object which are in array
//? use key name as variable
//  const [{firstName}, ,{gender}] = users;
//  console.log(firstName);
//  console.log(gender);

//? create different variable name
// const [ {firstName:user1firstName},,{gender:user3gender}] = users;


