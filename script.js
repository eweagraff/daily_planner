var today = moment();
$("#date").html(today.format(`MMMM D, YYYY`));

var hour = today.hour();
var times = $("textarea");
for (var i = 0; i < times.length; i++) {
  if (times[i].id < hour) {
    times.setAttribute("class", "past");
  } else if (times[i].id == hour) {
    times.setAttribute("class", "present");
  } else {
    times.setAttribute("class", "future");
  }
}

//change text area colors based on time past present future

//if in the past add class past, if in present add class present,if in future add class future

//save to local storage when I click on save button (addeventlistener)
//value is what is typed into the text areas (us the .val() method in jquery)
//Need 9 different keys for each time slot
