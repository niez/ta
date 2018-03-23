const utils = require('utils');
const { Writeable, Readable} = require('stream');



utils.inherits(ReadStream, Readable);

fs.createReadStream = function (path, options) {
  return new ReadStream(path, options)
};
