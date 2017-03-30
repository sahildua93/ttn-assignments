/**
 * Created by sahil-dua on 29/3/17.
 */

 exports.checkAndCountDependencies = function(readfileName,objectToFind) {


    var fs = require('fs');
    var myReadStream = fs.createReadStream(readfileName, 'UTF8');
    //var myWriteStream = fs.createWriteStream(writeFileName, 'UTF8');

    myReadStream.on('data', function (chunk) {


        var str = chunk.indexOf(objectToFind);
        if(str!==-1) {
            var substr = chunk.substring(str);
            var openingBracket = substr.indexOf("{");
            var closingBracket = substr.indexOf("}");
            var substring2 = substr.substring(0, closingBracket);
            var substring3 = substr.substring((openingBracket+1), closingBracket);
            var count = substring3.split(',');
            console.log("No. of "+ objectToFind +" are "+ count.length);
        }
        else
            console.log(objectToFind+" Not Found")

    })

}










// var re1='(".*?")';	// Double Quote String 1
// var re2='.*?';	// Non-greedy match on filler
// var re3='(:)';	// Any Single Character 1
// var re4='.*?';	// Non-greedy match on filler
// var re5='(".*?")';	// Double Quote String 2



// var m =p.exec(txt);
// if(m!=null){
//     console.log(txt);
// }


