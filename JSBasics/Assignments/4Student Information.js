/* 4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.*/

const stdName= "Apeksha H V";
const stdAge=25;
const stdPercentage= 85.5;
const stdCompleteCource=true;
const stdGrade='A';

/*5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?*/
let userName;
let userEmail = null;
console.log(`Value of userName: ${userName}, Type: ${typeof userName}`);
console.log(`Value of userEmail: ${userEmail}, Type: ${typeof userEmail}`);
//What is the difference between undefined and null? Undefined : When a variable is declared but not assigned any value , null: mean an intentional empty value assigned to a variable.    
//What does typeof userName return? undefined
//What does typeof userEmail return? object
//Why is typeof null considered unusual in JavaScript? becuase it returns object instead of null.It is bug in javascript that has been kept for backward compatibility.                                                                            
