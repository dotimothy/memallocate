var txt = "a";
//concatenates linearly O(n) runtime
while(txt.length < (2**53-1)) {
	txt = txt + "a";
}
