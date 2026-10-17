for(let r=1;r<=4;r++)
    {
        let row="";           //emty string to store the row wise result
        for(let c=1;c<=r;c++)
        {
            row=row+" "+c;    //space is given before c to print the number in proper format
        }
        console.log(row);

    }
//output :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
//print columnvalue in each row
