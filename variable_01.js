//! Variable In Js
//? var  
//? let
//? const

"use strict";
//* console.log('vaibhav');
// declare a variable
var firstName = "vaibhav";

// use of variable
console.log(firstName);

// change of variable
firstName = "Robin";
console.log(firstName);

//! Rules for naming variable
//? you can't start with number
//? ex-
//? 1name(invalid)
//? value1(valid)

var value =10;
console.log(value);

//! you can use only _(underscore) or $(dollar) symbol
//? var first_name(valid)
//? var _firstName(valid)

//? var first$Name(valid)
//? var $firstName(valid)

//! you can not use white spaces
//? var first name(invalid)

//! convention
//? start with small letter and use camelCase notation
//? var name = 'vaibhav';
//? var firstName = 'robin';

//! Types of variable
//? 1.var  ->> var name;
//? 2.let  ->> let name;
//? 3.const ->> const name;

//* 1. var (funtional Scope)
// var n = 10;
// var n = 20; //! Problem...
// console.log(n);

//* 2. let (block scope)
//let n = 10;
//let n = 20; //! Syntax Error, 'n' has already been declared
// //console.log(n);

//* 3. const( block scope)
// const pi = 3.14;
// //console.log(pi);
// pi = 3.147; //! Type Error












