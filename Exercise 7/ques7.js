function test() {

console.log(a); //undefined
console.log(fun()); //2

var a = 1;
function fun() {
return 2;
}
}

test();
