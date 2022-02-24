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
    #print(n, "\n", queries)
    # intialize 2d array named as arr
    arr = [[], []]
    # arr[0]. append([10, 20])
    # print(arr)
    # initialize var with named lastAnswer
    lastAnswer = 0
    # take a loop till the n[1]- (5) times
    # print(arr[0])
    for i in range(len(queries)):
       # print(queries[i])
        # for j in range(len(queries[i])):
        #     print(queries[i][j])
        # print()
        # Query 1
        idx = ((queries[i][1] ^ lastAnswer) % n[0])
        y = queries[i][len(queries[i])-1]
        if queries[i][0] == 1:
            print("Query 1")

            # print(idx)
            # print()
            arr[idx].append(y)

        # Query 2
        elif(queries[i][0] == 2):
            print("Query 2")
            #idx = ((queries[i][1] ^ lastAnswer) % n[0])
            #y = len(queries[i])-1
            # index=y % len(arr[idx]
            print("len ", len(arr[idx]))
            print("y ", y)
            print("index= ", (y % (len([idx]))), " arr = [", idx, "]")
            lastAnswer = arr[idx][y % len(arr[idx])]
            print("Last Answer =", lastAnswer)
        else:
            print("pta nhn kera")

        # printing results
        print("arr[0]", arr[0])
        print("arr[1]", arr[1])
        print("lastAnsweers ", lastAnswer)
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
