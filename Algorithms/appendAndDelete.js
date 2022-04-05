/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here
    // take for loop to the steps, ulti chly 
    //->check if the string s char != t char
    //-> delete it
    //->check if the string
    for(let i=6;i>0;i--)
    {
        console.log(s.charAt(i))
    }

    return 'yes'
}


console.log(appendAndDelete("abc","def",6))