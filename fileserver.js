const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8001;

const server = http.createServer((req, res) => {
	console.log(`${req.method} request for ${req.url}`);
	if (req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), 'UTF8', (err, html) => {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(html);
		})
	} else if (req.url.match(/.css$/)) {
		const cssPath = path.join(__dirname, 'public', req.url);
		const fileStream = fs.ReadStream(cssPath, 'UTF8');

		res.writeHead(200, {'Content-Type': 'text/css'});
		fileStream.pipe(res);
	} else if (req.url.match(/.jpg$/)) {
		const imgPath = path.join(__dirname, 'public', req.url);
		const imgStream = fs.ReadStream(imgPath);

		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		imgStream.pipe(res);
	} else {
		res.writeHead(400, {'Content-Type': 'text/plain'});
		res.end(http.STATUS_CODES[400]);
	}
});
server.listen(PORT, () => {
	console.log(`Server is listening on port : ${PORT}`);
});