/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    // Write your code here
    //take first loop for the 1st element of string
    //take second loop to the 2nd element of the arry
    //take 1st elemet for ..liek here is 4

    let ourRegex=/[0-9]/g
    //replacing nextline with the array ant and saving in the array
    topic_array=topic.replace(/\n/g," ").split(/ /)
    console.log("Converted array->",topic_array)
    //take 1st element to utni loop chlani hey
    let total_members=parseInt(topic_array[0])
    console.log("1st element->",total_members)
    let members_subject=topic_array.splice(2,total_members)
    console.log("Members Subject Array->",members_subject)
    console.log('For Loop\n');
    //slipting array in the 2d
    let members_subject_2d=[]
    for(let i=0;i<members_subject.length;i++){
        // console.log(members_subject[i].match(/1/g).length)
        members_subject_2d.push(members_subject[i].split(''))
        
        // console.log("Member ",i+1,)
        // for(let j=i+1;j<members_subject.length;j++)
        //     {
        //         console.log(members_subject[i][j])
        //     }
    }
    console.log("2d array -> ",members_subject_2d)
    //loop to check to compare the index of the two arrays
    console.log("Loop result \n" );

    //loop to take index of two arrays and compare them
    for(let i=0;i<members_subject_2d.length;i++)
    {
        console.log('2darray-> i ',i,)
        // //2nd array to compare
        // for(let second_array=i+1;second_array<members_subject_2d.length;second_array++){
        //     console.log('2darray-> j',second_array)
        // }  
        for(let j=0;j<members_subject_2d[i].length;j++)
        {
            console.log(i,j,"-",i+1,j)
        }
    }
    // console.log((topic_array.substring(,topic_array.indexOf(' '))))
}

acmTeam(`4 5
10101
11100
11010
00101`)