/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    console.log(p)
    p.unshift(0)
    console.log(p)
    loopi=[]
    // loop till the array size
    for (let i=1;i<p.length;i++)
    {
        console.log("x=",i,"=== p[",p.indexOf(p[i]),"]",", p[",p[p[i]],"]")
        loopi.push(p[p[i]])
    }
    console.log(loopi)
        

    

}


console.log(permutationEquation([5,2,1,3,4]))