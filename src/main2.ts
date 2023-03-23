// ? In main.ts we can pass any data type to addId

/*

Ex:

const addId = <T>(obj: T) => {
    const id  = Math.random().toString(16)
    return {
        ...obj,   //returns a new object
        id
    };
};
const result = addId<string>('user');

*/

// ? So we need to set the default generic type here

const addId_2 = <T extends object>(obj: T ) => {
    const id  = Math.random().toString(16)
    return {
        ...obj,   //returns a new object
        id
    };
};

interface UserInterface_2{
    name: string
}

const user_2: UserInterface_2 = {
    name: 'Jack'
}

const result_2 = addId_2<UserInterface>(user);
console.log('result',result)