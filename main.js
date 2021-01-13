function memTest() {
	proceed = confirm('Are You Ok With Background Processes & Sudden Crashes?')
	if(proceed == true) {
		var memBackground = new Worker('mem.js');
	}
}