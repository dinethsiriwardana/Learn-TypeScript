

/*

Here, TS recognizes someElement as a type of element.
So, the compiler generates an error when we attempt to print the value of sE.: 
        Property 'value' does not exist on type 'Element'.ts(2339)

*/

const someElement = document.querySelector('.foo'); //(method) ParentNode.querySelector<Element>(selectors: string): Element (+4 overloads)

//So, We need to convert it to type any
console.log('someElement',(someElement as any).value) 

//However, that is not the proper method.
const someElement2 = document.querySelector('.foo') as HTMLInputElement;
console.log('someElement2',someElement2.value) 

/*
/
    Listener
/
*/
const listenerElement = document.querySelector('.foo');

// (parameter) event: Event
listenerElement.addEventListener('blue',(event) => {

    // console.log('event',event.target.value) //This is the normal
    

    const target = event.target as HTMLInputElement
});

