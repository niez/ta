var mixin = require('./merge-descriptors').default
var http = require('http')
module.exports = function createServer(){
  var app = function(req, res, next){
    res.send('Hello World')
  };

  mixin(app, proto, false);
  return app;
}
const proto = Object.create(null)
proto.listen = function (port) {
  const server = http.createServer(this);
  return server.listen.apply(server, arguments)
}