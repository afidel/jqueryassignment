// The aim of this challenge is to only display the email paragraph when the checkbox is checked.  You should start by hiding the email field by default (or when the page is loaded).  You must then write a separate function that changes the display property of the email field.  When checked, the field should be visible.  When unchecked it should not be visible.  The submit button must link to Challenge 2.  You can use action="challenge2.html"


	$("#subscribe").click(function(){
		if (this.checked){
			$("#emailField").css("display","block");
		}
		else{
			$("#emailField").css("display","none");
		}
	});


// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
//   // 	Advanced Option....
//   // 	x.style.display == "block" ?
// 		// x.style.display = "none" :
// 		// x.style.display = "block";
// }
