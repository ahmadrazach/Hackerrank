/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */
function circularArrayRotation(a, k, queries){
    //console.log(());
    // console.log(n)
    // console.log(a)
    for ( let i=0;i<k;i++){
        //to take a variable from last and save on first    
        
        a.unshift(a.pop(a))
    }
    //  console.log(a)
    q_arr=[]
    // console.log(queries.length)
    for(let i=0;i<queries.length;i++){
        // console.log(queries[i])
        q_arr.push(a[queries[i]])
    }
    // console.log("ho gya")
    return q_arr;
    // console.log(q_arr)
    // return a ;
}

console.log(circularArrayRotation([3,1,2],2,[0,1,2]))