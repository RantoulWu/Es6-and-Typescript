var _this = this;
// const
var a = 1;
//a = 2; // error
var aa = { a: 1 };
// aa is a constant but not immutable
aa.a = 2; // save reference of aa, but a's content can change!
// aa = {a:1}; error , change reference of aa
// how to make a Java linked-list immutable ? use unmodifiableList()
// let
var b = 1;
// b = '2'; error raised by typescript! let b = 1 get b's type to Number, cannot change b's type to string!  if in js, it works!
// difference: between var and let
for (var i = 0; i < 3; i++) {
}
console.log(i);
// for loop create a block scope
for (var p = 0; p < 3; p++) {
}
//console.log(p);
//console.log(hoisted); // cannot use let before declaration due to temporary dead zone
var hoisted = 'yes';
// var abc;
// var abc = {};
// var abc;
// in js abc still {}
/*!!! in typescript, no redelaration of let */
//let b ; // cannot redeclare block-scoped variable b
//why?
// In typescript, once variable is declared and has a specific type assigned
// you cannot reassign it to another type
// if we allow redeclare of variable, this variable may be assigned to other type of values,
// which violate typescript's rule
// 13,13,13
// why have this output?
// how javascript handle synchronized and asynchronized?
// once for loop finished execution
/*for(var j = 10; j < 13; j++){
    setTimeout(function () {
        console.log('test1',j); // ?
    },0)
}*/
console.log("------------------------------------");
for (var jj = 10; jj < 13; jj++) {
    // your code here?
    //https://www.cnblogs.com/echolun/p/10584703.html
    // for( let i = 0; i< 5; i++) 这句话的圆括号之间，有一个隐藏的作用域
    // for( let i = 0; i< 5; i++) { 循环体 } 在每次执行循环体之前，JS 引擎会把 i 在循环体的上下文中重新声明及初始化一次。
    //console.log('test2', jj);
    setTimeout(function () {
        console.log('test2', jj); // how to output 10,11,12 ?
    }, 0);
    // your code ends here
}
/*solution 1
change var jj to let jj can solve this
let is a block scope variable
for each loop, a new block will be created, and old jj will disappear
to keep this jj, we need closure to store it!
*/
/* solution 2*/
for (var number = 10; number < 13; number++) {
    // your code here?
    // hint : create a closure to keep the number
    //https://www.bilibili.com/video/BV1YJ411R7ap?p=7
    // what are those numbers belong?
    (function (number2) {
        setTimeout(function () {
            console.log('--  test3', number2); // how to output 10,11,12 ?
        }, 0);
        // your code ends here
    })(number);
}
// arrow function
// () => {}  // 类似 java ()-> {} lambda
var add = function (a, b) { return a + b; };
/*const add = (a,b) => {
    return a + b;
};*/
var add1 = function (a) { return a + 1; };
var add2 = function (a) { return a + 1; }; //if only has one parameter
var add3 = function (_) { }; //等价于const add3 = () => {}; if no parameters, can be shortened
add(1, 2);
var order = {
    price: 100,
    //calculate: function calculate() {  // calculate: () => {
    calculate: function () {
        return {
            getTotal: function (qty) {
                return this.price * qty;
            },
            // arrow function does not have binding of this
            // this binds to the enclosing scopes's this ???
            // 向上找ES5 function， 绑定到es5 function 的this
            //如果一直向上找？ 最终会到达globalThis
            getTotal2: function (qty) { return _this.price * qty; }
        };
    }
};
console.log(order.calculate().getTotal(5)); // NaN
console.log(order.calculate().getTotal2(5)); // 500
