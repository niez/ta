const http = require('http');
const PORT = 8008;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('X-Foo', 'bar');
	res.writeHead(200, { 'Content-Type': 'text/plain'} );
	res.end('ok');
});

server.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});