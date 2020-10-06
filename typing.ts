import { Shape , drawable} from "./oop";


// explicitly declare type
let strA : string;
// implicit declare type
let strAA = 'aa';
strAA = 'hi'; 
strAA = ''; 
// strA = 1;  // No  strA is defined as String type
strAA = null; // Yes
strAA = undefined; // Yes
// ------------ declare type reassign test----------------
let sum : number;
sum = undefined;
sum = NaN;
sum = null;

let haha : object;
haha = {name:'hhh'};
haha = null;
haha = undefined;
haha = {name:23};

// if just declare and not define the type,
// it can be reassigned to different types
let strB;
strB = 'bb';
strB = 99;
strB = false;
strB = {name:'Opal'};
strB = null;
strB = undefined;
strB  = NaN;
strB = [1,2,3,4];

// number boolean object {} []
let strc = 'fafa';
strc = 'papa';
let bbb = 1;
//bbb = '2';

// how to create a variable with fixed 2 fields?
let userExample: {name:string, age:number} = {
    name: 'bob',
    age:21 /*
    address:'123' */
}
let p: [string,number] = ['bob',11];
p[0] = 'alex';

//enum 
enum Direction{
    left = 'left',
    right = 1
}
let d : Direction = Direction.right;

//any
let anyType : any;

// implicitly define any type
let implicitAny;
//unknown type 

// union type 
let c: string | number;
c = 'c';
c = 0;
//c = {} cannot

type alphaNumberic = string | number;
let cc : alphaNumberic;

// from 
let shape: Shape = new Shape('');
let draw111: drawable = new class implements drawable{ // 不能直接定义new Drawable
    draw(){

    }
};


// function parameter , define return type(number here)
// ? 代表可有可没有
const add = (a? : number, b :number = 1): number => a+b;
add(1,2);
add(1);
add();