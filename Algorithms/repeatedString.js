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
    //take the length of the string s
    let matching_num=/a/g; //regular expression for matching
    if(s.match(matching_num).length===s.length){
        return n
    }
    const string_length=s.length;
    let copiedstring=s;
    let s_index=0

     //loop to give length and apeending the string s to size n
    while(s.length<n){
        //pushing value of s into the s 
        s+=s[s_index]
        console.log('aya',s.length,s)
        s_index++
    }
    console.log(s.length,n)
    console.log(s)
   
    return s.match(matching_num).length
}


console.log(repeatedString('ababa',3))