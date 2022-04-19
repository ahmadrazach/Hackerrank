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
    //comparing al values to BIG_INT before comparison
    // bc=BigInt(bc);
    // ec=BigInt(wc);
    // b=BigInt(b);
    // w=BigInt(w);
    // z=BigInt(z);
    // if(bc+z===wc || bc===wc) {
    //     // console.log('equals')
    //     return b*bc+w*wc}
    // // bc+z>wc ->return b*bc+w*wc
    // else if(bc+z>wc && (z+wc)>bc){
    //     // console.log('bc+z>wc')
    //     return b*bc+w*wc}
    
    // //? bc>wc+z -> return (b+w)*1+b*1
    // else if(bc>wc+z && b!=w) {
    //     // console.log('this b!=w')
    //     return (b+w)*z+b*z} 
    // // bc>wc+z -> return w*(wc+z)+w*z 6=6
    // else if(bc>wc+z && b===w) {
    //     // console.log('this')
    //     return w*(wc+z)+w*wc} 
    // // wc>bc+z -> return b*(bc+z)+b*bc 9+6=15
    // else if( wc>bc+z){
    //     // console.log('wc>bc+z')
    //     return b*(bc+z)+b*bc
    // }
    // const [$, _, S] = [BigInt, Math.min, String];
    // return S($(b) * $(_(bc, wc + z)) + $(w) * $(_(wc, bc + z)));
    // }
    return BigInt(b)*(bc<wc+z?BigInt(bc):BigInt(wc+z))+BigInt(w)*(wc<bc+z?BigInt(wc):BigInt(bc+z))
}

console.log(taumBday(5,9,2,3,4))