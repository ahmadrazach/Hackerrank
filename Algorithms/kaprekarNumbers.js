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
    console.log('square',square)
    let num_digits=num.toString().length
    //4- Square no. should equal to 2xd or 2xd-1
    console.log ( ((square.toString().length)===(2*num_digits)) || ((square.toString().length)===(2*num_digits-1)))
    //5- split no. into 2 substrings
    // console.log(square.toString().match(/.{1}/g))
    size=(square.toString().length/2).toString()
    console.log(size)
    var regex = new RegExp(".{"+ size+"}", 'g' );
    let substrings=square.toString().match(regex)
    console.log(substrings)
    //6- right substring should be equal to the digit
    console.log("right->",num_digits===substrings[1].length)

    //7- convert substrings to int, add them to see if we get the n
    console.log((parseInt(substrings[0])+parseInt((substrings[1]))===num))
    
    return num
    //8- return true or false w.r.t no. 7
}
function kaprekarNumbers(p, q) {
    // Write your code here
    
    //1- Loop from range p,q
    for(let num=p;num<=q;num++)
    {
        //2- take number as temp and pass it to function
        console.log(kaprekarCheck(num))
        //9- if returns true ,add the no in string + space
    }
     
    //10- if string.length>1 return string else INVALID 
}
console.log(kaprekarCheck(98))
// console.log(kaprekarNumbers(1,100))