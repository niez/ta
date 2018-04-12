const Transform = require('stream').Transform
const inherits = require('util').inherits
const fs = require('fs')

inherits(MyTransform, Transform)

function MyTransform (options) {
  options = {};
  Transform.call(this, options)
}

MyTransform.prototype._transform = function (chunk, encoding, callback) {
  this.push(chunk.toString().toUpperCase())
  callback(null, null)
}

const str = fs.createReadStream('./demo-readable.js')
const trans = new MyTransform();
str.pipe(trans).pipe(process.stdout);