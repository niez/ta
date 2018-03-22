const fs = require('fs');
const sep = require('path').sep;

const files = [
  'C:\\Users\\Nick_Nie\\Downloads\\lyxz.rar',
  'C:\\Users\\Nick_Nie\\Downloads',
  'C:\\Users\\Nick_Nie\\Downloads\\lyxz.rar - Shortcut.lnk',
];

files.forEach(el => {
  // fs.stat(path, callback(error, stats))
  // path could be string|buffer|url
  fs.lstat(el, (err, stats) => {
    if (err) throw err;
    console.log(`${el.split(sep).pop()} stats : \n${JSON.stringify(stats, null, 2)}`);
  });
});

/*
Output:
PS D:\work\js\ta\fs> node demo-file
lyxz.rar stats :
{
  "dev": 2921160410,
  "mode": 33206,
  "nlink": 1,
  "uid": 0,
  "gid": 0,
  "rdev": 0,
  "ino": 11821949022163888,
  "size": 644728,
  "atimeMs": 1520302008445.7664,
  "mtimeMs": 1520302013926.8044,
  "ctimeMs": 1521692075051.1086,
  "birthtimeMs": 1520302010799.1658,
  "atime": "2018-03-06T02:06:48.446Z",
  "mtime": "2018-03-06T02:06:53.927Z",
  "ctime": "2018-03-22T04:14:35.051Z",
  "birthtime": "2018-03-06T02:06:50.799Z"
}
Downloads stats :
{
  "dev": 2921160410,
  "mode": 16676,
  "nlink": 1,
  "uid": 0,
  "gid": 0,
  "rdev": 0,
  "ino": 562949953533277,
  "size": 0,
  "atimeMs": 1521692075051.1086,
  "mtimeMs": 1521692075051.1086,
  "ctimeMs": 1521692075051.1086,
  "birthtimeMs": 1473390794032.256,
  "atime": "2018-03-22T04:14:35.051Z",
  "mtime": "2018-03-22T04:14:35.051Z",
  "ctime": "2018-03-22T04:14:35.051Z",
  "birthtime": "2016-09-09T03:13:14.032Z"
}
lyxz.rar - Shortcut.lnk stats :
{
  "dev": 2921160410,
  "mode": 33206,
  "nlink": 1,
  "uid": 0,
  "gid": 0,
  "rdev": 0,
  "ino": 7318349395250847,
  "size": 590,
  "atimeMs": 1521692075051.1086,
  "mtimeMs": 1521692075051.1086,
  "ctimeMs": 1521692075051.1086,
  "birthtimeMs": 1521692075051.1086,
  "atime": "2018-03-22T04:14:35.051Z",
  "mtime": "2018-03-22T04:14:35.051Z",
  "ctime": "2018-03-22T04:14:35.051Z",
  "birthtime": "2018-03-22T04:14:35.051Z"
}
 */
