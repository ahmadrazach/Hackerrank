#
# Complete the 'beautifulDays' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER i
#  2. INTEGER j
#  3. INTEGER k
#

def reverse(n):
    Number = n  
    Reverse = 0    
    while(Number > 0):    
        Reminder = Number %10    
        Reverse = (Reverse *10) + Reminder    
        Number = Number //10  
    return(Reverse)

def beautifulDays(i, j, k):
    # Write your code here
    #loop from ith value to j
    beautiful_days=0
    for value in range(i,j+1):
    # num = 1234
    # reversed_num = 0
        if (abs(value-reverse(value))%k==0):
            beautiful_days+=1

        
    return beautiful_days

print(beautifulDays(20,23,6))

