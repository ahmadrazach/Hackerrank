#
# Complete the 'angryProfessor' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY a
#

def angryProfessor(k, a):
    # Write your code here
    onTime=0
    # loop till the lenth of array
    for i in a:
    # count the negative values
        if(i<=0):
            onTime+=1
    # if negative values greater than or equal to thresholg
    if(onTime<k):
    # return yes
        return "YES"
    # else NO
    return "NO"


print(angryProfessor(2, [0, -1, 2, 1]))
