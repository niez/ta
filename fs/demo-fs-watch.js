const fs = require('fs');
const path = require('path');
const sep = require('path').sep;
const { tmpdir } = require('os');

var original = process.argv[2];
const watchlistener = (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  filename ? console.log(`filename provided: ${filename}`): console.log('filename not provided');
  // watcher.close();
};

const watcher = fs.watch(tmpdir());

watcher.on('error', (error) => {
  console.error(error);
  process.exit(1);
});

watcher.on('change', watchlistener);

// 每10秒重命名一次
setInterval(() => {
  var newFilePath = path.join(tmpdir(), `${Date.now()}`);
  fs.renameSync(original, newFilePath);
  original = newFilePath;
}, 10000)
