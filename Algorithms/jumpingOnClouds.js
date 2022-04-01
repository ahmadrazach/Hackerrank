// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c,k) {

    let energy=100
    for(let i=0;i<c.length;i+=k)
    {
        energy-=1
        if(c[i]==1){
            energy-=2
        }
                
        console.log("i= ",i,"c[i]",c[i],"energy =",energy)
    }
    return energy;
    
}

console.log(jumpingOnClouds([1 ,1, 1, 0, 1, 1 ,0 ,0 ,0, 0],3))