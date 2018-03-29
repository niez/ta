const fs = require('fs')
const path = require('path')

// const readStream = fs.createReadStream('./data/data.csv')
// readStream.pipe(process.stdout)

// fs.readFile('./data/data.csv',{encoding: 'utf8', flag: 'r'}, (err, data) => {
//   if (err) throw err
//   console.log(data)
// })


const content = fs.readFileSync('./data/data.csv', {encoding: 'utf8', flag: 'r'})
console.log(content)

fs.readdir('./data', {encoding: 'utf8'}, (err, files) => {
  console.log(files)
})