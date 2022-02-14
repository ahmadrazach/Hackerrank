#
# Complete the 'formingMagicSquare' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY s as parameter.
#
import sys


def formingMagicSquare(s):
    # Write your code here
    # convert it into 2d array
    flat_s = sum(s, [])
    # take all the magic syare
    magic = [[8, 1, 6, 3, 5, 7, 4, 9, 2], [6, 1, 8, 7, 5, 3, 2, 9, 4], [4, 3, 8, 9, 5, 1, 2, 7, 6], [2, 7, 6, 9, 5, 1, 4, 3, 8],  [
        2, 9, 4, 7, 5, 3, 6, 1, 8], [4, 9, 2, 3, 5, 7, 8, 1, 6], [6, 7, 2, 1, 5, 9, 8, 3, 4], [8, 3, 4, 1, 5, 9, 6, 7, 2]]
    # find the diffenerce between each MATRIX FROM MAGIC AND MAGIC SUARE
    # take loop till the len of the magic list
    minimumcost = sys.maxsize
    for i in magic:
        count = 0
        diff = 0
        # take the inner vaue of indexes and find difference with orginal given
        # print("diff = ", end=" ")
        for j in i:
            # print(count)
            #  print(flat_s[count], j)
            diff += abs(flat_s[count] - j)
            count += 1
        minimumcost = min(minimumcost, diff)
    return(minimumcost)


print(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
