$(document).ready(function(){

	var locationLeft = "723px";	
	var locationTop = "100px";	


	$('.bio').click(function(){
		$(this).animate({
			"top": "-1000px"
		},function(){
			$(this).css("visibility", "hidden")
				   .css("top", locationTop)
				   .css("right", locationLeft)
				   .css("left", locationLeft);
		});

		$('.skills').css("top", "1000px")
					.css("visibility", "visible")
					.animate({ "top": "100px" });
	});



	$('.skills').click(function(){
		$(this).animate({
			"left": "-100px"
		},function(){
			$(this).css("visibility", "hidden")
				   .css("left", locationLeft)
				   .css("right", locationLeft)
				   .css("top", locationTop);
		});

		$rr = $('.projects').css("right");
		$ll = $('.projects').css("left");
		console.log($rr);
		console.log($ll);

		$('.projects').css("right", "100px")
					  .css("visibility", "visible")
					  .animate({ "left": locationLeft });
	});


	$('.projects').click(function(){
		$(this).animate({ 
			"top": "1000px"
		}, function(){
				$(this).css("visibility", "hidden")
				   	   .css("left", locationLeft)
				   	   .css("right", locationLeft)
				   	   .css("top", locationTop);
		});

		console.log($rr);
		console.log($ll);
		$('.contact').css("top", "-1000px")
	   	   	   	   	 .css("visibility", "visible")
	   	   	   	   	 .animate({	"top": "100px" });
	});


	$('.contact').click(function(){
		$(this).animate({
			"left": "1000px"
		},function(){
			$(this).css("visibility", "hidden")
				   .css("left", locationLeft)
				   .css("right", locationLeft)
				   .css("top", locationTop);
		});

		$('.bio').css("left", "0px")
				 .css("visibility", "visible")
				 .animate({ "left": locationLeft });

	});
});


