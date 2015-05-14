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



//$('.active-div').on('DOMMouseScroll mousewheel', function (e) {
  //if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
	  ////scroll down
		  //console.log('Down');

		  //// get div from active-div class
		  //// then using switch add necessary movements for divs
		  //// in movement functions correct adding/removing active-div class. + use .next()
		  ////var currentDiv = $('.active-div');
		  ////var nextDiv = currentDiv.next();

			////if(nextDiv.length == 0) {
				////nextDiv = $('.slide').first();
			  ////}

		  ////switch($('.active-div').attr('id')){
			  ////case 'bio':
				  ////break;
			  ////case 'skills':
				  ////break;
			  ////case 'projects':
				  ////break;
			  ////case 'contact':
				  ////break;

		  //}
  //} else {
	  ////scroll up
	  //console.log('Up');
  //}
  ////prevent page fom scrolling
  //return false;
//});





	$('#bio').click(function(){
		//moveUp();	
		moveDiv('bio', 'skills', 'up');	
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


