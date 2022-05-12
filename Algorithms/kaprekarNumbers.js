/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */
function kaprekarCheck(num)
{
    //3- sqaure the no.
    let square= (num*num)
    // console.log('square',square)
    let num_digits=num.toString().length
    //4- Square no. should equal to 2xd or 2xd-1
    if( ((square.toString().length)===(2*num_digits)) || ((square.toString().length)===(2*num_digits-1)))
    {
        //5- split no. into 2 substrings
        let split=square.toString()
        // console.log(num_digits)
        let substrings=[split.slice(0,-num_digits),split.slice(-num_digits)]
        // console.log(substrings)
        
        //6- right substring should be equal to the digit
        if(num_digits===substrings[1].length)
        {
            
            //7- convert substrings to int, add them to see if we get the n
            if((parseInt(substrings[0])+parseInt((substrings[1]))===num))
            {
                return true
            }
            return false
        }
        else return false
        
        //8- return true or false w.r.t no. 7
    }
    return false
}

function kaprekarNumbers(p, q) {
    // Write your code here
    let result_string="";
    
    //1- Loop from range p,q
    for(let num=p;num<=q;num++)
    {    
        // console.log(num)
        //2- take number as temp and pass it to function
        if(kaprekarCheck(num)===true || num ===1)
        {
            //9- if returns true ,add the no in string + space
            result_string+=num+" ";
        }
        
        
    }
    //10- if string.length>1 return string else INVALID 
    if(result_string.length>0) console.log(result_string)
    else console.log("INVALID RANGE")
}
// console.log(kaprekarCheck(9))
kaprekarNumbers(1,300)