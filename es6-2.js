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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// ... spread operator
var arr1 = [1, {}, 3];
var arr3 = __spreadArrays(arr1);
var arr2 = [5.6];
console.log(arr3, arr1 === arr3, arr1[1] === arr3[1]);
// deep or shallow copy ?
// usually only make shallow copy,  why?
var arr4 = __spreadArrays(arr1, [4], arr2, [6]);
// ... can spread any iterable type
var obj = { name: 'bob', age: 14 };
var obj2 = __assign(__assign({}, obj), { age: 15 }); // change age to 15 (override age)
// [... "abc"]
// example of ...rest operator
// will combine all params as an array !
var myFilter = function (person) {
    // no argument in arrow function
    var conditions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        conditions[_i - 1] = arguments[_i];
    }
    // hw: implement this my filter
    var keys = Object.keys(person);
    var res = [];
    var _loop_1 = function (condition) {
        var conditionKey = Object.keys(condition)[0];
        //if(keys.includes(conditionKey)){
        if (conditionKey === 'name') {
            res = person.filter(function (item) { return item.name.includes(condition[conditionKey]); });
        }
        if (conditionKey === 'age') {
            res = person.filter(function (item) { return item.age > 10; });
        }
        if (conditionKey === 'addr') {
            res = person.filter(function (item) { return item.addr.includes(condition[conditionKey]); });
        }
    };
    for (var _a = 0, conditions_1 = conditions; _a < conditions_1.length; _a++) {
        var condition = conditions_1[_a];
        _loop_1(condition);
    }
};
myFilter([{ name: "alice" }], { name: 'a' });
var testPeople = [{ name: "alice", age: 10 }, { name: "bob", age: 45 }, { name: "cathy", age: 30 }, { name: 'Mona', age: 29 }];
myFilter(testPeople, { name: 'a' }, { age: 10 });
var games = ['ook', 'fall guys'];
/*const ook = games[0];
const fallGuys = games[1];
*/
var ook = games[0], fallguys = games[1];
console.log('ook', ook, '  fallguys', fallguys);
// ook ook   fallguys fall guys
var user = {
    name: 'alice',
    age: 16
};
var n = user.name, age = user.age; // change name to n(n = 'alice')!
console.log("n", n);
console.log('age', age);
//n alice
/* template string `backtick */
// <tbody>
var table = "<table>\n        <thead>{n.toUpperCase()}</thead>\n        <tbody>" + age * 100 + "</tbody>\n    <table>";
console.log(table);
