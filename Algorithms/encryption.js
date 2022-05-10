/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
    
    //1. remove spaces from string
    console.log(s.replace(/\s+/g,''))
    s=s.replace(/\s+/g,'')
    // console.log(s)
    //2. taking  square root and finding length
    let row=parseInt(Math.sqrt(s.length))
    let col=row+1
    //3. looping 
    let result_string="";
    let temp_index=0
    for(let index=0;index<col;index++){
        temp_index=index
        result_string+=s[temp_index]
        
        for(let i=0;i<row;i++)
        {
            temp_index+=col
            // console.log(temp_index,s[temp_index])
            if(temp_index<s.length)
            {result_string+=s[temp_index]}
        }

        result_string+=" ";
        console.log(result_string)
    }
    
    return result_string
}

console.log(encryption("haveaniceday"))