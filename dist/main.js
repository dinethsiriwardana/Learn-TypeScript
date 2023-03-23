/*

Here, TS recognizes someElement as a type of element.
So, the compiler generates an error when we attempt to print the value of sE.:
        Property 'value' does not exist on type 'Element'.ts(2339)

*/
var someElement = document.querySelector('.foo'); //(method) ParentNode.querySelector<Element>(selectors: string): Element (+4 overloads)
//So, We need to convert it to type any
console.log('someElement', someElement.value);
//However, that is not the proper method.
var someElement2 = document.querySelector('.foo');
console.log('someElement2', someElement2.value);
/*
/
    Listener
/
*/
var listenerElement = document.querySelector('.foo');
// (parameter) event: Event
listenerElement.addEventListener('blue', function (event) {
    // console.log('event',event.target.value) //This is the normal method
    var target = event.target; //but we can declared target as HTMLInputElement
    console.log('event', target.value);
});
