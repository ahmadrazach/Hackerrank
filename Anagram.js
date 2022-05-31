function stringAnagram(dictionary, query) {
    // Write your code here
    //1- result_array=[]
    let result_array=[]
    // 2- let count =0
    
    //2- loop query_index from 0 to query
    for(let query_index=0;query_index<query.length; query_index++)
        {
        
            let count=0
            for(let dict_index=0;dict_index<dictionary.length;dict_index++)
            {
                if(query_index.length===dict_index.length && query[query_index].split('').sort().join('')===dictionary[dict_index].split('').sort().join(''))
                {
                    count+=1
                }

            }   
            result_array.push(count)        
        }
    //3- loop dict_index from 0 to dict_index
    //4- if(query_index.length()===dict_index.length && query_index.split('').sort().join('')===dict_index.split('').sort().join(''))-
    // ->count+=1
    //-> result_array.push(count)
    //5- return result_array
    return result_array;
 
}

console.log(stringAnagram(['hack','a','rank','khac','ackh','kran',"rankhacker",'a','ab','ba','stairs','raits'],['a','nark','bs','hack','stair']))