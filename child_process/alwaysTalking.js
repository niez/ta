var sayings = [
	"so every second we are going to randomly write one of these sayings",
	"to the standard output object.",
	"So on line 12 we get a random index", 
	"that is no greater than the length of the sayings array, and then on line",
	"13 we use that random index to randomly select one of the sayings, and using",
	"the stdout object we will write that saying along with a new line. On line 16",
	"we wired up a listener on the standard input object to listen for a data event."
];

var interval = setInterval(()=>{
	const i = Math.floor(Math.random() * sayings.length);
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', (data) => {
	console.log(`STDIN Received -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();
});