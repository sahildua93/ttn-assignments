function highest() {
  var counter=0;
  var str="aabaccbbbacb";

  var myArray = new Array(26);

  for(j=0;j<=26;j++){
    myArray[j]=0;

  }

//console.log(myArray[1]);
for(var i=0;i<str.length-1;i++){
myArray[str.charCodeAt(i)-97]+=1;
  //myArray.insert(str.charCodeAt(i)-97),str.charAt(i));
  //console.log(myArray[charCodeAt(str(i))-97]) ;

}
var max=myArray[0];
var index;
for(var k=0;k<myArray.length;k++)
{
  if(max<=myArray[k]){
    max=myArray[k];
    index=k;
  }
}
console.log(String.fromCharCode(index+97));
}
