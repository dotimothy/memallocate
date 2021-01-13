var workerCounter = 0;
var memBackground;

function countWorker() {
	var counter = document.getElementById("counter");
	counter.innerHTML = "<h2 style=\"font-family:Courier; font-size: 1.5em\">Webworkers Active: " + workerCounter;

}

function memTest() {
	proceed = confirm('Are You Ok With Background Processes & Sudden Crashes?')
	if(proceed == true && window.Worker) {
		add =  prompt("How Many Webworkers to Add (DO NOT ADD MORE THAN 3)",1);
		for(var i = 0; i < add; i++)
		{
			memBackground = new Worker('mem.js');
			workerCounter += 1;
			countWorker();
		
		}
	}
}