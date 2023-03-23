
// ? Function addId argument obj to get id

/*
? If we don't provide argument type - it will be any

const addId = (obj) => {
    const id  = Math.random().toString(16)
    return {
        ...obj,   //returns a new object
        id
    }
}

? So we can throw what we want
const result = addId(user);
console.log('result',result)
*/


//? 'T' is a defaultname for generic
//So we can use it as a data type
const addId = <T>(obj: T) => {
    const id  = Math.random().toString(16)
    return {
        ...obj,   //returns a new object
        id
    };
};

/*
const user = {
    name: 'Jack'
}

const result = addId(user);
console.log('result',result)
*/

/*
? its show like this
const addId: <{
    name: string;
}>(obj: {
    name: string;
}) => {
    name: string;
} & {
    id: string;
}
*/


interface UserInterface{
    name: string
}

const user: UserInterface = {
    name: 'Jack'
}

const result = addId<UserInterface>(user);
console.log('result',result)

/*
const addId: <UserInterface>(obj: UserInterface) => UserInterface & {
    id: string;
}
*/

// ! ----------> main2.ts

