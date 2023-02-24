//! string indexing

//* let firstName = "vaibhav"
// v a i b h a v
// 0 1 2 3 4 5 6

//* console.log(firstName[4])

//? length of string
//* firstName.length  
// console.log(firstName.length) //! also count white space

//? last Index : length-1
//*let lastIndex = firstName.length-1;
// console.log(lastIndex);

//? last character
//*let lastChar = firstName[firstName.length-1];
// console.log(lastChar);

//! method in string
//? trim()
//? toUpperCase()
//? toLowerCasee()
//? slice

//! use of trim()
//* let namehai = "     vaibhav ";
// console.log(namehai.length); //! output(13)
//* let newString = namehai.trim(); // trim white space
// console.log(namehai.length); //! output(13), not change because string is immutable
// console.log(newString.length); //! output(7)


//! toUpperCase()
//* let firstName = "vaibhav";
// console.log(firstName.toUpperCase()); //! convert to upper case and return new string, not change in original string


//! toLowerCase()
//* let firstName = "Vaibhav";
// console.log(firstName.toLowerCase()); //! conver in lower case and return new string, not change in original string


//! slice() 
//* let string = "This is vaibhav";
//* let newString = string.slice(0,8); // exclude last index
// console.log(newString);



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