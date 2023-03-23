var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.changunchangableName = function () {
        // this.unchangableName = "dineth"
    };
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function (editor) {
        return this.editor;
    };
    return Admin;
}(User));
var user = new User("Dineth", "Siriwardana");
console.log(user.getFullname);
// console.log(user.maxAge); 
//Property 'maxAge' does not exist on type 'User'.
//We can't use static values with variable is used to reference that object. 
console.log(User.maxAge); //but we can do it directly with the Class Name
var admin = new Admin("Nimal", "Samara");
console.log(admin.getFullname);
