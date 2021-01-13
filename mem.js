var counter = 0;

var txt = "a";
while(txt.length < (2**16)) {
	txt = txt + "a";
}
if(counter < 100) {
	var sub = new Worker('mem.js');
	counter++;
}
