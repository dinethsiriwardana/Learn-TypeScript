interface UserInterface{
    name: string;
    age?:number;   // ? =  Not Required
    getMessage(): string
}


const user:{name:string,age:number} = {
    name: "Dineth",
    age: 30,
};

const user2: UserInterface = {
    name: "Dineth",
    age: 30,
    getMessage(){
        return "Hello"
    }
};

