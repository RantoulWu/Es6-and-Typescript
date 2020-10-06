"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pentagon = exports.Shape = void 0;
// OOP
// access modifier belongs to typescript
var Shape = /** @class */ (function () {
    // do not allow overload constructor
    function Shape(type) {
        this.type = type;
        console.log(Shape.x);
        //console.log(this.x); cannot get in  local scope
        // console.log(this.x); // why cannot find it? this points to newly created object, and no x in this object, x contains in class 
    }
    // strict mode 
    Shape.printX = function () {
        console.log(Shape.x); // 
        console.log(this.x); // why no error?   x is in shaple class, and printx will be called by shape
        // console.log(this.type); // error cannot get the instance
    };
    Shape.x = 1;
    return Shape;
}());
exports.Shape = Shape;
var shape = new Shape('Triangle');
Shape.printX();
var myPrint = Shape.printX;
myPrint(); //cannot print
//console.log(shape.y);  No! 'y' is private and only accessible within class 'Shape'
console.log(shape.type);
// protected only accessible within class and subclass
//console.log(shape.z);
var Pentagon = /** @class */ (function (_super) {
    __extends(Pentagon, _super);
    function Pentagon(side) {
        var _this = _super.call(this, 'pentagon') || this;
        _this.side = side;
        console.log(_this.z);
        return _this;
    }
    Pentagon.prototype.draw = function () {
    };
    return Pentagon;
}(Shape));
exports.Pentagon = Pentagon;
