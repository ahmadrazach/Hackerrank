/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    
    //1- intialize 2d array of n empty arrays
    let arr = [...Array(n)].map(e => Array(0));

    //2- let lastAnswer=0
    let lastAnswer=0

    //3- splitting the queries in lines
    var lines = queries.split('\n');
    console.log(lines)
    //4- loop to the length of string queries
    for ( string_queries in lines)
    {
        //5- splitting the lines in number of array
        var NQ = lines[string_queries].split(' ').map(Number);
        console.log(NQ)

        
        //6- queries
        //6.1 - if NQ[0]===1 ?  let idx=(((x && !lastAnswer) || (!x && lastAnswer))%n ) arr[idx]=NQ[2]
        // 6.2 - if NQ[0]===2 ? let idx=(((x && !lastAnswer) || (!x && lastAnswer))%n ); lastAnswer=arr[idx][arr[2]%arr[idx].length]
        
        //make an xor condition in javascript
    // let idx=(((x && !lastAnswer) || (!x && lastAnswer))%n )
    // if (idx===0){
    //     //pushing it according to rule
    //     arr[idx].push(7)
    //     // console.log(arr[idx][])
    // }
    }
    



    // let lastAnswer=0
    // let x=0
    
    // let arr = [...Array(n)].map(e => Array(0)); // defining 2d array if n empty elements

    // //make an xor condition in javascript
    // let idx=(((x && !lastAnswer) || (!x && lastAnswer))%n )
    // if (idx===0){
    //     //pushing it according to rule
    //     arr[idx].push(7)
    //     // console.log(arr[idx][])
    // }
    // console.log(queries)
    // console.log(arr)

}

console.log(dynamicArray(2,"1 0 5\n1 1 7\n1 0 3\n2 1 0\n2 1 1"))