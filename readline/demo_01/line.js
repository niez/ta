const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
/**
 * [description]
 * @param  {[type]} 'line' [description]
 * @param  {[type]} (line  [description]
 * @return {[type]}        [description]
 */
rl.on('line', (line) => {
	console.log(`Receive: ${line}`);
});
rl.on('SIGINT', () => {
	rl.question('Are you sure want to exit?', (answer) => {
		if (answer.match(/^y(es)?$/i)) rl.pause();
	});
});
rl.on('close', () => {
	
});
rl.on('')