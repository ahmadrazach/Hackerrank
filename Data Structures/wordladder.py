# def helper(self,word1,word2):
# 	not_same = 0
# 	for i in range(len(word1)):
# 		if word1[i] != word2[i]:
# 			not_same += 1
# 		if not_same > 1:
# 			return False
# 	if not_same == 1:
# 		return True
# 	else:
# 		return False

def wordLadderLength(startWord, targetWord, wordList):
    # Code here
		# if endWord not in wordList:
		# 	return 0
		# queue = []
		# visited = dict()  
		# times = 1
		# queue.append((times,endWord))
		# while queue:
		# 	times,vertex = queue.pop(0)
		# 	visited[vertex] = vertex
		# 	if self.helper(beginWord,vertex):
		# 		return times+1
		# 	for x in wordList:
		# 		if self.helper(x,vertex) and x not in visited :
		# 			queue.append((times+1,x))
		# 			#print(x)
		# return 0
	
	# # 1- check if a endWord is in the list
		isPresent=False
		# 2- checking if the word's present
		wordSet=set(wordList)
		for i in wordList:
			if i==targetWord:
				isPresent=True
		#  if endWord is not present in Dict ->return 0
		if(isPresent==False):
			return 0

		# creating queue using list
		q=[]
		print(q)
		q.append(startWord)
		word_length = len(startWord)

		depth=0
		while q: # while list is not empty
			word, step = q.popleft()
			if word == targetWord:
				return step
			for i in range(word_length):
				for c in "abcdefghijklmnopqrstuvwxyz":
					newWord = word[:i]+c+word[i+1:]
					if newWord in wordSet:
						wordSet.remove(newWord)
						q.append((newWord, step+1))

		return 0
    # # 4- start the brute force
    # wordset = set(wordList)
    # queue = deque()
    # queue.append((startWord, 1))
    # word_length = len(startWord)
    # while queue:
    #     word, step = queue.popleft()
    #     if word == targetWord:
    #         return step
    #     for i in range(word_length):
    #         for c in "abcdefghijklmnopqrstuvwxyz":
    #             newWord = word[:i]+c+word[i+1:]
    #             if newWord in wordset:
    #                 wordset.remove(newWord)
    #                 queue.apptarget((newWord, step+1))
    # return 0
	


print(wordLadderLength("der", "dfs", {"des", "der", "dfr", "dgt", "dfs"}))
