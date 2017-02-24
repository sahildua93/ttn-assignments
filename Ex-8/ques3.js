var person={
  name:"sahil",
  id:12345

}

  function employee(){
      document.write("BIND METHOD ----->my name is "+this.name);

    }

    function customer(identity){
        document.getElementById('div1').innerHTML="CALL METHOD--->my id is "+this.id;

      }

ab=employee.bind(person);
customer.call(person,"hello ");

ab();
