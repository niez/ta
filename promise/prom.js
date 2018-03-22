console.log(1);

function call (cb){
	process.nextTick(cb);
}

call(() => {console.log(2);})

setTimeout(() => {
	console.log(3);
});

new Promise((resolve) => {
	console.log(4);
	resolve(5)
}).then(value => console.log(value));

setImmediate(() => {console.log(6);});

process.nextTick(() => {console.log(7);});

setTimeout(() => {
	process.nextTick(() => console.log(8));
})


console.log(9);