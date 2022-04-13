/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    // Write your code here
    let delete_no=0
    //sort the array
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++)
    {
        
        if((i!=arr.length-1&&arr[i]!=arr[i+1])||(i===arr.length-1&&arr[i]!=arr[i-1]))
        {
            delete_no++;
            // console.log(arr[i],delete_no)
        }
    }
    return delete_no;
    //if the next index is not same?count++:

}

console.log(equalizeArray([3, 3, 2, 1, 3 ]))