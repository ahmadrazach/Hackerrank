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

    let ansArray=[]
    let idx=0
    //3- splitting the queries in lines
    var lines = queries.split('\n');
    // console.log(lines)
    //4- loop to the length of string queries
    for ( string_queries in lines)
    {
        //5- splitting the lines in number of array
        var NQ = lines[string_queries].split(' ').map(Number);
        // console.log(NQ)

        let idx=0
        x=NQ[1]

        // console.log("last Answer :",lastAnswer,"\narr[0]",arr[0],'\narr[1]',arr[1])
        //6- queries
        //6.1 - if NQ[0]===1 ?  let idx=(((x && !lastAnswer) || (!x && lastAnswer))%n ) arr[idx]=NQ[2]
        if(NQ[0]===1)
        {
            
            idx=(((x ^ lastAnswer))%n )
            arr[idx].push(NQ[2])
            // console.log('idx',idx,'lastAnswer',lastAnswer,'arr[',idx,'] ',arr[idx])
        }
        // 6.2 - if NQ[0]===2 ? let idx=(((x && !lastAnswer) || (!x && lastAnswer))%n ); lastAnswer=arr[idx][arr[2]%arr[idx].length]
        else if (NQ[0]===2)
        {
            idx=(((x ^ lastAnswer))%n )
            // console.log('index',arr[idx][NQ[2]%arr[idx].length])
            lastAnswer=arr[idx][NQ[2]%arr[idx].length]
            console.log(lastAnswer)
            // console.log('idx',idx,'lastAnswer',lastAnswer,'size(arr[idx])',arr[idx].length)
        }
    }
    
}

dynamicArray(2,"1 0 5\n1 1 7\n1 0 3\n2 1 0\n2 1 1")