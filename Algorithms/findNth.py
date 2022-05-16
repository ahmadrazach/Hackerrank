
# MY APPROACH
# def findNth(N):
#     count=0
#     # 1- loop till all i=1 to i<=num
#     for i in range(1,int(1e+12)):
#         # 2- check if digit is in the i
        
#         if not('9' in str(i)):
#             count+=1
#         if count==N :
#             # 4- return the number
#             return (i)
    
# Optimal approach of converting it to base 9

def findNth(N):
    remainder=""
    # toop till N !=0
    while N!=0:
        remainder+=str(N%9) # remainder
        N//=9   #quotient
    return remainder[::-1]

print(findNth(9))