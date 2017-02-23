(function()  {
	'use strict';
	
	var Employee = [
					{name:'sahil',age:'23',salary:400,DOB:'21/05/1993'},
					{name:'manish',age:'24',salary:40000,DOB:'21/05/1992'},
					{name:'vaibhav',age:'25',salary:2000,DOB:'21/05/1995'},
					{name:'anuj',age:'4',salary:400,DOB:'21/05/1994'},
					{name:'ushma',age:'12',salary:5000,DOB:'21/05/2000'}
	];

	document.write ("<b>employee details <br></b>");

	for (var i = 0; i < Employee.length; i++) {

		document.write("employee name: "+Employee[i].name+"&nbsp&nbsp&nbsp&nbsp");
		document.write("employee age: "+Employee[i].age+"&nbsp&nbsp&nbsp&nbsp");
		document.write("employee salary: "+Employee[i].salary+"&nbsp&nbsp&nbsp&nbsp");
		document.write("employee DOB: "+Employee[i].DOB+"<br><br>");  


  }
  
  document.write("<b>filter all employees with salary greater than 5000<br><br></b>");

for (var i = 0; i < Employee.length; i++) {

		if(Employee[i].salary>5000)
		document.write("employee name: "+Employee[i].name+"<br>");
		


  }
  document.write("<b>group employee on the basis of their age<br><br></b>");

  var obj=[];
  var obj2=[];
  for (var i = 0; i < Employee.length; i++)  {
  	if(Employee[i].age<23)
  		obj.push(Employee[i].name);
  	else
  		obj2.push(Employee[i].name);

  	
  }
  document.write("Employees under age of 23 <br>");

  for (var i = 0; i < obj.length; i++) {

		document.write(obj[i]+"<br><br>");
	}
document.write("Employees above age of 23<br>");
for (var i = 0; i < obj2.length; i++) {

		document.write(obj2[i]+"&nbsp&nbsp&nbsp");
	}
document.write("<br><br><br>");


document.write("<b>fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.<br><br></b>");

for (var i = 0; i < Employee.length; i++) {

		if(Employee[i].salary<1000 && Employee[i].age>20)
		{
			Employee[i].salary*=5;
		document.write("employee name: "+Employee[i].name+"  employee salary: "+Employee[i].salary+"<br>");
		}
}
}());