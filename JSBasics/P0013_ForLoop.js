//Factorial of a number using for loop 5

let fact =1;
for(let i=5;i>=1;i--)
{
fact=fact*i;
}
console.log("Factorial of 5 is:" +fact);

//Sum of 100 naturas numbers using for loop , 1+2+3+.....+99+100
let sum=0;
for(let i=1;i<=100;i++)
{
    sum=sum+i;
}
console.log("Sum of 100 natural numbers is :" +sum);

//print all even numbers 1 to 20
//== checks the values and can convert their data types before comparing
//=== checks both the values and their data types without converting them.(preferred)
for(let i=2;i<=20;i++)
{
    if(i%2===0)
    {
        console.log(i);
    }
}

//While Loop
//print hello 5times using while loop
let i=1;                 //initialization
while(i<=5)               //condition
    {
    console.log("Hello");  //statement
    i++;                   //increment/decrement
}


