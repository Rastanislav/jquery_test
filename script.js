$(document).ready(function(){

$(document).on("click","#project1",function(){
	$('.active-div').load("div.html #proj1");
});

$(document).on("click","#project2",function(){
	$('.active-div').load("div.html #proj2" );
});

$('#div-bio').load('div-bio.html');
$('#div-skills').load('div-skills.html');
$('#div-projects').load('div.html #proj1');
$('#div-contact').load('div-contact.html');
$('.sidebar-left').load('sidebarLeft.html #bio');

	var moveDiv = function(selector1, selector2, direction) {
		var edge;
		var percent;
		var $id1 = $('#div-' + selector1);
		var $id2 = $('#div-' + selector2);
		var $sideBarLeft = $('.sidebar-left');
		var $sideBarRight = $('.sidebar-right');

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
		$sideBarLeft.css('visibility', 'hidden').text("");
		$sideBarRight.css('visibility', 'hidden');
		$id1.addClass('move-out-' + direction);
		$id2.removeClass()
			.css(edge, percent)
			.css('visibility', 'visible');
		$id1.css('visibility', 'hidden');
		setTimeout(function(){
			$id2.addClass('move-out-' + direction);
		}, 100);

		setTimeout(function(){
			$sideBarLeft.load("sidebarLeft.html #" + selector2);
			//$sideBarLeft.load("sidebarRight.html #" + selector1);
		}, 1000);
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
			nextDiv = $('#div-bio');
		}

		if(prevDiv.length == 0) {
			prevDiv = $('#div-contact');
		}


  		if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 || e.keyCode == 39) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
	  		//scroll down

	  		switch($('.active-div').attr('id')){
		  		case 'div-bio':
			  		moveDiv('bio', 'skills', 'up');	
			  		break;
		  		case 'div-skills':
			  		moveDiv('skills', 'projects', "left");
			  		break;
		  		case 'div-projects':
			  		moveDiv('projects', 'contact', 'down');	
			  		break;
		  		case 'div-contact':
			  		moveDiv('contact', 'bio', 'right');
			  		break;
	  		}
  	  		nextDiv.addClass('active-div');
  		} else {
	  		//scroll up
	  		switch($('.active-div').attr('id')){
		  		case 'div-bio':
			  		moveDiv('bio', 'contact', 'left');	
			  		break;
		  		case 'div-skills':
			  		moveDiv('skills', 'bio', "down");
			  		break;
		  		case 'div-projects':
			  		moveDiv('projects', 'skills', 'right');	
			  		break;
		  		case 'div-contact':
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


