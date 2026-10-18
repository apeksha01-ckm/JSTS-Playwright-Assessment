/*6.Stop the Loop at a Specific Number
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.*/

for(let i=1; i<=20;i++)
{
    if(i===10)
    {
        break;
    }
    console.log(i);
}