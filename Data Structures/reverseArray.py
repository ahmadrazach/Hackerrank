#
# Complete the 'reverseArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY a as parameter.
#

def reverseArray(a):
    # Write your code here
    # toop till the full array
    temp_array = []
    for index in range(len(a)-1, -1, -1):
        # take the first elment and add it to the temp_array
        temp_array.append(a[index])
        # remove element from that index
        # print(a[index])
        # a.append(a[index])

    return(temp_array)


print(reverseArray([1, 4, 3, 2]))
