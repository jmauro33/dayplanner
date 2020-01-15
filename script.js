// code for setting the date and month using moment.js

function setDate (){

var NowMoment = moment ();

var NowDate = new date ();

var eDisplayMoment = document.getElementById('displayMoment');
eDisplayMoment.innerHTML = NowMoment;

var eDisplayDate = document.getElementById('displayJsDate');
eDisplayDate.innerHTML = NowDate;

};

// code for functionality of app 


function setTimes(){}



// code for save button

function notify() {
    alert( "clicked" );
  }
  $( "button" ).on( "click", notify );