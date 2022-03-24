#
# Complete the 'viralAdvertising' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

import math

def viralAdvertising(n):
    # Write your code here

# Day Shared Liked Cumulative
# 1      5     2       2
# 2      6     3       5
# 3      9     4       9
# 4     12     6      15
# 5     18     9      24
#   cummilative=0
    #sahred_people = 0
    #loop till the days
    #like_people=floor(people/2)
    # cummulative+=liked_people
    # shared_people=like_people*3
    
    # 
    cummulative=0
    shared_people=5
    liked_people=0
    for i in range(n):
        # print(i)
        liked_people=math.floor(shared_people/2)
        cummulative+=liked_people
        shared_people=liked_people*3
        # print(cummulative)
    return cummulative


print(viralAdvertising(5))
