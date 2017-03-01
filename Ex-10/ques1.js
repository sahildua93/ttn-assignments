
/*QUES-1: Write a program that accepts one or more numbers as
          command-line arguments and prints the sum of
          those numbers to the console (stdout).*/


var sum=0;
var myArgs = process.argv.slice(2);
 for(var i=0;i<myArgs.length;i++){
   sum+=parseInt(myArgs[i]);
 }
 console.log("sum of arguments passed : "+sum);
