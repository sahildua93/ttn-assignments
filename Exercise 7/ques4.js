$(document).ready(function(){
  var new_row="";

      $("button").click(function() {

          $.ajax({
            url:'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452',
            type:'GET',
            success:function(data)
            {

              $.each(data.results,function(index,value){

                $.each(value.address_components,function(idx,v){
                  console.log(v.long_name);
                   new_row+="<tr><td>" + v.long_name +"</td><td>" + v.short_name +"</td></tr>";
                });
                $("#bod").append(new_row);
              });
            }
          });
      });
});
