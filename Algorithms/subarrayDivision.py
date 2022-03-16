s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1,
     4, 1, 3, 3, 4, 2, 1]
#[1, 2, 1, 3, 2]
d = 18  # 3  # 18
m = 7  # 7
# Returns
# int: the number of ways the bar can be divided


def birthday(s, d, m):
    # your code
    # add_square_values=0
    # contiguous_result=0

    # contiguous_result = 0
    # prev_result = 0
    # loop to the s
    count = 0
    if(len(s) < 2):
        for i in range(len(s)):
            # loop till m
            # add_square_values = 0
            # count = 0
            sum = 0
            value_index = i
            j = 0
            while(j != m):
                sum += s[value_index]
                j += 1
                value_index += 1
                print(s[value_index], end=" ")

            if(sum == d):
                count += 1
            print(sum)

    else:
        for i in range(len(s)-1):
            # loop till m
            # add_square_values = 0
            # count = 0
            sum = 0
            value_index = i
            j = 0
            while(j != m):
                sum += s[value_index]
                print(s[value_index], end=" ")
                j += 1
                value_index += 1

            if(sum == d):
                count += 1
            print("\nsum", sum)
    return(count)


print("count = ", birthday(s, d, m))
