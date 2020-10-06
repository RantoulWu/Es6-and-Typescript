"use strict";
exports.__esModule = true;
var oop_1 = require("./oop");
// explicitly declare type
var strA;
// implicit declare type
var strAA = 'aa';
var strB;
strB = 'bb';
strAA = 'hi';
strAA = '';
// strA = 1; 
strA = null; // Yes
strA = undefined; // Yes
// number boolean object {} []
var strc = 'fafa';
strc = 'papa';
var bbb = 1;
//bbb = '2';
// how to create a variable with fixed 2 fields?
var userExample = {
    name: 'bob',
    age: 21 /*
    address:'123' */
};
var p = ['bob', 11];
p[0] = 'alex';
//enum 
var Direction;
(function (Direction) {
    Direction["left"] = "left";
    Direction[Direction["right"] = 1] = "right";
})(Direction || (Direction = {}));
var d = Direction.right;
//any
var anyType;
// implicitly define any type
var implicitAny;
//unknown type 
// union type 
var c;
c = 'c';
c = 0;
var cc;
// from 
var shape = new oop_1.Shape('');
var draw = new /** @class */ (function () {
    function class_1() {
    }
    class_1.prototype.draw = function () {
    };
    return class_1;
}());
// function parameter , define return type(number here)
// ? 代表可有可没有
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
add(1, 2);
add(1);
add();
