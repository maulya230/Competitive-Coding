Approach 1

from os import *
from sys import *
from collections import *
from math import *

def reverseArray(arr, m):
    n=len(arr)
    if m<0 or m>n:
        return arr
    reversed_arr=arr[:m+1]+arr[m+1:][::-1]
    return reversed_arr
