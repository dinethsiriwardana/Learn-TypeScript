// ? In main.ts we can pass any data type to addId
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
var addId_2 = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { //returns a new object
        id: id });
};
var user_2 = {
    name: 'Jack'
};
var result_2 = addId_2(user);
console.log('result', result);
