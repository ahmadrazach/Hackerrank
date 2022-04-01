// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c,k) {

    for(let i=0;i<c.length;i++)
    {
        console.log((i+k)%c.length)
    }
    
    
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0],2)