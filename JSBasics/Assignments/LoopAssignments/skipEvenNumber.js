/*.Skip Even Numbers
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.
*/
for(let i=1; i<=20;i++)
{
    if(i%2===0)
    {
        continue;
    }
    console.log(i);
}