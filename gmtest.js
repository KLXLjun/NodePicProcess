var gm = require('gm'),
    fs = require('fs'),
    path = require('path');

var l = path.join(__dirname, 'pic')
var imgFile = path.join(l, '1.jpg');

var k = path.join(__dirname, 'thumb')
var thumbFile = path.join(k, '1.jpg');

var width = 300

if(fs.existsSync(imgFile)){        
    gm(imgFile)
    .resize(width)
    .write(thumbFile, function (err) {
        if (!err){
            console.log('done');
        }
        console.log(err)
    });
}