
def findNth(num):
    count=0
    # 1- loop till all i=1 to i<=num
    for i in range(1,int(1e+12)):
        # Nth_num=0
        
    # 2- check if digit is in the i
        
        check_num=str(i)
        # print("i->",i)
        if not('9' in check_num):
            # print("yes 9",check_num)
            # pass
            count+=1
        # else:
            # print("not 9",check_num)
            # count+=1
            # print("count->",count)
        # for j in check_num:
        # #     print(j,end="")

        #     if ('9' in j):
        # #         print("counted")
        #         pass
        #     else:
        #         count+=1
        # # if check_num.index('4')==1:
        # print()
        # 3- yes? count it : no pass
            # print(i)
            # count+=1
        if count==num :
            return (i)
    # 4- return the number
    

print(findNth(18))