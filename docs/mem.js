var txt = "a";
//concatenates linearly O(n^2) runtime
while(txt.length < (2**53-1)) {
	txt = txt + txt;
}
