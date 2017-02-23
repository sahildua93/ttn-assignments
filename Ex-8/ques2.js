
(function arr() {

  var i=0;
  var arr1=[1,2,3,4,5];
  document.write("Printing elements of array after 3 seconds gap:- ");
    function a() {
      document.write(arr1[i]+" ");
      i++;
      if(i==5){
        clearInterval(clear);
      }
    }

 var clear=setInterval(a,3000);



})();
