var workerCounter = 0;
var message = "";
var memBackground;
var done = "Test Complete."
function countWorker() {
	var counter = document.getElementById("counter");
	counter.innerHTML = "<h2 style=\"font-family:Courier; font-size: 1.5em\">Webworkers Active: " + workerCounter;

}
function memTest() {
	proceed = confirm('Are You Ok With Background Processes & Sudden Crashes?')
	if(proceed == true) {
		memBackground = new Worker('mem.js');
	}
	workerCounter++;
	countWorker();
	while(message = "") {
		message = memBackground.onMessage;
		if(message == done) {
			workerCounter--;
			countWorker();
			return;
		}
	} 
}