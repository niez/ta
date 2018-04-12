<<<<<<< HEAD
const request = require('request')
// process.stdin.pipe(process.stdout)
request('https://www.baidu.com').pipe(process.stdout)
=======
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
>>>>>>> d1aa50121678f51df05a6fb5e3cf67159733473a
