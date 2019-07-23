const kew = require('kew');

function checkPhantomInLib () {
    return kew.fcall(function () {
        return findPhantomjsInLib()
    });
}



kew.resolve(true)
.then(checkPhantomjsInLib)
.then(checkPhantomjsOnPath)
.then(downloadPhantomjs)
.then(extractZip)
.then(function (result) {
    console.log('Path is :' + result);
})

const getTargetPlatform = () => {
    return process.platform
}