
const path = require('path');
const spawn = require('child_process').spawn;
const binPath = path.join('C:','WebDriver', 'phantomjs.exe');

const args = process.argv.slice(2);
const cp = spawn(binPath, args);
cp.stdout.pipe(process.stdout);

cp.on('error', (err) => {
	console.error('Error executing phantom at', binPath);
	console.error(err.stack);
});
cp.on('exit', (code) => {
	setTimeout(() => {
		process.exit(code);
	}, 20)
});
process.on('SIGTERM', () => {
	cp.kill('SIGTERM')
	process.exit(1);
});
