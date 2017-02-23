function person(){
    this.name ="sahil";
    this.run=function(){
        console.log("running");
    }
}
//employee is a person so employee has inherited the property of person.
function employee(){
    this.emp_id =1234;
    this.emp1=function(){
        document.getElementById('p1').innerHTML="i am employee 1";
    }
}
//developer is a employee as well as a person so it has inherited the properties of employees as well as person.
//multilevel inheritance
function developer(){
    this.dev_dept ="MEAN";
    this.dev1=function(){
        document.getElementById('div1').innerHTML="i am developer 1";
    }
}

employee.prototype=new person();
employee.prototype.constructor=employee;
developer.prototype=new employee();
developer.prototype.constructor=developer;

dev= new developer();

document.getElementById('div1').innerHTML="<b>developer Department:- </b>"+dev.dev_dept+"<b><pre>Employee ID</b>:-  "+dev.emp_id+"<b><pre>Developer's Name:-</b> "+dev.name+"<pre>";
dev.emp1();
//document.getElementById('div1').innerHTML=dev.name;
//document.getElementById('div1').innerHTML="Emloyees ID"+dev.emp_id;
