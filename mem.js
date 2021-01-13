function Worker() {
	var txt = "a";
	while(txt.length < (2**8)) {
		txt = txt + "a";
	}
	postMessage("Test Complete.");
}