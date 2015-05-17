$(document).ready(function(){


var moveDiv = function(id1, id2, direction) {
	var edge;
	var percent;

	switch(direction){
		case "up":
			edge = "top";
			percent = "125%";
			break;
		case "left":
			edge = "left";
			percent = "125%";
			break;
		case "down":
			edge = "top";
			percent = "-25%";
			break;
		case "right":
			edge = "left";
			percent = "-25%";
			break;
		default:
			console.log("Wrong direction, dumbass...");
	}

	$('#' + id1).removeClass();
	$('#' + id1).css('top', '50%');
	$('#' + id1).css('left', '50%');
	$('#' + id1).addClass('init-position');
	$('#' + id1).addClass('move-out-' + direction);
	$('#' + id2).removeClass()
				.css(edge, percent)
				.css("visibility", "visible");
	setTimeout(function(){
		$('#' + id2).addClass('move-out-' + direction);
	}, 100);
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
	if(processing == true){
		console.log("nope");
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
  	  currentDiv.removeClass('active-div');
	processing = true;
	setTimeout(function(){
		processing = false;
	}, 1050);
  	  return false;
  });





	$('#bio').click(function(){
		//moveUp();	
		moveDiv('bio', 'skills', 'up');	
	//$(this).addClass('move-out-up');
	//$('#skills').removeClass();
	//$('#skills').css('top', '125%');
	//$('#skills').css("visibility", "visible");
	//setTimeout(function(){
		//$('#skills').addClass('move-out-up');
	//});
	});
				

	$('#skills').click(function(){
		moveDiv('skills', 'projects', 'left');	
	});


	$('#projects').click(function(){
		moveDown();	
	});


	$('#contact').click(function(){
		moveRight();	
	});

});


