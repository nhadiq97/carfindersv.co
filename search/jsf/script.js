$(document).ready(function(){


		$(window).scroll(function(event) {
	var y = $(this).scrollTop();
	
	if (y >= 600) {
		$('#phone').addClass('animate');
		$('#tablet').addClass('animate');
                }
         });
   });