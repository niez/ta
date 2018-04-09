const fs = require('fs')
process.stdin.setEncoding('utf8');
process.stdin.pipe(fs.createWriteStream('./abc.txt'))
// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });
//
// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });
