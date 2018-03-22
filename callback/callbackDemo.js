/**
 * [Callback: pass function as an augument to be used within anther function]
 * @param  {[type]}   a        [description]
 * @param  {[type]}   b        [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
const getLazySum = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, Math.random() * 1000);
};

const logMessage = (message) => {
	console.log(message);
};

getLazySum(1, 2, logMessage);

const fs = require('fs');
fs.readFile('/foo.txt', (err, data) => {
	if (err) throw err;
	console.log(data);
})