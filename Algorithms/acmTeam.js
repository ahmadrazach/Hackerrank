/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

// counting max team occurences
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

function acmTeam(topic) {
    // Write your code here
    let ourRegex=/[0-9]/g
    //replacing nextline with the array ant and saving in the array
    topic_array=topic.replace(/\n/g," ").split(/ /)
    //console.log("Converted array->",topic_array)
    //take 1st element to utni loop chlani hey
    let total_members=parseInt(topic_array[0])
    //console.log("1st element->",total_members)
    let members_subject=topic_array.splice(2,total_members)
    //console.log("Members Subject Array->",members_subject)
    //console.log('For Loop\n');
    //slipting array in the 2d
    let members_subject_2d=[]
    for(let i=0;i<members_subject.length;i++){
        // //console.log(members_subject[i].match(/1/g).length)
        members_subject_2d.push(members_subject[i].split(''))
        
    }
    //console.log("2d array -> ",members_subject_2d)
    //console.log("Possiblilites \n" );
    //looping to check al possible comparisons and saving the indexes_sum + max
   
    let teams_total=[]
    let max_subjects=0
    for(let row=0;row< members_subject_2d.length;row++){
        for(let row2=row+1 ;row2<members_subject_2d.length;row2++){
            //console.log(members_subject_2d[row],members_subject_2d[row2])
            //checking the comparison
            let indexes_sum=0
            for(let index=0;index<members_subject_2d[row].length;index++ ){
                (members_subject_2d[row][index]==='1'||members_subject_2d[row2][index]==='1'?indexes_sum++:indexes_sum=indexes_sum)
                //console.log(members_subject_2d[row][index],members_subject_2d[row2][index])
                //if both are index have 1 ? indexes_sum ++:indexes_sum=indexes_sum

            }
            //console.log(indexes_sum)
            teams_total.push(indexes_sum)
            //if indexes_sum > max_subjects -> max_subjects=indexes_sum:index_sum===max_subjects?
            if(indexes_sum>max_subjects){
                max_subjects=indexes_sum
            }

        }

        
    }
    // console.log(max_subjects)
    // console.log(teams_total)
    // //counting occurences of max subject topics between teams
    // console.log("total teams ",countOccurrences(teams_total, max_subjects) )
    // console.log("max : ",max_subjects)
    return [max_subjects,countOccurrences(teams_total, max_subjects)]
}

console.log(acmTeam(`6 5
11101
10101
11001
10111
10000
01110`))
