// code for setting the date and month using moment.js

 var $times = $('#times')
 var today = moment().startOf('day')

 function setDate() {
 };

// // code for functionality of app 

 function setTimes() {
  for (let i=0; i < 24; i++) {
    var t = today.add(1,'hour').format('h a')
    $times.append('<div>'+t+'</div>')
   }
 }
 


// // code for saving data

localStorage.content = $('#test').html('Test');

$('#test').html(localStorage.content);

function getHours()