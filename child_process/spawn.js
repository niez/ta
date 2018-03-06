const spawn = require('child_process').spawn;

const cp = spawn('node', ['alwaysTalking']);

cp.stdout.on('data', (data) => {
	console.log(`${data.toString().trim()}`)
});

cp.on('close', () => {
	console.log('Process is closing.');
	process.exit();
});

setTimeout(() => {
	cp.stdin.write('stop');
}, 4000);