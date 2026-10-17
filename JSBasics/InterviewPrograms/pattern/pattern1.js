//row--> column --> value
//code execution order is row wise
//for pattern examples , collect row wise result and column wise result and print 

for(let r=1;r<=4;r++) 
{
    let row="";           //emty string to store the row wise result
    for(let c=1;c<=5;c++)
    {
        row = row+ "* ";
    }
    console.log(row);
}

//output : 
// * * * * 
// * * * *
// * * * *
// * * * *

//for r=1 , c=1 , row="" , row=row+"* " => row="* "
//for r=1 , c=2 , row="* " , row=row+"* " => row="* * "
//for r=1 , c=3 , row="* * " , row=row+"* " => row="* * * "
//for r=1 , c=4 , row="* * * " , row=row+"* " => row="* * * * "
//for r=2 , c=1 , row="" , row=row+"* " => row="* "
//for r=2 , c=2 , row="* " , row=row+"* " => row="* * "

