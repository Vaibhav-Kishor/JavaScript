//! typeof operator
// data type
// string
// number
// boolean
// undefined
// null
// BigInt
// Symbol

//* let age = 20;
//* let firstName = "vaibhav";
//* console.log(typeof(age));
// console.log(typeof(firstName)); //! output ->> string
// console.log(typeof(age)); //! output ->> number

//! convert number into string
//? number to string
//? 1st way
//* let age = 22;
//* console.log(typeof(age+" ")); // output ->> string
//* let newAge = 22 + "";
// console.log(typeof(newAge)); //! output ->> string
//? 2nd way
//* let age = 20;
//* let string = String(age); // String() ->> convert num to string
// console.log(typeof(string)); //! output: string



//! convert string into number
//* let string = "34";
//* console.log(typeof(string)); // output: string
//* let newNum = +"string"
// console.log(typeof(newNum)) //! output: number
//* let newNum = +"34";
// console.log(typeof(newNum));//! output: number

//! string concatenation
//* let firstName = "vaibhav";
//* let lastName = "kishor";
//* let fullName = firstName+" "+lastName;//! concatenation
// console.log(fullName); //! output: vaibhav kishor

//* let str1 = "10";
//* let str2 ="20";

//* let num = +str1 + +str2; // converts string into number first then add them
// console.log(typeof(num));//! output: number
// console.log(num); //! output: 30

//! Template string
//* let age = 20;
//* let firstName = "vaibhav";
//? "my name is vaibhav and my age is 20"
//? 1st way
// let aboutMe = "my name is "+ firstName + " and my age is "+ age;
// console.log(aboutMe);

//? 2nd way(using template literals({}))
//* let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);























































































































