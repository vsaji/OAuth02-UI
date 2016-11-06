/*
 
  Dropdown with Multiple checkbox select with jQuery - May 27, 2013
 
  (c) 2013 @ElmahdiMahmoud
 
  license: http://www.opensource.org/licenses/mit-license.php
 
*/
 

 

 
$(document).ready(function(){
 

 
$('.reg_container #submit').click(function(){
 
    submitForm($('#signup'),"applications");   
 
})
 

 
$('.scope_container #submit').click(function(){
 
    submitForm($('#scope'),"scopes");   
 
})
 
/**$(document).ajaxStart(function () {
 
        $("#response").text("Request being processed....");
 
    }).ajaxStop(function () {
 
        $("#response").text("Completed");
 
    });**/
 

 
});
 

 
function submitForm(form,url){
 

 
  var values = {};
 
  $.each(form.serializeArray(), function(i, field) {
 
    values[field.name] = field.value;
 
  });
 

 
  var msg = JSON.stringify(values);
 
  $('#response').text(JSON.stringify(values));
 

 
  var url = "http://127.0.0.1:5050/oauth20/"+url;
 
  
 
  var request = new XMLHttpRequest();
 
  var params = "action=something";
 
  request.open('POST', url, true);
 
  request.onreadystatechange = function() {if (request.readyState==4)  $('#response').text("Worked");};
 
  request.setRequestHeader("Content-type", "application/json");
 
  request.setRequestHeader("Content-length", msg.length);
 
  request.setRequestHeader("Connection", "close");
 
  request.send(msg);
 
  
 
  
 
  
 
  /**$.ajax({
 
    url:url,
 
    type:"POST",
 
    data:msg,
 
    contentType:"application/json; charset=utf-8",
 
    dataType:"json",
 
    success: function(){
 
    $('#response').text("["+url+"]Success--->"+msg+"--->"+JSON.stringify(data));
 
    },
 
    error: function(xhr, status, error) {
 
         $('#response').text("["+url+"]An error occurred--->"+xhr.responseText+"\nmsg--->"+msg+"\nstatus-->"+status+"--->"+error);
 
      }
 
  })
 
  **/
 
  
 
  
 
  /**$.post("http://127.0.0.1:5050/oauth20/"+url,msg,
 
  
 
  function(data){
 
    $('#response').text("Success--->"+msg+"--->"+JSON.stringify(data));
 
  }
 
  ).fail(function(data){
 
    $('#response').text("Error--->"+msg+"--->"+JSON.stringify(data));
 
  });**/
 
};
 

 

 

First Commit

Work in progress
