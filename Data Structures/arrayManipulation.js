/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 * 
 * optimized code help : https://medium.com/@Kliative/array-manipulation-hacker-rank-javascript-5a702c1ff044
 */

/*  solution with complexity O(n^2)
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
*/
// Complexity -> O(n)
function arrayManipulation(n,queries){
    //1- making a 1d array
    let arr = [...Array(n).fill(0)];
    let maxValue = 0,
    currentNumber = 0;

    //2- loop to each query and giving start and end range value 
    queries.forEach(([startRange, endRange, value]) => {
         arr[startRange] = arr[startRange] || { start: 0, end: 0 };
         arr[endRange] = arr[endRange] || { start: 0, end: 0 };
         arr[startRange].start += value;
         arr[endRange].end += value;
     });
    
     //3- loop to each arr iteration to check where the maximum value lies w.r.t iteration
    arr.forEach((cell) => {
       if (cell) {
         currentNumber += cell.start;
         if (currentNumber > maxValue) {
            maxValue = currentNumber;
         }
         currentNumber -= cell.end;
     }
   });
//4- returning maxValue
 return maxValue;
}
console.log(arrayManipulation(5, [[1,2,100],[2,5,100],[3,4,100]]));