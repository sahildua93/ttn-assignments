



/*QUES-4: Create a utils method for computing age of a person
 using date of birth and use it in more than one places using
 require module. */



function getAge() {

var myArgs = process.argv.slice(2);
var d = new Date();
var currentYear=d.getFullYear();

var age=parseInt(currentYear-myArgs);

console.log("age is : "+ age);
}


module.exports.getAge = getAge;
