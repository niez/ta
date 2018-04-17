const express = require('./express')
const app = express();
exports.afunc = () => {};
module.exports.name = "Nick";
console.log(exports);
console.log(module.exports);
console.log(exports == module.exports);
console.log(app)