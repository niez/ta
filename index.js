const http = require('http');
const server = http.createServer((request, response) => {
	const { headers, method, url } = request;
	let body = [];
	request.on('error', (err) => {
		console.error(err);
	}).on('data', (chunk) => {
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();

		response.on('error', (err) => {
			console.error(err);
		});

		response.statusCode = 200;
		response.setHeader('Content-Type', 'application/json');

		const responseBody = { headers, method, url, body };

		// response.write(JSON.stringify(responseBody));
		response.write('<html>');
		response.write('<body>');
		response.write('<h1>Hello, World!</h1>');
		response.write('</body>');
		response.write('</html>');
		response.end();
	});
}).listen(8080);
