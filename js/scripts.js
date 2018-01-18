var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("#input-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var response = leapYear(year);
    $("#response").text(response);
  });

});
