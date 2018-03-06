const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const PORT = 8003;

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('./public/form.html').pipe(res);
	} else if (req.method === 'POST') {
		var body = '';
		req.on('data', (chunk) => {
			body += chunk;
		});

		req.on('end', () => {
			res.end(`
			<html>
			<head>
				<titile>Form Result Page</title>
			</head>
			<body>
				<h1>Form Result</h1>
				<p>${JSON.stringify(qs.parse(body))}</p>
			</body>
			</html>
			`)});
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end(http.STATUS_CODES[404]);
	}
});

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});