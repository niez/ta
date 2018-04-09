const fs = require('fs')
const path = require('path')

// const readStream = fs.createReadStream('./data/data.csv')
// readStream.pipe(process.stdout)

// fs.readFile('./data/data.csv',{encoding: 'utf8', flag: 'r'}, (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

const txt_1 = fs.readFileSync('./data/shorttxt.txt', {encoding: 'utf8'})
console.log('--txt_1: ', txt_1)
console.log('--txt_1 class: ', txt_1.constructor.name)
const txt_2 = fs.readFileSync('./data/shorttxt.txt')
console.log('--txt_2: ', txt_2)
console.log('--txt_2 class: ', txt_2.constructor.name)
console.log('--txt_2 converted content: ', txt_2.toString())
// const content = fs.readFileSync('./data/data.csv', {encoding: 'utf8', flag: 'r'})
// console.log(content)

/**
 * read directory and output file names
 * @type {String}
 */
fs.readdir('./data', {encoding: 'utf8'}, (err, files) => {
  console.log(files)
})
