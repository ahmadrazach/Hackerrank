#
# Complete the 'dynamicArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def dynamicArray(n, queries):
    # Write your code here
    print(n, "\n", queries)
    # intialize 2d array named as arr
    # initialize var with named lastAnswer
    # take a loop till the n[1]- (5) times
    # --if the first element of queries is 1 implement q1
    # ----arr(arr[loop time][2nd elment of queries 1d]^lastanswer)%n).append([last element if queries])
    # --if first element of queries[i][j]==2
    # ----idx=arr[loop time][2nd elment of queries 1d]^lastanswer)%n
    # ----assign the value of arr[idx][y%size(arr[idx])] to lastAswaer
    # ----print lastAnswer


dynamicArray([2, 5], [[1, 0, 5], [1, 1, 7],
                      [1, 0, 3],
                      [2, 1, 0],
                      [2, 1, 1]])
