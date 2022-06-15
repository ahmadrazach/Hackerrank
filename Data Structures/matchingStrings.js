/* Complete the 'matchingStrings' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts following parameters:
*  1. STRING_ARRAY strings
*  2. STRING_ARRAY queries
*/

function matchingStrings(strings, queries) {
   // Write your code here
   //1- loop i from 0 to queries.length
   let result_array=[]
    //2- count variable to check every query count

   for(let i of queries)
   {
        //3- loop from j to strings.length
   
       let count=0;
       for(let j of strings)
       {
           //4- compare them ? count++ and pop out the element from the strings so that next time we have to iterate few elements : 
            //5- put them in result_array.push(count)
           if (i===j){
            //    console.log(i)
               count++;
           }
       }
    //    console.log(strings)
       result_array.push(count)
   
   }
   
    return result_array;
}

console.log(matchingStrings(['ab','ab','abc'],['ab','abc','bc']))