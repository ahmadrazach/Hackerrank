/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
//converting the number into the string-> spliting eac number into array->converting it back to int 
var digits = n.toString().split('').map(iNum => parseInt(iNum, 10));
//loop till the n size
//check if digit's modulus by n is zero?save in a counter:pass

}

findDigits(124)
