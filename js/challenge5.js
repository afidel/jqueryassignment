// In this challenge you will be given the HTML.  You are responsible for changing the background-image and content of elements in the page.  The div with the id of “image” has a blue background and the text states “Hover over an image below”.  This is the look it should have whenever the mouse is not over one of the three thumbnail images and none of the images are in focus.   See the default look below:
// When the mouse is over a thumbnail image or an image is in focus, the text in the div should change to the image’s alt text and the background should change to the image’s src.  When the mouse moves away from the image or the focus is removed, the div should go back to the default look.
// Change the code so that you are using 6 images of your choice.  The KEY component to this challenge is that you may not hardcode any values in the JavaScript.  At anytime I should be able to change the value of the src and/or alt attribute of an image and the code should still work.  I should be able to add/delete images and it should still work.


$("img").hover(function(){
         $("#image").css("background", 'url(' + this.src + ') no-repeat center /contain');
				 $("#image").html(this.alt);
    });

$("img").focus(function(){
         $("#image").css("background", 'url(' + this.src + ') no-repeat center /contain');
				 $("#image").html(this.alt);
    });


// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
