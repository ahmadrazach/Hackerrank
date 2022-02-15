#
# Complete the 'pickingNumbers' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

def pickingNumbers(a):
    # Write your code here
    # a_list = []
    max = 0
    count = 0
    a.sort()
    # print(a)
    # print(a)
    # # loop till the all of a
    for i in range(len(a)):
        #     # loop with inner loop
        # print(i, "st:")
        for j in range(i+1, len(a)):
            #         # for
            #         print(i, a[j], " = ", abs(i-a[j]), end=" ")
            # print(a[i], a[j])
            if abs(a[i]-a[j]) <= 1:
                count += 1
                # print("andr")
        if count > max:
            max = count
            # print(max)
        count = 0

    return max + 1


print(pickingNumbers([4, 6, 5, 3, 3, 1]))
