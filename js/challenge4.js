// This challenge will help you create inline error messages that only appear when they need to!   If a field is blank, display the corresponding error message directly under the missing field.    Make sure you're showing the message if there's an error, but you'll also need to hide the error message if everything's ok!

// Make sure to check all the possible scenarios!!  (1st is missing, 2nd is missing, both are missing)   Submission shouldn’t happen unless all the data is filled in.  And error messages shouldn’t appear unless data is missing.  Put the focus on the first field missing data.

$('form').submit(function( event ) {
  if(!$("#fullname").val()) {
    $("#nameerrormsg").css("display", "block");
    event.preventDefault();
  } else {
    $("#nameerrormsg").css("display", "none");
  }
});

$('form').submit(function( event ) {
  if(!$("#streetaddr").val()) {
    $("#addrerrormsg").css("display", "block");
    event.preventDefault();
  } else {
    $("#addrerrormsg").css("display", "none");
  }
});


// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }
