

exports.countSingleLineComments = function(readfileName,writefileName) {

    var fs = require('fs');
    var myReadStream = fs.createReadStream(readfileName, 'UTF8');
    var myWriteStream = fs.createWriteStream(writefileName, 'UTF8');

    myReadStream.on('data', function (chunk) {

        var str = chunk.split('\n');

        for (var i = 0; i < str.length; i++) {
            if (str[i].includes("//")) {
                if (!str[i].startsWith('//')) {
                    var temp = str[i];
                    var index = temp.indexOf('//');
                    var substring = temp.substring(index);
                    myWriteStream.write(substring);
                }
                else
                    myWriteStream.write(str[i]);
                myWriteStream.write("\n");
            }
        }

    })
}

//var events = require('events');
//var buff = new Buffer(10);
var reqire = require('http');

//var len = buff.write("hello");

reqire.createServer(function (request,response) {

    response.end("server started !!!!!");

}).listen(7000);

// var eventEmitter = new events.EventEmitter();
//
// eventEmitter.on('connection',mylistener2)
// eventEmitter.addListener('connection',mylistener1)
// eventEmitter.addListener('connection',mylistener3)
//
// eventEmitter.emit('connection');
//
// function mylistener1() {
//
//     console.log("listener1 printing")
//
// }
// function mylistener2() {
//
//     console.log("listener2 printing")
//
// }
// function mylistener3() {
//
//     console.log("listener3 printing")
//
// }


