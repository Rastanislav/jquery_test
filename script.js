$(document).ready(function(){


	$('#bio').one('click', function(){
		$(this).addClass('move-out-up');
		$('#skills').removeClass('move-out-left');
		$('#skills').css("top", "125%");
		$('#skills').css("visibility", "visible");
		$(this).css("visibility", "hidden");
		
		$('#skills').stop().animate({
			"top": "50%"
		}, 1000, function(){
		});
	});


	$('#skills').one('click', function(){
		$(this).addClass('move-out-left');
		$('#projects').removeClass('move-out-down');
		$('#projects').css("left", "125%");
		$('#projects').css("visibility", "visible");
		$(this).css("visibility", "hidden");

		$('#projects').stop().animate({
			"left": "50%"
		}, 1000, function(){
		});
	});


	$('#projects').one('click', function(){
		$(this).addClass('move-out-down');
		$('#contact').removeClass('move-out-right');
		$('#contact').css("top", "-25%");
		$('#contact').css("visibility", "visible");
		$(this).css("visibility", "hidden");

		$('#contact').stop().animate({
			"top": "50%"
		}, 1000, function(){
		});
	});


	$('#contact').one('click', function(){
		$('#bio').removeClass('move-out-up');
		$(this).addClass('move-out-right');
		$('#bio').css("left", "-25%");
		$('#bio').css("visibility", "visible");
		$(this).css("visibility", "hidden");

		$('#bio').stop().animate({
			"left": "50%"
		}, 1000, function(){
		});
	});

});


