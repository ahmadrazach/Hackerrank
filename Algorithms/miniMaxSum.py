#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#
from sys import maxsize


def miniMaxSum(arr):
    # Write your code here
    min = 0
    max = maxsize
    sum = 0
    # loop i till the range
    # loop j till the range
    # calculate sum if(i!=j)
    ##if sum<min : min=sum
    # elif sum>max: max=sum
    print(min, " ", max)


miniMaxSum([1, 3, 5, 7, 9])
