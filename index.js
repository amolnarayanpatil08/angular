var rect={
    perimeter:(l,b)=>(2*(l+b)),
    area:(l,b)=>(l*b)
};

function solve(l,b)
{
    console.log("solving for" +l + " and " + b);
    if(l<=0|| b<=0)
        console.log("Length or bredth cant be zero");
    else
    {
        console.log("The perimeter of rectangle is:" + rect.perimeter(l,b));
        console.log("The area of rectangle is:" + rect.area(l,b));

    }
}

solve(2,3);
solve(0,5);
solve(4,5);
