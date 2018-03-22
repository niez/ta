/**
 * event 数据结构分析
 * [
 * 	type1: [listener11, listener12],
 * 	type2: [listener21, listener22]
 * ]
 * 
 */

class CustomEvent {
	constructor() {
		this.events = {};
	};

	on(type, listener) {
		this.events.type = this.events.type || [];
		this.events.type.push(listener);
	};

	emit(type, ...rest) {
		if (this.events.type){
			this.events.type.forEach(listener => listener(...rest));
		}
	}
};

const myEvent = new CustomEvent();

myEvent.on('event', () => {console.log('Hello Master');})
myEvent.on('event', (name) => {console.log(`Hello ${name}`);})
myEvent.emit('event', 'NickA');

