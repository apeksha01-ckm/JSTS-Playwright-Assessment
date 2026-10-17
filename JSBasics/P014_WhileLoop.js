
//Sum of digit logic , 123= 1+2+3=6
let num=123;
let rem=0;
let sum1=0;
while(num>0)
{
    rem=num%10;    //extracting last digit , to get reminder 3 , 2 , 1
    num=Math.floor(num/10);    //removing last digit , to get quotient   12 , 1 ,0
    sum1=sum1 + rem; //adding last digit to sum              3+2+1=6
}
console.log('Sum of digits is:' +sum1);

//Inorder to avoid floating point values in division we can use Math.floor() to get the integer value of the quotient.
//if we dont use Math.floor() output here is 6.6666666 , so use Math.floor() to get the integer value of the quotient.

//reverse a number logic , 123=321
//check if the number is palindrome or not
//