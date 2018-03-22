const circle = require('./circle');
console.log(`${require.resolve.paths('./circle')}`);
console.log(`${circle.square(2)}`);
console.log(process.mainModule);
console.log(require('./circle'));
console.log(exports == module.exports);