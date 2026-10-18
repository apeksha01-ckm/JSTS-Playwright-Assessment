/*8.Print a 5 × 5 Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
*****
*****
*****
*****
***** 
*/


for(let r=1; r<=5;r++)
{
    let row = "";
    for(let c=1;c<=5;c++)
    {
        row = row+ "* ";
    }
    console.log(row);
    
}
