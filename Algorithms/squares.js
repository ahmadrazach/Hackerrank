/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    // Write your code here
    //loop till all
    count=0
    for(let i=a;i<=b;i++)
        Math.sqrt(i)==Math.round(Math.sqrt(i))?count+=1:null;
    //square root ans in int?count++:null
    //return number
    return count
}

console.log(squares(24,49))