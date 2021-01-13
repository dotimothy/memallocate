var workerCounter = 0;
function countWorker() {
	var counter = document.getElementById("counter");
	counter.innerHTML = "<h2 style=\"font-family:Courier; font-size: 1.5em\">Webworkers Active: " + workerCounter;

}
function memTest() {
	proceed = confirm('Are You Ok With Background Processes & Sudden Crashes?')
	if(proceed == true) {
		var memBackground = new Worker('mem.js');
	}
	workerCounter++;
	countWorker();
}