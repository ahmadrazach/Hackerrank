/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
    //spliting the string to arrays of
    // console.log(parseInt(Math.sqrt()))
    let row=parseInt(Math.sqrt(s.length))
    let col=row+1
    console.log(row,col)
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++)
        {
            console.log(s,s.substr(i,j))
        }
        
    }
    
    console.log(s.substr(1,3)) 
    return s.split("",2)
}

console.log(encryption("haveaniceday"))