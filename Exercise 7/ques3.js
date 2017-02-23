function readabc(){
	//'use strict';

	counter =0;
	   return function (){
		document.getElementById('123').innerHTML=counter;
		counter++;
		};

	  }


	  	var z = readabc();
