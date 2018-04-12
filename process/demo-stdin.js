const request = require('request')
// process.stdin.pipe(process.stdout)
request('https://www.baidu.com').pipe(process.stdout)
