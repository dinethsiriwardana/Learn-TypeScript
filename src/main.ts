interface UserInterface{
    getFullname(): string;
}

class User implements UserInterface{

    private firstName:string
    private lastName:string
    readonly unchangableName: string

    static maxAge = 50

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName
    }
    changunchangableName(): void{
        // this.unchangableName = "dineth"
    }
    getFullname(): string{
        return this.firstName + " " + this.lastName
    }
}
class Admin extends User{

    private editor: string

    setEditor(editor: string): void{
        this.editor = editor
    }
    getEditor(editor: string): string{
        return this.editor;
    }
}

const user = new User("Dineth","Siriwardana");

console.log(user.getFullname);

// console.log(user.maxAge); 
//Property 'maxAge' does not exist on type 'User'.
//We can't use static values with variable is used to reference that object. 

console.log(User.maxAge); //but we can do it directly with the Class Name


const admin = new Admin("Nimal","Samara");
console.log(admin.getFullname)