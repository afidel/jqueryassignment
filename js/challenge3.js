// **I have updated this challenge to have two sets of radio buttons.  However, the objectives are the same.  The aim of this challenge is to ensure that one and only one radio button is selected.  The submit button must link to Challenge 4, but the button should not work unless one radio button is selected.  If nothing is checked, nothing should happen on submit.  In addition, only one radio button should be active at any given time.  The default page should not have either option selected.

// A tricky part to this challenge is making sure to NOT trigger the action if no field is selected.  JavaScript's return statement lets you immediately drop out of a program if there's no reason to continue. In our case, when we find that the user hasn't selected an option we want to cancel submitting the incomplete form. return false will tell JavaScript to cancel submitting, but there's one little chunk of code missing.  Take a read through JavaScript Kit's Accessing and Validating Forms page to find what you're missing to complete this puzzle.

// The below section from https://stackoverflow.com/questions/54266471/how-to-get-boolean-value-of-minimum-1-selected-radio-button-from-group-by-name?noredirect=1&lq=1
// $("input").on('click',function(){
// console.log($("input[name='fruit']").is(':checked'));//true or false
// console.log($("input:radio[name=fruit]:checked").length)//0 or 1
//
// });



$("#ch3form").submit(function( event ) {
if ($("input:radio[name=fruit]:checked").length == 0) {
  alert("You must pick a fruit!")
  event.preventDefault();
}
});



// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;
//
//



    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
  // }
