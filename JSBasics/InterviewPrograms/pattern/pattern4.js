for(let r=1;r<=4;r++)
{
    let row="";           //emty string to store the row wise result
    for(let c=1;c<=r;c++)  
    {
        row=row+" "+r;    //space is given before c to print the number in proper format
    }
    console.log(row);
}

//output :
// 1          one row one value printted
// 2 2         second row two value printted
// 3 3 3        third row three value printted
// 4 4 4 4       fourth row four value printted