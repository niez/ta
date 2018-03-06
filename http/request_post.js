const http = require('http');
const querystring = require('querystring');
const postBody = querystring.stringify({'msg': 'Hello World!'});
const options = {
	hostname: 'www.google.com',
	port: 80,
	path: '/upload',
	method: 'POST',
	agent: false,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': Buffer.byteLength(postBody),
	}
};

const req = http.request(options, (res) => {
	
	res.setEncoding('utf8');

	res.on('end', () => {
		console.log('No more data in response.');
	});


	res.on('data', (buffer) => {
		console.log(`${buffer}`);
	});
});


req.on('error', (e) => {
	console.error(`problem with request: ${e.message}`);
});
req.write(postBody);
req.end();