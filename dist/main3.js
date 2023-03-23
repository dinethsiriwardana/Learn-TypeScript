// ? Generics with Interfaces
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
var addId_3 = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { //returns a new object
        id: id });
};
var user_3 = {
    name: 'Jack',
    data: {
        meta: "fool"
    }
};
var user_3_2 = {
    name: 'john',
    data: ['foo', 'bar', 'baz']
};
var result_3 = addId_3(user);
console.log('result', result);
var user_3_3 = {
    name: 'Jack',
    data: {
        meta: "fool"
    },
    meta: "bar"
};
