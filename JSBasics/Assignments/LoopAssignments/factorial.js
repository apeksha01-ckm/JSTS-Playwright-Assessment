/*4.Factorial Number
Problem Statement:
Write a JavaScript program to calculate the factorial of a given positive integer using a loop.*/
//5! = 5*4*3*2*1

let n=6;
let fact=1
for(let i=1;i<=n;i++)
{
    fact=fact*i;
}
console.log(`factorial of ${n} is ${fact}`);
