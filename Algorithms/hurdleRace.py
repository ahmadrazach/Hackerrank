#
# Complete the 'hurdleRace' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY height
#

def hurdleRace(k, height):
    # Write your code here
    # find max from the k

    # if max_k < =height:
    if max(k) <= height:
        # return 0
        return 0
    # else:
    else:
        # return max(k)-height
        return max(k)-height


print(hurdleRace([1, 6, 3, 5, 2], 4))
