function removeDuplicates(input)
{

var result="";
for(var i = 0; i < input.length; i++)
{

    if(result.indexOf(input[i])==-1)
          result+=input[i];
}

alert(" Resultant String : " + result);


}
