#
# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def hourglassSum(arr):
    # Write your code here
    max_square_sum = 0
    # 1st section
    for square_count in range(0, 4):
        #print("count = ", square_count)
        count_square_sum = 0
        for r in range(0, 3):

            r1 = 0
            for c in range(0+square_count, 3+square_count):
                if r != 1:
                    count_square_sum += arr[r][c]
                    print(arr[r][c], end=" ")

                # agr second row hey
                if r == 1:
                    # count hwo much times second row runs
                    if r1 == 1:
                        print(" ", arr[r][c], end=" ")
                        count_square_sum += arr[r][c]
                    r1 += 1
             #   print(arr[r][c], end=" ")
            print()
        max_square_sum = max(max_square_sum, count_square_sum)
        print("Max sum Square =", max_square_sum)
    # 2nd section row
    for square_count in range(0, 4):
        #print("count = ", square_count)
        for r in range(1, 4):
            for c in range(0+square_count, 3+square_count):
                if r != 1:
                    print(arr[r][c], end=" ")

                # agr second row hey
                if r == 1:
                    # count hwo much times second row runs
                    if r1 == 1:
                        print(" ", arr[r][c], end=" ")
                    r1 += 1
            print()
    # 3rd section row
    for square_count in range(0, 4):
        print("count = ", square_count)
        for r in range(2, 5):
            for c in range(0+square_count, 3+square_count):
                if r != 1:
                    print(arr[r][c], end=" ")

                # agr second row hey
                if r == 1:
                    # count hwo much times second row runs
                    if r1 == 1:
                        print(" ", arr[r][c], end=" ")
                    r1 += 1
            print()
    # 4rth sectio row
    for square_count in range(0, 4):
        print("count = ", square_count)
        for r in range(3, 6):
            for c in range(0+square_count, 3+square_count):
                if r != 1:
                    print(arr[r][c], end=" ")

                # agr second row hey
                if r == 1:
                    # count hwo much times second row runs
                    if r1 == 1:
                        print(" ", arr[r][c], end=" ")
                    r1 += 1
            print()


hourglassSum([[1, 1, 1, 0, 0, 0],
             [0, 1, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0],
             [0, 0, 2, 4, 4, 0],
             [0, 0, 0, 2, 0, 0],
             [0, 0, 1, 2, 4, 0]])
