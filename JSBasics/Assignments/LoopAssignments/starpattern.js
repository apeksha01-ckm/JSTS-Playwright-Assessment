/*9.Decreasing Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print the following pattern:
***** //when row 5 print 5 , row is 4 prin 4 star
****
***
**
* 
*/

for(let r=5;r>=1;r--)
{
    let row="";
    for(let c=1 ;c<=r;c++)
    {
        
        row=row+ "* ";
    }
    console.log(row);
}