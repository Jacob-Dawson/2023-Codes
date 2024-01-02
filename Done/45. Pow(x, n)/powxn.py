# @Jay 45/50 @2023

# https://leetcode.com/problems/powx-n/

myInput = [2,4]; # notation: [x,n]

def myPow(x,n):
    result = 1;
    for i in range(1,abs(n)+1):
        result = result * x;
    if(n < 0):
        result = 1/result;
    return round(result,5);

print(str(myInput[0])+" to the power of "+str(myInput[1])+":")
print(myPow(myInput[0],myInput[1]))
print();
print("Jay 45/50 (2023)")