$(document).ready(function() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
    // // put your options and callbacks here
  })
  var calendar = $('#calendar').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    alert('clicked on ' + date.format());
  });


});



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
    $('<form action="form2.html"></form>').appendTo('body');
});
