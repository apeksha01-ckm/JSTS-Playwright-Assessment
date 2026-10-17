//output :
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let count=1; //count variable to store the value to be printed
for(let r=1;r<=4;r++)
{
    let row="";           //emty string to store the row wise result
    for(let c=1;c<=r;c++)
    {
        row=row+" "+ count;    //space is given before c to print the number in proper format
        count++; //increment the count variable after printing the value
    
    }
    console.log(row);
}