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

//We can't assignable to any type




