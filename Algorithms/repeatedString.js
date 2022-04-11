/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

// function repeatedString(s, n) {
//     // Write your code here
//     //check if the s has only one number and is equal to the n
//     //->return n
//     //take the length of the string s
//     let matching_num=/a/g; //regular expression for matching
//     if(s.match(matching_num).length===s.length){
//         return n
//     }
//     const string_length=s.length;
//     let copiedstring=s;
//     let s_index=0

//      //loop to give length and apeending the string s to size n
//     while(s.length<n){
//         //pushing value of s into the s 
//         s+=s[s_index]
//         console.log('aya',s.length,s)
//         s_index++
//     }
//     console.log(s.length,n)
//     console.log(s)
   
//     return s.match(matching_num).length
// }
function repeatedString(s, n) {
    // Write your code here
    //giving length of the matching a's -> ( s.match(/a/g) || []).length )
    a_in_string =(s.match(/a/g) || []).length 
    // matching a plus mutliplying it with repect to the size of n
    let count = ( a_in_string* Math.floor(n/s.length))
    console.log(count)
    let remainder = n % s.length
    console.log(remainder)
    // array.substring to take the element from 0 to the remainder value which is calculated in the remainder
    let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length
    // returning count and remainderCount

    return count + remainderCount
}
console.log(repeatedString('ceebbcb',817723))