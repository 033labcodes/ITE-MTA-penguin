window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    // For each carousel, add event listeners and set initial state
    for(var i = 0; i < carousels.length; i++) {
        // Add listener to event
        carousels[i].on('before:show', state => {
            console.log(state);
        });
        
        // Force show the first slide
        carousels[i].show(0);
    }
    
    bulmaSlider.attach();

})
