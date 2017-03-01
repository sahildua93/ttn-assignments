

/*QUES-3:Write a program that uses a single asynchronous filesystem
operation to read a file and print the number of newlines it contains
to the console (stdout), similar to running cat file | wc -l. */


var fs = require("fs");
var data='input.txt';

 fs.readFile(data, function (err, result){
  if (err) {
      return console.error(err);
    }
    else {

    var count = 0;
    var data1=result.toString();
    var count = 0;
    for(var i=0;i<data1.length;i++){
      if(data1[i]=='\n'){
        count++;
      }

    }
  }

    console.log("Asynchronous count( no. of lines): "+count);

});
