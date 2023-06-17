from os import *
from sys import *
from collections import *
from math import *



def sumOrProduct(n, q):
    MOD=10**9+7
    if q==1:
        return int((n*(n+1))/2)
    elif q==2:
        product=1
        for i in range(1,n+1):
            product=int((product*i)%MOD)
        return product
    
    
    
   #Alternate Solution
from os import *
from sys import *
from collections import *
from math import *



def sumOrProduct(n, q):
    MOD=10**9+7
    sum=0
    if q==1:
        for i in range(1,n+1):
            sum=int((sum+i)%MOD)
        return sum
    elif q==2:
        product=1
        for i in range(1,n+1):
            product=int((product*i)%MOD)
        return product
