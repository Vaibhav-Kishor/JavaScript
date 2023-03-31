//! Truthy and Falsy Value
//? 1. Truthy Value
// any data except falsy

//? 2. Falsy Value
//* false
//* ""
//* null
//* undefined
//* 0

// ex-
let firstName = false;
if(firstName){
    console.log(firstName);
}
else{
    console.log("FirstName is empty");
}


firstName = null;
if(firstName){
    console.log(firstName);
}
else{
    console.log("FirstName is empty");
}

firstName = "";
if(firstName){
    console.log(firstName);
}
else{
    console.log("FirstName is empty");
}

firstName = undefined;
if(firstName){
    console.log(firstName);
}
else{
    console.log("FirstName is empty");
}

firstName = 0;
if(firstName){
    console.log(firstName);
}
else{
    console.log("FirstName is empty");
}






