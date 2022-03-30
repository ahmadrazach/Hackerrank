/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */
//const eqIndex=(x)=>x;

function permutationEquation(p) {
    // Write your code here
   // console.log(p)
    p.unshift(0)
    // console.log(p)
    let loop=[]
    // loop to check
    //loop till the array size
    for (let i=1;i<p.length;i++)
    {
        //giving the position to the position of array
        loop.push(p.indexOf(p.indexOf(i)))
    }
    
    return(loop);
    

}


console.log(permutationEquation([2,3,1]))