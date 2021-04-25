var today = moment();
$("#date").html(today.format(`MMMM D, YYYY`));

var hour = today.hour();
var times = $("textarea");

for (var i = 0; i < times.length; i++) {
  if (times[i].id < hour) {
    times[i].classList.add("past");
  } else if (times[i].id == hour) {
    times[i].classList.add("present");
  } else {
    times[i].classList.add("future");
  }
}

$(".saveBtn").on("click", function () {
  var saveEvent = $(this).siblings("textarea").val();
  var time = $(this).parent(".timeblock").data("time");
  localStorage.setItem(time, saveEvent);
});

$("textarea").each(function () {
  var getTime = $(this).parent(".timeblock").data("time");
  $(this).val(localStorage.getItem(getTime));
});
