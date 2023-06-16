#Approach 1
def countSetBits(n):
    # write your code here
    # Return an integer denoting the answer to the required problem 
    total=0

    for i in range(1, n + 1):
        binary_string = bin(i)[2:]
        count = binary_string.count('1')
        total += count
    
    MOD=(10**9)+7
    
    return(total%MOD)
  
 # Approach 2
 
  def countSetBits(n):
    MOD = 1000000007
    total = 0
    power_of_two = 1

    while power_of_two <= n:
        total += (n // (2 * power_of_two)) * power_of_two
        total += max(0, (n % (2 * power_of_two)) - power_of_two + 1)
        total %= MOD
        power_of_two *= 2

    return total  
   
