/**
 * Created by sahil-dua on 30/3/17.
 */

var test3 = require("./test3.js");
var async = require('async');

// var array1;
var tasks = [];

tasks.push(function(cb) {
    test3.checkAndCountDependencies("./package.txt","dependencies",function (deps) {

        cb(null, deps);
    })
});
tasks.push(function(cb) {
    test3.checkAndCountDependencies("./package.txt","devDependencies",function (devdeps) {

        cb(null, devdeps);
    })
});


async.parallel(tasks, function(err, resp) {

    var fs = require('fs');
    var myWriteStream = fs.createWriteStream("Q2_writeCommonDependencies.txt", 'UTF8');

    for(var i=0 ;i<resp[0].length ; i++){
        resp[1].filter(function (data) {

            if(data == resp[0][i]){
                myWriteStream.write(data);
                myWriteStream.write("\n");
            }

        })
    }


})

//
// function a() {}
// console.log(array1);







// var array2 = test3.checkAndCountDependencies("./package.json","devDependencies",function (count) {
//
// })
//
// console.log("asdasd")

