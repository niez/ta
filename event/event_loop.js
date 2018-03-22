const fs = require('fs');

someAsyncOperation = (callback) => {
	fs.readFile('./clock.js', callback);
}
const timeoutScheduled = Date.now();
setTimeout(() => {
	const delay = Date.now() - timeoutScheduled;
	console.log(`${delay} ms have passed since I was scheduled.`);
}, 4);

someAsyncOperation(() => {
	console.log(`${Date.now()} callback in someAsyncOperation is called.`);
	const startCallback = Date.now();
	while(Date.now() - startCallback < 10) {
	};
});

setTimeout(() => {
	const delay = Date.now() - timeoutScheduled;
	console.log(`${delay} ms have passed since I was scheduled.`);
}, 100);


Promise.resolve().then(() => {
	console.log("I am promise resolve.");
});
(() => {console.log('I am immediately function.');})();
setTimeout(() => {'I am setTimeout'});
setImmediate(() => {console.log('I am setImmediate.');});
process.nextTick(() => {console.log('I am from process.nextTick().');});