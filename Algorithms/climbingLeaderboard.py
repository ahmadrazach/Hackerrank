#
# Complete the 'climbingLeaderboard' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY ranked
#  2. INTEGER_ARRAY player
#

def climbingLeaderboard(ranked, player):
    # Write your code here
    # player_score=[]
    player_score = []
    # loop till the player
    for i in range(len(player)):
        rank = 1
        rank_added = 0
        # rank
        #print("\n\n", i+1, "st time", "Putting score : ", player[i])
    # make templist and equal it to original list
        temp_ranked_list = ranked.copy()
        # print(temp_ranked_list)
    # append the element to the of player[i] to the temp list
        temp_ranked_list.append(player[i])
    # sort the list
        temp_ranked_list.sort(reverse=True)
        # print(temp_ranked_list)
    # for loop till the templ_list
        # print("Rank : ", end=" ")
        for temp_rank_index in range(1, len(temp_ranked_list)):
            # if temp_list[i]!=temp_list or temp_list[i]==len(temp_list)

            if temp_ranked_list[temp_rank_index] != temp_ranked_list[temp_rank_index-1] and temp_ranked_list[0] != player[i]:

                rank += 1

            if temp_ranked_list[0] == player[i] and temp_rank_index == 1:
                # print("add1", end=" ")
                rank == 1

                player_score.append(rank)

            elif temp_ranked_list[temp_rank_index] == player[i] and temp_rank_index != 1 and rank_added != 1:
                # print("add2", end=" ")
                rank_added = 1
                player_score.append(rank)
            # print(rank, end=" ")
            # player_score.append(rank)

    print(player_score)


climbingLeaderboard([997,981,957,933,930,927,926,920,916,896,887,874,863,863,858,847,815,809,803,794,789,785,783,778,764,755,751,740,737,730,691,677,652,650,587,585,583,568,546,541,540,538,531,527,506,493,457,435,430,427,422,422,414,404,400,394,387,384,374,371,369,369,368,365,363,337,336,328,325,316,314,306,282,277,230,227,212,199,179,173,171,168,136,125,124,95,92,88,85,70,68,61,60,59,44,43,28,23,13,12],[12,20,30,32,35,37,63,72,83,85,96,98,98,118,122,125,129,132,140,144,150,164,184,191,194,198,200,220,228,229,229,236,238,246,259,271,276,281,283,287,300,302,306,307,312,318,321,325,341,341,341,344,349,351,354,356,366,369,370,379,380,380,396,405,408,417,423,429,433,435,438,441,442,444,445,445,452,453,465,466,467,468,469,471,475,482,489,491,492,493,498,500,501,504,506,508,523,529,530,539,543,551,552,556,568,569,571,587,591,601,602,606,607,612,614,619,620,623,625,625,627,638,645,653,661,662,669,670,676,684,689,690,709,709,710,716,724,726,730,731,733,737,744,744,747,757,764,765,765,772,773,774,777,787,794,796,797,802,805,811,814,819,819,829,830,841,842,847,857,857,859,860,866,872,879,882,895,900,900,903,905,915,918,918,922,925,927,928,929,931,934,937,955,960,966,974,982,988,996,996])
