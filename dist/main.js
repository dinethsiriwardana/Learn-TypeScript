/*

Here, TS recognizes someElement as a type of element.
So, the compiler generates an error when we attempt to print the value of sE.:
        Property 'value' does not exist on type 'Element'.ts(2339)

*/
var someElement = document.querySelector('.foo'); //(method) ParentNode.querySelector<Element>(selectors: string): Element (+4 overloads)
