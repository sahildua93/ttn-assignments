function palin() {


var input= document.getElementById("palindrome").value;
var flag = true;
var len = input.length;
for(var i=0; i<Math.floor(len/2);i++)
{
	if (input[i] !== input[len - 1 - i])
	{
		flag=false;
	}
	
}
if(flag==true )
	document.write("palindrome");
else
	document.write("not palindrome");



}