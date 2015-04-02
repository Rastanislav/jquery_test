$(document).ready(function(){

	var defaultLeftLocation = "723px";	
	var defaultTopLocation = "100px";	

	var shiftLeftLocationPos = "1023px";
	var shiftTopLocationPos = "400px";

	var shiftLeftLocationNeg = "400px";
	var shiftTopLocationNeg = "-100px";

	$('.bio').click(function(){
		$(this).animate({
			"top": shiftTopLocationNeg
		},function(){
			$(this).css("visibility", "hidden")
				   .css("top", defaultTopLocation)
				   .css("right", defaultLeftLocation)
				   .css("left", defaultLeftLocation);
		});

		$('.skills').css("top", shiftTopLocationPos)
					.css("visibility", "visible")
					.animate({ "top": defaultTopLocation });
	});



	$('.skills').click(function(){
		$(this).animate({
			"left": shiftLeftLocationNeg
		},function(){
			$(this).css("visibility", "hidden")
				   .css("left", defaultLeftLocation)
				   .css("right", defaultLeftLocation)
				   .css("top", defaultTopLocation);
		});

		$('.projects').css("left", shiftLeftLocationPos)
					  .css("visibility", "visible")
					  .animate({ "left": defaultLeftLocation });
	});


	$('.projects').click(function(){
		$(this).animate({ 
			"top": shiftTopLocationPos
		}, function(){
				$(this).css("visibility", "hidden")
					   .css("left", defaultLeftLocation)
						  .css("right", defaultLeftLocation)
						  .css("top", defaultTopLocation);
		});

		$('.contact').css("top", shiftTopLocationNeg)
	   	   	   	   	 .css("visibility", "visible")
	   	   	   	   	 .animate({	"top": defaultTopLocation });
	});


	$('.contact').click(function(){
		$(this).animate({
			"left": shiftLeftLocationPos
		},function(){
			$(this).css("visibility", "hidden")
				   .css("left", defaultLeftLocation)
				   .css("right", defaultLeftLocation)
				   .css("top", defaultTopLocation);
		});

		$('.bio').css("left", shiftLeftLocationNeg)
				 .css("visibility", "visible")
				 .animate({ "left": defaultLeftLocation });

	});
});


