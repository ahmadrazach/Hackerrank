/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    //check if the s has only one number and is equal to the n
    //->return n
    //append the numbers to the
    let matching_num=/a/g; 
    return s.match(matching_num).length
}


console.log(repeatedString('aba',10))