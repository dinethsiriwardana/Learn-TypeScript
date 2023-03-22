const fname = "Dineth";  
let lname = "Siriwardana";
let c: String = "d";
 /*
const hello: "world" - because its const, its type is world
adter we create a variable We cannot change value to a different type  
let a = "s";  
a = 1 X
*/ 


//
// function
// 

//const getFullName: (fname: String, lname: String) => string
const getFullName = (fname : string ,lname : string): string => {
    return fname + " " + lname;
}