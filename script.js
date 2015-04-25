$(document).ready(function(){

	var defaultLeftLocation = "723px";	
	var defaultTopLocation = "100px";	

	var shiftLeftLocationPos = "1023px";
	var shiftTopLocationPos = "400px";

	var shiftLeftLocationNeg = "400px";
	var shiftTopLocationNeg = "-100px";

	$('#bio').click(function(){
		$(this).stop().animate({
			"top": shiftTopLocationNeg
		},function(){
			$(this).css("visibility", "hidden")
				   .css("left", defaultLeftLocation)
				   .css("right", defaultLeftLocation)
				   .css("top", defaultTopLocation);
		});

		$('#skills').css("top", shiftTopLocationPos)
					.css("visibility", "visible")
					.stop().animate({ "top": defaultTopLocation });
	});



	$('#skills').click(function(){
		$(this).stop().animate({
			"left": shiftLeftLocationNeg
		},function(){
			$(this).css("visibility", "hidden")
				   .css("left", defaultLeftLocation)
				   .css("right", defaultLeftLocation)
				   .css("top", defaultTopLocation);
		});

		$('#projects').css("left", shiftLeftLocationPos)
					  .css("visibility", "visible")
					  .stop().animate({ "left": defaultLeftLocation });
	});


	$('#projects').click(function(){
		$(this).stop().animate({ 
			"top": shiftTopLocationPos
		}, function(){
				$(this).css("visibility", "hidden")
					   .css("left", defaultLeftLocation)
					   .css("right", defaultLeftLocation)
					   .css("top", defaultTopLocation);
		});

		$('#contact').css("top", shiftTopLocationNeg)
	   	   	   	   	 .css("visibility", "visible")
	   	   	   	   	 .stop().animate({	"top": defaultTopLocation });
	});


	$('#contact').click(function(){
		$(this).stop().animate({
			"left": shiftLeftLocationPos
		},function(){
			$(this).css("visibility", "hidden")
				   .css("left", defaultLeftLocation)
				   .css("right", defaultLeftLocation)
				   .css("top", defaultTopLocation);
		});

		$('#bio').css("left", shiftLeftLocationNeg)
				 .css("visibility", "visible")
				 .stop().animate({ "left": defaultLeftLocation });

	});
});


