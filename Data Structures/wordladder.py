from pickle import FALSE


def wordLadderLength(startWord, targetWord, wordList):
	#Code here
	# 1- check if a endWord is in the list
	isPresent=False
	# 2- insert all words from list in a string
	for i in wordList:
		
		# checking if the word's present
		if i==targetWord:
			isPresent=True
		
	# 3- if endWord is not present in Dict ->return 0
	# 4- start the brute force 
    

print(wordLadderLength("der","dfs",{"des","der","dfr","dgt","dfs"}))