// void
const doSomething = (): void => {
    console.log("doSomething");
    //Nothing Return
}

//any - its not recommend to use any
let vAny: any = "any";

//never - func that return never, its a func that never end
const doSomething1 = (): never => {
    console.log("doSomething");
    throw 'never';
    
}

// unknown
let vUnknown: unknown = "unknown";    
// let v2:string = vUnknown;
//We can't assign unknown to any type

// Type Assertion (type Convert)
let v2:string = vUnknown as string;

let pageN: string = "1";
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. 
// If this was intentional, convert the expression to 'unknown' first
let numericPageN: number = (pageN as unknown) as number; 





