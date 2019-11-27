// The aim of this challenge is to automatically copy the postal address to the home address field if a user checks the "Same as above" checkbox. In addition to this, we'll disable the home address field when the checkbox is checked.  (When a field is disabled, it can not be edited.)  When the checkbox is unchecked the field should become enabled again, and be reset to blank. The submit button must link to Challenge 3.

	$("#useBilling").click(function(){
		if (this.checked){
			$("#home").val($("#billing").val());
			$("#home").prop("disabled",true);
		}
		else{
			$("#home").prop("disabled",false);
		}
	});



// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");
//
// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}
