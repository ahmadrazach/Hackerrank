/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    const ans=BigInt(b*(bc<wc+z?bc:wc+z)+w*(wc<bc+z?wc:bc+z))
    return ans
}


console.log(taumBday(742407782 ,90529439,
    847666641 ,8651519 ,821801924))