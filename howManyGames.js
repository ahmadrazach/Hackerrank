/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    //1- first game of p
     let count=0
    //2 - loop where cost start from p and end when cost >=s;cost+=p
    
    while(s>=p)
       {
        
        
        count++
        s-=p;
        p=Math.max(p-d,m)
        // cost+=p
        }
    
    return count
}

console.log(howManyGames(20,3,6,85))