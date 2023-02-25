//! Array
//* ordered collection of items

// let fruits = ["apple","mango", "grapes"];
// console.log(fruits);

// let numbers = [1,2,3,4,5];
// console.log(numbers);

// let mixed = [1,2,3,"string",null,undefined];
// console.log(mixed);

// let fruits = ["apple","mango", "grapes"];
// fruits[0]="banana";
// console.log(fruits);
// console.log(typeof(fruits));//! output: object

//! Methods
//? isArray
// let fruits = ["apple","mango", "grapes"];
// console.log(Array.isArray(fruits));

//? Push & Pop
// let fruits = ["apple","mango", "grapes"];
// console.log(fruits);
// fruits.push("Guava");
// console.log(fruits);

// fruits.pop(); //! remove & return also
// console.log(fruits);
// let removeFruits = fruits.pop();
// console.log(removeFruits);

//? unshift
// let fruits = ["apple","mango", "grapes"];
// fruits.unshift("strawberry");//! add at fruits[0]
// console.log(fruits);

//? shift
// let fruits = ["apple","mango", "grapes"];
// fruits.shift();//! remove from last & return

//! Clone of array
//? Array is reference type 
// let fruits = ["apple","mango","grapes"];
// let freshFruits = fruits;//! freshFruits hold the address of "["apple","mango","grapes"]" only
// console.log(freshFruits);//! output:["apple","mango","grapes"];

//? copy same array 
//* differen array with same data
// let fruits = ["apple","mango","grapes"];
// let freshFruits =["apple","mango","grapes"];

//?  Using slice() method
// let fruits = ["apple","mango","grapes"];;
// let freshFruits = fruits.slice(0);
// console.log(freshFruits);

//? anoter way ( [].concat(array) )
// let fruits = ["apple","mango","grapes"];
// let freshFruits = [].concat(fruits);

//? using spread operator
// let fruits = ["apple","mango","grapes"];
// let freshFruits =[...fruits];
// console.log(freshFruits);

//! clone with extra item
//?  Using slice() method
// let fruits = ["apple","mango","grapes"];
// let freshFruits = fruits.slice(0).concat(["fruits4","fruits5"]);
// console.log(freshFruits);

//? anoter way ( [].concat(array) )
// let fruits = ["apple","mango","grapes"];
// let freshFruits = [].concat(fruits,["fruits4","fruits5"]);

//? using spread operator
// let fruits = ["apple","mango","grapes"];
// let freshFruits = ["fruits1",fruits2","fruits3"];

// let freshFruits = [...fruits,"fruits4","fruits5"];
// console.log(freshFruits);
// let freshFruits = [...fruits,...freshFruits,"fruits4","fruits5"];

//! Accessing Array
// let num = [1,2,3,4,5,6,7,8];
//  console.log(num.length);
//  console.log(num[0]);
// console.log(num[num.length-1]);

//? with for loop
// for(let i=0;i<num.length;i++){
// console.log(num[i]);

//? with while loop
// const fruits = ["apple","mango","grapes"];
// let freshFruits=[];
// let i=0;
// while(i<fruits.length){
//     freshFruits.push(fruits[i]);
//     i++;
// }
// console.log( freshFruits);

//? with for of lopp
// const fruits = ["apple","mango","grapes"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

//? with for in loop
// const fruits = ["apple","mango","grapes"];
// for(let index in fruits){
//     console.log(fruits[index]);
// }


//! use const to create array
// let fruits = ["apple","mango","grapes"];
// fruits.push("newFruit");
// console.log(fruits);


//! Array Destructing
// const myArray =["value1","value2"];
//? traditional way
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log(myVar1);
// console.log(myVar2);

//? modern way
// const myArray =["value1","value2","value3"];
// let [myVar1,myVar2] = myArray;
// console.log(myVar1);
// console.log(myVar2);

//* Skip value2
// let [myVar1, , myVar2] = myArray;
// console.log(myVar1);
// console.log(myVar2);

// const myArray =["value1","value2","value3"];
//  let [myVar1,myVar2,...myNewArray] = myArray;
//  console.log(myVar1);
//  console.log(myVar2);
// console.log(myNewArray);
