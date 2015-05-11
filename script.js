$(document).ready(function(){

var moveUp = function(id1, id2) {
	$('#' + id1).addClass('move-out-up');
	$('#' + id2).removeClass('move-out-left');
	$('#' + id2).css("top", "125%");
	$('#' + id2).css("visibility", "visible");
	$('#' + id1).css("visibility", "hidden");
	$('#' + id2).stop().animate({
		"top": "50%"
	}, 1000, function(){
	});
};


var moveLeft = function(id1, id2) {
	$('#' + id1).addClass('move-out-left');
	$('#' + id2).removeClass('move-out-down');
	$('#' + id2).css("left", "125%");
	$('#' + id2).css("visibility", "visible");
	$('#' + id1).css("visibility", "hidden");
	$('#' + id2).stop().animate({
		"left": "50%"
	}, 1000, function(){
	});
};


var moveDown = function(id1, id2) {
	$('#' + id1).addClass('move-out-down');
	$('#' + id2).removeClass('move-out-right');
	$('#' + id2).css("top", "-25%");
	$('#' + id2).css("visibility", "visible");
	$('#' + id1).css("visibility", "hidden");
	$('#' + id2).stop().animate({
		"top": "50%"
	}, 1000, function(){
	});
};


var moveRight = function(id1, id2) {
	$('#' + id1).addClass('move-out-right');
	$('#' + id2).removeClass('move-out-up');
	$('#' + id2).css("left", "-25%");
	$('#' + id2).css("visibility", "visible");
	$('#' + id1).css("visibility", "hidden");
	$('#' + id2).stop().animate({
		"left": "50%"
	}, 1000, function(){
	});
};


	$('#bio').click(function(){
		moveUp('bio', 'skills');	
	});
	

	$('#skills').click(function(){
		moveLeft('skills', 'projects');	
	});


	$('#projects').click(function(){
		moveDown('projects', 'contact');	
	});


	$('#contact').click(function(){
		moveRight('contact', 'bio');
	});

});


