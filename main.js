var workerCounter = 0;
var memBackground1, memBackground2, memBackground3, memBackground4;
function countWorker() {
	var counter = document.getElementById("counter");
	counter.innerHTML = "<h2 style=\"font-family:Courier; font-size: 1.5em\">Webworkers Active: " + workerCounter;

}
function memTest() {
	proceed = confirm('Are You Ok With Background Processes & Sudden Crashes?')
	if(proceed == true && window.Worker) {
		memBackground1 = new Worker('mem.js');
		workerCounter += 1;
		countWorker();
	}
}