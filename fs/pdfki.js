const PDFDocument = require('pdfkit');
const fs = require('fs');
const moment = require('moment');

const b = fs.readFileSync('a.txt',{encoding: 'utf-8'});
console.log(b.split('\n'))
process.exit(1)
const currentDate = moment().format('DDMMYYYY')
const weekAgoS = moment().subtract(1,'w').startOf('w').format('DDMMYYYY')
const weekAgoE = moment().subtract(1,'w').endOf('w').format('DDMMYYYY')
const monthAgoS = moment().subtract(1, 'M').startOf('M').format('DDMMYYYY')
const monthAgoE = moment().subtract(1, 'M').endOf('M').format('DDMMYYYY')
const quarterAgoS = moment().subtract(1,'Q').startOf('Q').format('DDMMYYYY')
const quarterAgoE = moment().subtract(1,'Q').endOf('Q').format('DDMMYYYY')
const yearAgoS = moment().subtract(1,'Y').startOf('Y').format('DDMMYYYY')
const yearAgoE = moment().subtract(1,'Y').endOf('Y').format('DDMMYYYY')
const biyearAgoS = moment().subtract(2,'Y').startOf('Y').format('DDMMYYYY')
const biyearAgoE = moment().subtract(1,'Y').endOf('Y').format('DDMMYYYY')
const patterns = [
    {'frequency':'D','startDate': currentDate,'endDate':currentDate},
    {'frequency':'W','startDate': weekAgoS,'endDate':weekAgoE},
    {'frequency':'M','startDate': monthAgoS,'endDate':monthAgoE},
    {'frequency':'Q','startDate': quarterAgoS,'endDate':quarterAgoE},
    {'frequency':'Y','startDate': yearAgoS,'endDate':yearAgoE},
    {'frequency':'B','startDate': biyearAgoS,'endDate':biyearAgoE}
]
const getRandomInt5 = (max) => Math.floor(Math.random() * Math.floor(max))
const a = ['ABC','DEX','MES','NPV1','NPV2','NPV4']
for(let i = 0; i < a.length; i++){
    let tmp = patterns[getRandomInt5(6)]
    let fileName = `${a[i]}_${tmp.startDate}_${tmp.endDate}_${tmp.frequency}.pdf`
    let doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(fileName));
    doc.font('PalatinoBold.ttf')
       .fontSize(25)
       .text(`Test only pls ignore. ${fileName}`, 50, 50);
    doc.end();
}



