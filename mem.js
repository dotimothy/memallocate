function Worker() {
	var txt = "a";
	while(txt.length < (2**16)) {
		txt = txt + "a";
	}

}