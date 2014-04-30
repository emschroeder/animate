// My Scripts
$(document).foundation();

// Animate.css Stuff

$('h3').click(function(){

	$('h3').addClass('animated rubberBand');

});

// Transit.js Stuff

$('img').click(function(){

	// Do Stuff
	$('p').transition({

		x: 200,
		y: 200,

	});

})