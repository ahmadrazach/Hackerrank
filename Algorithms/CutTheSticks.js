/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here
    //while all are not the same
    let smallest_num=0
    arr.sort()
    let sticks_at_each_count=[arr.length]
    while(arr.every(v => v === arr[0])===false)
    {
    //     //1,2,3
            console.log("loop")
            smallest_num=arr[0] 
             //take out the smallest_num/s from the array
            arr = arr.filter((number) => number > smallest_num);
            console.log("Filter num",arr)
            //subtracting every element with the smallest num
            arr=arr.map((number)=>number-1)
            console.log("after subtraction of smallest number : ",arr)
            sticks_at_each_count.push(arr.length)
    //     //reduce every element to the smallest number
    //      smallest_num=Math.min(...arr)
           

            //difference with smallest_num with all the number

    // console.log(arr)
    }
    return sticks_at_each_count
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]))