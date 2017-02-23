function form1() {
//!isNaN(document.getElementById('fname').value)
var nameregex=/^[a-zA-Z ]{2,30}$/;
var dobregex=/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
try {

//----->first name validation
  if(!nameregex.test(document.getElementById('fname').value))
  {

  throw "first name not valid";
  //document.form.fname.focus();
  }

  //----->last name validation
  if(!nameregex.test(document.getElementById('lname').value))
  {

  throw "last name not valid";
  //document.form.fname.focus();
  }
//------>number validation
if(isNaN(document.getElementById('number').value))
{
alert("enter a numeric value");
document.form.number.focus();
}

// ----->date of birth validation

if(!dobregex.test(document.getElementById('DOB').value))
{

throw "name no valid";
//document.form.fname.focus();
}


} catch (err) {

document.write(err);
}
}
