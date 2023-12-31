# There are two types of soup: type A and type B. 
# Initially, we have n ml of each type of soup. There are four kinds of operations:

    # Serve 100 ml of soup A and 0 ml of soup B,
    # Serve 75 ml of soup A and 25 ml of soup B,
    # Serve 50 ml of soup A and 50 ml of soup B, and
    # Serve 25 ml of soup A and 75 ml of soup B.

# When we serve some soup, we give it to someone, and we no longer have it. 
# Each turn, we will choose from the four operations with an equal probability 0.25. 
# If the remaining volume of soup is not enough to complete the operation, 
# we will serve as much as possible. We stop once we no longer have some 
# quantity of both types of soup.

# Note that we do not have an operation where all 100 ml's of soup B are used first.

# Return the probability that soup A will be empty first, 
# plus half the probability that A and B become empty at the same time. 
# Answers within 10-5 of the actual answer will be accepted.

# @ Jay 7/50

# https://leetcode.com/problems/soup-servings/

amount = 75; # <- edit this

def soupServings(self, n: int) -> float:
    if n >= 4800:
        return 1.0
    result = {}
    def dp(a, b):
        if a <= 0 and b <= 0:
            return 0.5
        if a <= 0:
            return 1.0
        if b <= 0:
            return 0.0
        if (a, b) not in result:
            result[a, b] = 0.25 * (dp(a-100, b) + dp(a-75, b-25) + dp(a-50, b-50) + dp(a-25, b-75))
        return result[a, b]
    return dp(n, n);

print(soupServings(0,amount));