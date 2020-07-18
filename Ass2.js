//Assignment 2

let input= prompt('Enter Input : ');
console.log(input);

//The length property returns the length of a string.
console.log(input.length);


/*The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
*/
var s='Learning Javascript with Letsupgrade';
let i= s.indexOf("with");
console.log(i);

/*The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

*/let j=s.lastIndexOf("Le");
console.log(j);


/*The search() method searches a string for a specified value and returns the position of the match:

*/
let k=s.search("up");
console.log(k);

/*slice() extracts a part of a string and returns the extracted part in a new string.
*/
let l=s.slice(25,36);
console.log(l);

/*substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.
*/
let m=s.substring(12,21);
console.log(m);

/*substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part*/
let n=s.substr(6,6);
console.log(n);



//The replace() method replaces a specified value with another value in a string:
let p=s.replace("Javascript","PYTHON");
console.log(p);

//A string is converted to upper case with toUpperCase():
let t = s.toUpperCase();  // text2 is text1 converted to upper
console.log(t);

//A string is converted to lower case with toLowerCase():
var t2 = s.toLowerCase();
console.log(t2);

//concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var t3 = text1.concat(" ", text2);
console.log(t3);

//A string can be converted to an array with the split() method:

var x=s.split(",");          // Split on commas
console.log(x);

var y=s.split(" ");          // Split on spaces
console.log(y);

var z=s.split("|");          // Split on pipe
console.log(z);


var a=["Learning", "Javascript", "with", "Letsupgrade"];
console.log(a);

console.log(a.length);
console.log(a.sort());

console.log(typeof(a));


****************************************
//Answer 3:

var young=prompt("Enter Your age : ");
if(young>21)
  console.log("can Drink");
else
    console.log("can NOT Drink");

