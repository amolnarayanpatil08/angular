var rect=require('./rectangle');

function solve(l,b)
{
    console.log("solving for" +l + " and " + b);
    rect(l,b,(err,rectangle)=>{
        if(l<=0|| b<=0)
        console.log("ERROR" + err.message);
        else
        {
            console.log("The perimeter of rectangle is:" + rectangle.perimeter());
            console.log("The area of rectangle is:" + rectangle.area());
    
        }
    });
   
   
}

solve(2,3);
solve(0,5);
solve(4,5);
