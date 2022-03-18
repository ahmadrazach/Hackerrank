#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'designerPdfViewer' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY h
#  2. STRING word
#


def designerPdfViewer(h, word):
    # Write your code here
    # spliting word string in an array
    word_array = list(word)
    # print(word_array)

    # finding ACII calue of a char and indexing them 0-25
    ascii_array = []
    for i in range(len(word_array)):
        ascii_array.append(ord(str(word_array[i]))-97)
    # removing duplicate values
    ascii_array = list(dict.fromkeys(ascii_array))
    # sorting the array
    ascii_array.sort()
    # print(ascii_array)
    # loop to compare the value and save the given char heights
    letter_heights = []
    count = 0
    for i in range(len(h)):
        # print(i)
        if(count < len(ascii_array)):
            if(i == ascii_array[count]):
                count += 1
                letter_heights.append(h[i])
                # print(h[i])
    # returning max letter_height *len of array
    return(max(letter_heights)*len(word_array))


print(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5,
                         5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"))
