/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here

    //1- sort the array
    //2- loop of i from 0 - arr.length-2
    //3- loop of j from i+1 - arr.length-1
    //4- loop of k from j+1 - arr.length
    //5- check if arr[j]-arr[i]=arr[k]-arr[j]=d  ? count+=1
    //return count
}

console.log(beautifulTriplets(1,[2,2,3,4,5]))