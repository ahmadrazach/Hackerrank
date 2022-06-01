/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here

    let newArray=arr.splice(d,arr.length)
    newArray.push(...arr)

    // console.log()
    return newArray
}

console.log(rotateLeft(4,[1,2,3,4,5]))