const http = require('http');
const data = require('./data/inventory');
const PORT = 8002;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/json'});
		res.end(JSON.stringify(data));
	} else if (req.url === '/instock') {
		listInStock(res);
	} else if (req.url === '/onBackOrder') {
		listOnBackOrder(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end(http.STATUS_CODES[404]);
	}
});
server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

const listInStock = (res) => {
	const instock = data.filter(el => el.avail === 'In stock');
	res.end(JSON.stringify(instock));
};

const listOnBackOrder = (res) => {
	const onBackOrder = data.filter(el => el.avail === 'On back order');
	res.end(JSON.stringify(onBackOrder));
};
