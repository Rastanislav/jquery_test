$(document).ready(function(){


var moveDiv = function(id1, id2, direction) {
	var options = {};
	var edge;
	var percent;

	switch(direction){
		case "up":
			options = JSON.parse('{"top": "50%"}');
			edge = "top";
			percent = "150%";
			break;
		case "left":
			options = JSON.parse('{"left": "50%"}');
			edge = "left";
			percent = "125%";
			break;
		case "down":
			options = JSON.parse('{"top": "50%"}');
			edge = "top";
			percent = "-25%";
			break;
		case "right":
			options = JSON.parse('{"left": "50%"}');
			edge = "left";
			percent = "-25%";
			break;
		default:
			console.log("Wrong direction, dumbass...");
	}

	$('#' + id1).addClass('move-out-' + direction);
	$('#' + id2).removeClass();
	$('#' + id2).css(edge, percent);
	$('#' + id2).css("visibility", "visible");
	$('#' + id1).css("visibility", "hidden");
	$('#' + id2).stop().animate(
		options, 1000, function(){
	});
};

var moveUp =function(){
	moveDiv('bio', 'skills', 'up');	
} 

var moveLeft = function(){
	moveDiv('skills', 'projects', "left");
}	

var moveDown = function(){
	moveDiv('projects', 'contact', 'down');	
}	

var moveRight = function(){
	moveDiv('contact', 'bio', 'right');
}	


var processing = false;
$('body').on('DOMMouseScroll mousewheel', function (e) {

if (processing === true){
	return false;
}
var currentDiv = $('.active-div');
var nextDiv = currentDiv.next();
var prevDiv = currentDiv.prev();
 

if(nextDiv.length == 0) {
	nextDiv = $('#bio');
}

if(prevDiv.length == 0) {
	prevDiv = $('#contact');
}

processing = true;
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
	  //scroll down


	  switch($('.active-div').attr('id')){
		  case 'bio':
			  moveDiv('bio', 'skills', 'up');	
			  break;
		  case 'skills':
			  moveDiv('skills', 'projects', "left");
			  break;
		  case 'projects':
			  moveDiv('projects', 'contact', 'down');	
			  break;
		  case 'contact':
			  moveDiv('contact', 'bio', 'right');
			  break;
	  }
  	  nextDiv.addClass('active-div');
  } else {
	  //scroll up
	  switch($('.active-div').attr('id')){
		  case 'bio':
			  moveDiv('bio', 'contact', 'left');	
			  break;
		  case 'skills':
			  moveDiv('skills', 'bio', "down");
			  break;
		  case 'projects':
			  moveDiv('projects', 'skills', 'right');	
			  break;
		  case 'contact':
			  moveDiv('contact', 'projects', 'up');
			  break;
  	  }
  	  		  prevDiv.addClass('active-div');
  }
  	  //prevent page fom scrolling
  	  currentDiv.removeClass('active-div');
  	  processing = false;
  	  return false;
  });





	$('#bio').click(function(){
		//moveUp();	
		moveDiv('bio', 'skills', 'up');	
		//$(this).removeClass('active-div');
		//$(this).off().removeClass();
		//setTimeout(function(){ 
		//$('#bio').click(moveUp) }, 3000); 
	});
				

	$('#skills').click(function(){
		moveLeft();	
		//$(this).off();
		//setTimeout(function(){ 
		//$('#skills').click(moveLeft) }, 3000); 
	});


	$('#projects').click(function(){
		moveDown();	
		//$(this).off();
		//setTimeout(function(){ 
		//$('#projects').click(moveDown) }, 3000); 
	});


	$('#contact').click(function(){
		moveRight();	
		//$(this).off();
		//setTimeout(function(){ 
		//$('#contact').click(moveRight) }, 3000); 
	});

});


