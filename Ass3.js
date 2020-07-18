//Assignment 3

/*Question 1:
Take a number from a user and write a function which checks whether the number is even or
odd. Assign the result to a variable and log that variable in the console.
Example Input: 23
Output: The number entered is 23 and Number is odd
*/

//ANS

function num()
{
let n=Number(prompt("Enter a Number : "));
if(n%2==0)
  console.log("The Numbered Entered is "+n+" and Number is EVEN..");
else
  console.log("The Numbered Entered is "+ n +" and Number is ODD..");
  
}

num();

****************************************
/*Question 2:
Write a program which will take OS name and version from the user separated by a space. Then
log the OS name and version on the console.
Input: "Android 9"
Output: The OS name is Android and version is 9*/

//ANS


function oss()
{
let n=prompt("Enter a OS Name with Version : ");

let v=n.split(" ");  
  
  console.log("The OS Name is "+v[0]+" and Version is "+v[1]);

  
}

oss();

******************************************
/*Question 3:
Write a program to take marks as input from the user and grade him accordingly. Use Conditional
statements. Also the same code using switch or ternary
input: 50
Output : Marks are 50 and grade is B*/

//ANS
function num()
{
let n=Number(prompt("Enter Marks : "));
if(n>90 && n<100)
  console.log(" Marks are "+n+" and Grade is A+");
else 
  if(n<=90 && n>80)
  console.log(" Marks are "+n+" and Grade is A");
  else 
  if(n<=80 && n>70)
  console.log(" Marks are "+n+" and Grade is B");
   else 
  console.log(" Marks are "+n+" and Grade is C");
}

num();

****************************************