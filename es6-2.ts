// ... spread operator
const  arr1 = [1,{},3];
const arr3 = [...arr1];
const  arr2 = [5.6];
console.log(arr3,arr1 === arr3, arr1[1] === arr3[1]);
// deep or shallow copy ?
// usually only make shallow copy,  why?
const arr4 = [...arr1,4,...arr2,6];
// ... can spread any iterable type
const obj = {name:'bob',age:14};
const obj2 = {...obj,age:15}; // change age to 15 (override age)

// [... "abc"]

// example of ...rest operator
// will combine all params as an array !
const myFilter = (person,...conditions) => {  //...conditions => rest operator
    // no argument in arrow function

    // hw: implement this my filter
    const keys = Object.keys(person);
    let res = [];
    for(let condition of conditions){ 
        let conditionKey = Object.keys(condition)[0];

       //if(keys.includes(conditionKey)){
        if(conditionKey ==='name') {
            res = person.filter((item) => item.name.includes(condition[conditionKey]));
        }
        if(conditionKey ==='age') {
            res = person.filter((item) => item.age > 10);
        }
        if(conditionKey ==='addr') {
            res = person.filter((item) => item.addr.includes(condition[conditionKey]));
        }
       //}
    } 
};
myFilter([{name:"alice"}],{name :'a'});
const testPeople = [{name:"alice",age:10},{name:"bob",age:45},{name:"cathy",age:30},{name:'Mona',age:29}];
myFilter(testPeople,{name :'a'},{age:10});

const games = ['ook','fall guys'];
/*const ook = games[0];
const fallGuys = games[1];
*/
 const[ook,fallguys] = games;
 console.log('ook',ook,'  fallguys',fallguys);
 // ook ook   fallguys fall guys
 const user = {
     name :'alice',
     age:16
 };
 const {name:n,age} = user; // change name to n(n = 'alice')!
 console.log("n",n);
 console.log('age',age);
 //n alice

/* template string `backtick */
// <tbody>
const table  =
    `<table>
        <thead>{n.toUpperCase()}</thead>
        <tbody>${age * 100}</tbody>
    <table>`;
console.log(table);

