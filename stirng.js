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



