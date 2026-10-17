

for(let r=1;r<=4;r++)
{
    let row="";           //emty string to store the row wise result
    for(let c=1;c<=r;c++)
    {
        row=row+ "* ";

    }
    console.log(row);
}

//output :
// * 
// * * 
// * * * 
// * * * *
//for r=1 , c=1 , row="" , row=row+"* " => row="* "
//for r=2 , c=1 , row="" , row=row+"* " => row="* "
//for r=2 , c=2 , row="* " , row=row+"* " => row="* * "
//for r=3 , c=1 , row="" , row=row+"* " => row="* "
//for r=3 , c=2 , row="* " , row=row+"* " => row="* * "
//for r=3 , c=3 , row="* * " , row=row+"* " => row="* * * "
//for r=4 , c=1 , row="" , row=row+"* " => row="* "
//for r=4 , c=2 , row="* " , row=row+"* " => row="* * "
//for r=4 , c=3 , row="* * " , row=row+"* " => row="* * * "
//for r=4 , c=4 , row="* * * " , row=row+"* " => row="* * * * "
