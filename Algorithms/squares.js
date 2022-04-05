/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    // Write your code here
    //loop till all
    let count=0
    // for(let i=a;i<=b;i++)
    //     // Math.sqrt(i)==Math.round(Math.sqrt(i))?count+=1:null;
    //     Math.sqrt(i) % 1 === 0?count+=1:null;
    //square root ans in int?count++:null
    //finding the starting number
    start_sqaure_number=0
    for(let i=a;i<b;i++)
    {
        if(Math.sqrt(i) % 1 === 0)
        {
            start_sqaure_number=Math.sqrt(i)
            console.log("Milla",start_sqaure_number)
            break;
        }
    }
    console.log(start_sqaure_number)

    //checking agr koi milla hey
    if(start_sqaure_number!=0){
        //finding the last number
        last_sqaure_number=0
        for(let i=b;i>a;i--)
        {
            if(Math.sqrt(i) % 1 === 0)
            {
                last_sqaure_number=Math.sqrt(i)
                console.log("Milla",last_sqaure_number)
                break;
            }
        }
        console.log(last_sqaure_number)


        
        //all the numbers in the range
        while(start_sqaure_number!=last_sqaure_number){
            start_sqaure_number+=1
            count+=1
            
        }
    }
    else if(a==b && Math.sqrt(a) % 1 === 0){return count+1}
    else
    return count
    


    //return number
    return count+1
}

console.log(squares(3, 9))