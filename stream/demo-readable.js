const Stream = require('./internal/streams/stream')
const util = require('util')

util.inherits(DemoReadable, Stream)

function DemoReadable (options) {

}


DemoReadable.prototype.read = function () {

}

DemoReadable.prototype.push = function () {
  
}