
  function abc(fname,lname,cb) {
      //console.log("helllo");

      document.getElementById('1234').innerHTML="hi";
      cb(fname,lname,abc2);


    }
  function abc2(fname,lname){

    document.getElementById('12345').innerHTML=lname;
  }


  function cb(fname,lname,abc2) {
    document.getElementById('123').innerHTML=fname;
    abc2(fname,lname);
  }
