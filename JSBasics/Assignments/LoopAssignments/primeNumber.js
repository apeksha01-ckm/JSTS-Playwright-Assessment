//Write a JavaScript program to check whether a given number is prime or not using a loop.
//Prime number : number is greater than 1 and has it should divisible by 1 and itself

let num=11;
let isprime=true;

if(num<=1)
{
    isprime=false;
}
else{
    for(let i=2;i<num;i++)
        {
            if(num%i===0)  //if reminder is 0 then number is not prime , enters the block 
            {
                isprime=false;  // marks it as not prime
                break;          //stops the loop
            }
        }
    }
if(isprime)
{
    console.log(`${num} is a prime number`);
}
else
{
    console.log(`${num} is not a  prime number`);
}
