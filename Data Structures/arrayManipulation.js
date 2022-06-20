/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    //1- make a 1d array of size n
    let arr = [...Array(n).fill(0)];
    // console.log(arr)
    //2- loop of size queries.length
    for(let query_index of queries)
    {
        // console.log(query_index)
        let starting_index=query_index[0]-1;
        while(starting_index<query_index[1])
        {
            arr[starting_index]+=query_index[2];
            starting_index++;
        }
        // console.log(arr)

    }
    //returning max value from the array
    return arr.reduce((a,b)=>{return Math.max(a,b)})

}

console.log(arrayManipulation(5, [[1,2,100],[2,5,100],[3,4,100]]));