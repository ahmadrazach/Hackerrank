/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */
// MY APPROACH
function beautifulTriplets(d, arr) {
    // Write your code here
    let count=0;
    //1- loop of i from 0 - arr.length-2
    for(let i=0;i<arr.length-2;i++)
        //2- loop of j from i+1 - arr.length-1
        for(let j=i+1;j<arr.length-1;j++)
            //3- loop of k from j+1 - arr.length
            for(let k=j+1;k<arr.length;k++)
             //4- check if arr[j]-arr[i]=arr[k]-arr[j]=d  ? count+=1
              if(arr[j]-arr[i]===d & arr[k]-arr[j]===d)
                count++;
    
    
   
    return count
}


// Efficient approach
// function beautifulTriplets(d, arr) {
//     let result = 0;
//     // traverse through all the array
//     for (let i = 0; i < arr.length; i++) {
//         //taking n0.s which should be there if arr[j]-arr[i]=d =arr[k]-arr[j]
//         const numb1 = arr[i] - d;//shouled be arr[j]
//         const numb2 = numb1 - d;//should be arr[k]
//         if (arr.includes(numb1) && arr.includes(numb2)) {
//             result += 1;
//         }
//     }
//     return result;
// }

console.log(beautifulTriplets(3,[1, 6, 7, 7, 8 ,10, 12, 13, 14 ,19]))