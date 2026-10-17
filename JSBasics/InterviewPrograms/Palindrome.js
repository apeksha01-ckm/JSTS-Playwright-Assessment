//number is palindrome or not logic , 121=121
//reverse it and then compare it with original number , if both are same then it is palindrome else not

let num=121;
let orgnum=num
let rev=0;
let rem=0;
while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);
    rev=rev*10+rem;
}
if (orgnum===rev)
{
    console.log(`${orgnum} is palindrome number`);

}
else
{
    console.log(`${orgnum} is not a palindrome number`);
}
