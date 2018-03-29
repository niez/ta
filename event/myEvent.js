const customEvent = require('events');
const myEvent = new customEvent();


// myEvent.on('eventA', () => {
// 	console.log('I listening event A...');
// });
myEvent.on('eventA', () => {
	console.log('I listening event A...');
});
console.log(`${myEvent.listenerCount('eventA')} is listening at eventA`);
myEvent.emit('eventA');
myEvent.removeListener('eventA', () => {
	console.log(`${myEvent.listenerCount('eventA')} is listening at eventA`);
});
myEvent.emit('eventA');
myEvent.emit('eventA');
myEvent.emit('eventA');
