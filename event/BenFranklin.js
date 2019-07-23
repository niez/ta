// const events = require('events');
// const emitter = new events.EventEmitter();

// emitter.on('customEvent', (message, status) => {
// 	console.log(`${status} : ${message}`);
// });

// emitter.emit('customEvent', 'Hello World!', '200');
const EventEmitter = require('events').EventEmitter;
const util = require('util');

const Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

const ben = new Person("Ben");

ben.on('speak', (something) => {
	console.log(`${this.name} say ${something}`);
});
ben.emit('speak', 'Welcome to use EventEmitter!');