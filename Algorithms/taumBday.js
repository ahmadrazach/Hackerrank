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
    
    // // bc+z>wc ->return b*bc+w*wc

    
    // //? bc>wc+z -> return (b+w)*1+b*1

    // // bc>wc+z -> return w*(wc+z)+w*z 6=6

    // // wc>bc+z -> return b*(bc+z)+b*bc 9+6=15
   //converting al values to BIG_INT before comparison
    return BigInt(b)*(bc<wc+z?BigInt(bc):BigInt(wc+z))+BigInt(w)*(wc<bc+z?BigInt(wc):BigInt(bc+z))
}

console.log(taumBday(5,9,2,3,4))