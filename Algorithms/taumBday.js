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
    // bc+z===wc || bc===wc -> return b*bc+w*wc
    // bc+z>wc ->return b*bc+w*wc
    //? bc>wc+z -> return (b+w)*1+b*1
    // bc>wc+z -> return w*(wc+z)+w*z 6=6
    // wc>bc+z -> return b*(bc+z)+b*bc 9+6=15
}

console.log(taumBday(3,5,3,4,1))