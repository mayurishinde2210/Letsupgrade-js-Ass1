//Answer 1

//Console.log()  used to log(print) the output to the console.
console.log(undefined);

//console.error() Used to log error message to the console.
console.error('ERROR');

//console.warn() Used to log warning message to the console. 
console.warn('WARNING');

//onsole.clear() Used to clear the console.
console.clear();

//console.time() used to know the amount of time spend by a block or a function.

//console.timeEnd() methods provided by the javascript console object.
console.time('abc'); 
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); // calling fun(); 
 fun2(); // calling fun2(); 
console.timeEnd('abc'); 

//console.count() :This method is used to count the number that the function hit by this counting method

for(let i=0;i<5;i++){ 
    console.count(i); 
} 

//console.group() and console.groupEnd() :group() and groupEnd() methods of the console object allows us to 
//group contents in a separate block, which will be indented.

console.group('Group:');
//console.table() : This method allows us to generate a table inside a console
  console.table({'key':'value','a':1,'b':2});
  console.error('ERROR in group');
console.groupEnd('GROUPEND');

//*******************************************

//Answer 2

//var is used to declare a variable and its global.
var a=10;
console.log(a);

//let is similar to var but its local.
let c=1;
console.log(c);

//const : once the value is assigned then can not be changed.its local.
const z=100;
console.log(z);

//******************************************

//Answer 3

//Data types in Javascript
//1.Number:The number type represents both integer and floating point numbers.

let a=1.23;
console.log(a);

//2.BigInt type was recently added to the language to represent integers of arbitrary length.

const bigInt = 123456789012345678901234567890123456789;
console.log(bigInt);


/*3.A string in JavaScript must be surrounded by quotes.
In JavaScript, there are 3 types of quotes.

1) Double quotes: "Hello".
2) Single quotes: 'Hello'.
3) Backticks: `Hello`.
*/

let String="String";
console.log(String);

//4.The boolean type has only two values: true and false.
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

//5.null is just a special value which represents “nothing”, “empty” or “value unknown”.
let abc = null;

//6.The meaning of undefined is “value is not assigned”.
let age;

alert(age); // shows "undefined"

/*7.objects are used to store collections of data and more complex entities
The symbol type is used to create unique identifiers for objects
*/

//The typeof operator returns the type of the argument.
typeof null // "object"  (2)