#
# Complete the 'dynamicArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def dynamicArray(n, queries):
    arr = [[], []]
    # arr[0]. append([10, 20])
    # print(arr)
    # initialize var with named lastAnswer
    lastAnswer = 0
    answers = []
    # take a loop till the n[1]- (5) times
    # print(arr[0])
    for i in range(len(queries)):
        a_list = queries[i].split()
        map_object = map(int, a_list)
        new_queries = list(map_object)

    for i in range(len(queries)):
       # print(queries[i])
        # for j in range(len(queries[i])):
        #     print(queries[i][j])
        # print()
        # Query 1

        idx = ((queries[i][1] ^ lastAnswer) % n[0])
        y = queries[i][len(queries[i])-1]
        if queries[i][0] == 1:
            # print("Query 1")

            # print(idx)
            # print()
            arr[idx].append(y)

        # Query 2
        elif(queries[i][0] == 2):
            # print("Query 2")
            #idx = ((queries[i][1] ^ lastAnswer) % n[0])
            #y = len(queries[i])-1
            # index=y % len(arr[idx]
            # print("len ", len(arr[idx]))
            # print("y ", y)
            # # print("index= ", (y % (len([idx]))), " arr = [", idx, "]")
            lastAnswer = arr[idx][y % len(arr[idx])]
            # print("Last Answer =", lastAnswer)
            answers.append(lastAnswer)
            print(lastAnswer)
        else:
            print("pta nhn kera")

        # printing results
        # print("arr[0]", arr[0])
        # print("arr[1]", arr[1])
        # print("lastAnsweers ", lastAnswer)

    # return(answers)


dynamicArray([2, 5], ["1 0 5", "1 1 7", "1 0 3", "2 1 0", "2 1 1"])
