#memocate.py: The Trivial Memory Allocator in Python
#Disclaimer: Use this at your own discretion. I am not responsible for anything that happens.
#Author: TD

#initialization
a = "a"
mode = input("(0) Intensive or (1) Safe: ")
#Storing string to memory until overflow.
#Concatenating Runtime: O(n)
if(int(mode)):
	print("Safe Mode O(n)")
	while(1):
		a = a + "a"
#Concatenating Runtime O(n^2)
else: 
	print("Intensive Mode O(n^2)")
	while(1):
		a = a + a
