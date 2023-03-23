// void
var doSomething = function () {
    console.log("doSomething");
    //Nothing Return
};
//any - its not recommend to use any
var vAny = "any";
//never - func that return never, its a func that never end
var doSomething1 = function () {
    console.log("doSomething");
    throw 'never';
};
// unknown
var vUnknown = "unknown";
// let v2:string = vUnknown;
//We can't assign unknown to any type
// Type Assertion (type Convert)
var v2 = vUnknown;
var pageN = "1";
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. 
// If this was intentional, convert the expression to 'unknown' first
var numericPageN = pageN;
