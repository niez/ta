exports.name = "Nick";
const afunc = () => {console.log('I am afunc.')};
exports = afunc;
// module.exports = exports;
console.log(exports);
console.log(module.exports);
