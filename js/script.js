$(document).ready(function(){

// init controller
var controller = new ScrollMagic.Controller();
// create a scene
new ScrollMagic.Scene({triggerElement: ".project_1"})
					.setClassToggle(".project_1", "fade-in") // add class toggle
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".project_2", offset: -150})
					.setClassToggle(".project_2", "fade-in") // add class toggle
					.addTo(controller);
  new ScrollMagic.Scene({triggerElement: ".project_2"})
					.setClassToggle(".nav-slide", "nav-slide-active") // add class toggle
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".project_3", offset: -150})
					.setClassToggle(".project_3", "fade-in") // add class toggle
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".project_4", offset: -150})
					.setClassToggle(".project_4", "fade-in") // add class toggle
					.addTo(controller);

$('.portfolio-wrapper').click(function(){
	$('.modal').fadeIn();
	$('body').css('overflow-y', 'hidden');
});

$('.close-btn').click(function(){
	$('.modal').fadeOut();
	$('body').css('overflow-y', 'visible');
});

$( ".portfolio-wrapper" ).hover(
  function() {
    $( this ).css({
			'background-color': '#ffffff',
			'cursor': 'pointer'
		});
		$(this).find('.portfolio-image-wrapper img').css('padding', '0px');
  }, function() {
    $( '.portfolio-wrapper, .portfolio-image-wrapper img' ).removeAttr( 'style' );
  }
);

});
