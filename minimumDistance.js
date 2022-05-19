/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    //  let min_dis=-1
    let min_dist=10000
    // 1- take a loop i=0 to a.length-1
    for(let i=0;i<a.length-1;i++)
    // 2- take a loop from j=i+1 to a.length
        for(let j=i+1;j<a.length;j++)
    // 3- if a[j]-a[i]===0 && abs(j-i)<min ? min=abs(j-1):pass
            if(a[j]-a[i]===0 && Math.abs(j-i)<min_dist)
            {
                min_dist=Math.abs(j-i)
            } 

    if(min_dist===10000)
    return(-1)
    return(min_dist)
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))