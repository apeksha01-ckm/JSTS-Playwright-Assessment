//reverse a number logic , 123=321
let num=123;
let rev=0;
let rem =0;
while(num>0)
{
    rem=num%10;    //extracting last digit , to get reminder 3 , 2 , 1
    num=Math.floor(num/10);    //removing last digit , to get quotient   12 , 1 ,0
    rev=rev*10+rem; //reversing the number logic , 0*10+3=3 , 3*10+2=32 , 32*10+1=321

}
console.log(" Reverse a number:" +rev);

