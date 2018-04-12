
const writable = require('stream').Writable
const readable = require('stream').Readable
const duplex = require('stream').Duplex
// const utils = require('util')

// function Duplex () {

// }

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
};

// utils.inherits(Duplex, readable)

console.log(objectKeys(duplex.prototype));