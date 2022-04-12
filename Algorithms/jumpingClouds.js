/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let steps=0
    let cloud_index=0
    while(cloud_index<c.length-1){
        if(c[cloud_index+2]===0)
        {
            steps++;cloud_index+=2
        }
        else if(c[cloud_index+1]===0)
        {
            steps++;cloud_index++
        }
        // console.log(steps,cloud_index)
    }
return steps
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))