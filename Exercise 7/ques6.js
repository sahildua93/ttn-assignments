(function() {
    var counter=0;
    var clear = setInterval(function(){
    var d = new Date();

    document.getElementById("123").innerHTML = d.toLocaleTimeString();
    counter++;
    if(counter==7200) {
      clearInterval(clear);
      document.getElementById('12').innerHTML="our service has been completed";
    }
  },1000);



}());
