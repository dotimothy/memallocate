function memTest() {
	confirm = alert('Are You Ok With Background Processes & Sudden Crashes?')
	if(confirm == true) {
		var memBackground = new Worker('mem.js');
	}
}