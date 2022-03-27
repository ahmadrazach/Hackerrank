function circularArray(n){
    //console.log(());
    console.log(n)
    //to take a variable from last and save on first
    console.log(n.unshift(n.pop(n)))
    return n ;
}

console.log(circularArray([1,2,3,4,5]))