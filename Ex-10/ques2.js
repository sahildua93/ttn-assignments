
/*QUES-2: Write a program that uses a single synchronous filesystem
          operation to read a file and print the number of newlines it
          contains to the console (stdout), similar to running cat file | wc -l. */


var fs = require("fs");

var data = fs.readFileSync('input.txt')
var data1=data.toString();
var count = 0;
for(var i=0;i<data1.length;i++){
  if(data1[i]=='\n'){   count++;  }

}
console.log("Synchronous count(no. of lines): "+count);
