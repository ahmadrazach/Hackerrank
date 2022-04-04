/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    //loop till the 0,start from size,i--
    //multiple value with saved value

    let result=1
    count=1
    while(count<n)
    {
        count++
        result=result*count
        //console.log(count,result)
        
    }
    
    return BigInt(n)
}

console.log(extraLongFactorials(30))