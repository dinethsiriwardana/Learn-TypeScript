// ? Generics with Interfaces



const addId_3 = <T extends object>(obj: T ) => {
    const id  = Math.random().toString(16)
    return {
        ...obj,   //returns a new object
        id
    };
};

// when we know about what data type we used we can see it from data
interface UserInterface_3<T>{ 
    name: string
    data: T;
}

const user_3: UserInterface_3<{meta: string}> = {
    name: 'Jack',
    data:{
        meta: "fool"
    }
}
const user_3_2: UserInterface_3<string[]> = {
    name: 'john',
    data:['foo','bar','baz']
}

const result_3 = addId_3<UserInterface>(user);
console.log('result',result)


//Pass more than 1 data type
interface UserInterface_3_2<T,V>{ 
    name: string
    data: T;
    meta: V;
}

const user_3_3: UserInterface_3_2<{meta: string},string> = {
    name: 'Jack',
    data:{
        meta: "fool"
    },
    meta: "bar"
}