// code for setting the date and month using moment.js

var $times = $('#times')
var today = moment().startOf('day')

function setDate() {
};

// code for functionality of app 


function setTimes() {
  for (let i=0; i < 24; i++) {
    var t = today.add(1,'hour').format('h a')
    $times.append('<div>'+t+'</div>')
  }
}



// code for save button

function notify() {
  alert("clicked");
}
$("#saveBtn").on("click", notify);

setTimes()