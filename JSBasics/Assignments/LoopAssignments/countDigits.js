/*5.Count Digits
Problem Statement:
Write a JavaScript program to count the total number of digits present in a given number using a loop.*/

let num=55678;        //can use Math.abs(num)  for negative number , it will convert negative number to positive number
let orgnum=num;
let count=0;

if(num===0)
{
    count=1
}
else{
while(num>=1)
{
    let rem=num%10;
    num=Math.floor(num/10);   //to remove last digit
    count=count+1;
}
}
console.log(`Number of digits in ${orgnum} is ${count}`);
