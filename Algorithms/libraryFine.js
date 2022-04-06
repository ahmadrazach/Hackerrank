/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
        // (y2===y1 ? (m2 === m1?( d2===d1 ?fine=fine :15*(d2-d1) ): ):y2>y1)
    // y2===y1 
    //     ? m2 === m1?
    //         d2===d1 
    //             ? fine=fine 
    //             : 15*(d2-d1) 
    //             : pass
    //             : y2>y1 
    // if(y2===y1){
    //     console.log("year equal")
    //     if(m2===m1){
    //         console.log("month equal")
    //         //condition 1
    //         if(d2===d1){
    //             console.log("c1 : true ")
    //         }
    //         //condition 2
    //         else{
    //             console.log("c2 : true ")
    //             fine =15*(d1-d2)
    //         }
    //     }
    //     //condition 3
    //     else{

    //     }
    // }
    
    let fine =0
    // const month_days=30

    //condtitoon 1
    if(y2===y1&&m2===m1&&d2===d1){
        return fine
    }
    //condition 2
    else if(y2===y1&&m2===m1&&d1>d2)
    {
        // console.log("c2")
        return 15*(d1-d2)
    }
    //condition 3
    else if(y2===y1&&m1>m2)
    {
        //console.log("c3")
        return 500*(m1-m2)
    }
    //condition 4
     else if(y1>y2)
     {
         //console.log("c4")
         return 10000
     }    

    return fine;
}

console.log(libraryFine(2,7,2015,1,2,2014))