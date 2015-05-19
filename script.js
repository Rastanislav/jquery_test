$(document).ready(function(){
	$('body').scrollTop(0);
	var moveDiv = function(selector1, selector2, direction) {
		var edge;
		var percent;
		var $id1 = $('#' + selector1);
		var $id2 = $('#' + selector2);

		switch(direction){
			case "up":
				edge = "top";
				percent = "150%";
				break;
			case "left":
				edge = "left";
				percent = "125%";
				break;
			case "down":
				edge = "top";
				percent = "-50%";
				break;
			case "right":
				edge = "left";
				percent = "-25%";
				break;
			default:
				console.log("Wrong direction, dumbass...");
		}

		$id1.removeClass();
		$id1.css('top', '50%');
		$id1.css('left', '50%');
		$id1.addClass('move-out-' + direction);
		$id2.removeClass()
			.css(edge, percent)
			.css('visibility', 'visible');
		$id1.css('visibility', 'hidden');
		setTimeout(function(){
			$id2.addClass('move-out-' + direction);
		}, 100);
	};


	var processing = false;
	$('body').on('DOMMouseScroll mousewheel', function (e) {

		if(processing == true){
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


  		if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 || e.keyCode == 39) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
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

});


