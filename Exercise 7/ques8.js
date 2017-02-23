/*function form1() {
  var a=document.getElementById('fname').value;
  var i;
  var c=a.split(" ",a.length-1);

  (a.charAt(0).toUpperCase())

  document.getElementById("123").innerHTML = d;
}*/
function titleCase() {
  var str=document.getElementById('fname').value;
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   document.getElementById("123").innerHTML = splitStr.join(' ');
}
