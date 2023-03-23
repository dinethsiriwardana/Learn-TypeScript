// ? Function addId argument obj to get id
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { //returns a new object
        id: id });
};
var user = {
    name: 'Jack'
};
var result = addId(user);
console.log('result', result);
/*
const addId: <UserInterface>(obj: UserInterface) => UserInterface & {
    id: string;
}
*/
// ! ----------> main2.ts
