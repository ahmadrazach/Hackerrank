#
# Complete the 'utopianTree' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

def utopianTree(n):
    # Write your code here
    # for i in len(int(n)):
    # print(n)
    height = 0
    for i in range(0, n+1):
        # print(i)
        # print(i)
        # pass
        # if odd (1,3,5,7,9)
        if (i % 2 != 0):
            # height*=1
            if(i == 1):
                height = 2
            else:
                height *= 2
            # print("odd :", height)
        # if even (2,4,6,8)
        else:
            height += 1
            # print("even :", height)
        # height+=2
    return(height)


print(utopianTree(4))
