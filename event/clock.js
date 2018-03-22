const EventEmitter = require('events');

class Clock extends EventEmitter {
	constructor() {
		super();
		let isOdd = true
		this.interval = setInterval(() => {
			this.emit(isOdd ? 'tick': 'tock');
			isOdd = !isOdd;
		}, 1000);
	}
};

const clock = new Clock();
clock.on('tick', () => {
	console.log('tick');
});