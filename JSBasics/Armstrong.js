//to check number is armstrong or not logic , 153=1^3+5^3+3^3=153
//Math.floor() is used to round down the number to the nearest integer , if 6.6666 ,give only 6 removes after digit

let num=153 ,rem , res=0; 
let orgnum=num;   //because we are changing the value of num in while loop , so we need to store original number in orgnum
while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);
    res=res+rem*rem*rem; //or res=res+Math.pow(rem,3); 
    
}
if(orgnum===res)
{
    console.log(`${orgnum} is armstrong number`);

}
else
{
    console.log(`${orgnum} is not armstrong number`);
}


//res=res+rem*rem*rem
//res=0 , rem=3 => res=0+3*3*3=27
//res=27 , rem=5 => res=27+5*5*5=27+125=152
//res=152 , rem=1 => res=152+1*1*1=152+1=153