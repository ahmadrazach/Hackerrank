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
     let game=2
    //2 - loop where cost start from p and end when cost >=s;cost+=p
    for(let cost=p;cost<=s;cost+=p)
       {
        console.log(cost)
        if(cost<=m)
        {p-=d}
        game++
        }
    //3-  if cost>m:p-=d 
    //4-  game++
    return game
}

console.log(howManyGames(20,3,6,85))