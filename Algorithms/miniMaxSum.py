#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#
from sys import maxsize


def miniMaxSum(arr):
    # Write your code here
    min = 0
    max = 0

    # loop i till the range
    for i in range(len(arr)):
        # loop j till the range
        sum = 0
        print(i)
        for j in range(len(arr)):
            # calculate sum if(i!=j)
            if(i != j):
                print(arr[j], end=" ")
                sum += arr[j]
            ##if sum<min : min=sum

            # elif sum>max: max=sum
        if(i == 0):
            min = sum
            max = sum
        else:
            if(sum < min):
                min = sum
            if(sum > max):
                max = sum
    print(min, " ", max)


miniMaxSum([1, 2, 3, 4, 5])
