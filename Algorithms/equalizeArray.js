/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    // Write your code here
    var mf = 1; // most frequent no. that's reqpeating globally
    var m = 0; //most frquqnet no. to check in a loop
    // var item;
    for (var i=0; i<arr.length; i++)
    {
            for (var j=i; j<arr.length; j++)
            {
                    if (arr[i] == arr[j])
                     m++;
                    if (mf<m)
                    {
                      mf=m; 
                    //   item = arr[i];
                    }
            }
            m=0;
    }

    return arr.length-mf
}

console.log(equalizeArray([3, 3, 2, 1, 3]))