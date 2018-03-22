// const promise = require('promise');
const resolveProm = Promise.resolve(33);

const thenProm = resolveProm.then((value) => {
	return value;
});

console.log(resolveProm);
console.log(thenProm);
setTimeout(() => {
	console.log(thenProm);
});