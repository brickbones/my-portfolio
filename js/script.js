
// init controller
var controller = new ScrollMagic.Controller();
// create a scene
new ScrollMagic.Scene({triggerElement: ".project_1", offset: -150})
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
	new ScrollMagic.Scene({triggerElement: ".project_5", offset: -150})
					.setClassToggle(".project_5", "fade-in") // add class toggle
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".project_9", offset: -150})
					.setClassToggle(".project_9", "fade-in") // add class toggle
					.addTo(controller);

$(document).ready(function(){

$('.about-me a').click(function(){
	$('.modal.jota').fadeIn();
	$('body').css('overflow-y', 'hidden');
});

$('.portfolio-wrapper.project_1').click(function(){
	$('.modal.lecker').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper.project_2').click(function(){
	$('.modal.mindful').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper.project_3').click(function(){
	$('.modal.grimaldi').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper.project_4').click(function(){
	$('.modal.pama').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper.project_5').click(function(){
	$('.modal.physmedi').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper.project_9').click(function(){
	$('.modal.goya').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper .project_6').first().click(function(){
	$('.modal.riverlanes').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper .project_7').click(function(){
	$('.modal.countrysmokes').fadeIn();
	$('body').css('overflow-y', 'hidden');
});
$('.portfolio-wrapper .project_8').click(function(){
	$('.modal.cali-lingual').fadeIn();
	$('body').css('overflow-y', 'hidden');
});

$('.close-btn').click(function(){
	$('.modal').fadeOut();
	$('body').css('overflow-y', 'visible');
});

$( ".portfolio .portfolio-wrapper" ).hover(
  function() {
    $( this ).css({
			'background-color': '#ffffff',
			'cursor': 'pointer'
		});
		$(this).find('.portfolio-image-wrapper img').css('padding', '0px');
		$(this).find('.project-title').css('margin-bottom', '35px');
  }, function() {
    $( '.portfolio .portfolio-wrapper, .portfolio .portfolio-image-wrapper img, .project-title' ).removeAttr( 'style' );
  }
);

$( ".small-portfolio .portfolio-image-wrapper" ).hover(
  function() {
    $( this ).css({
			'cursor': 'pointer'
		});
		$(this).find('img').css('padding', '0px');
		$(this).find('p').css('padding', '40px 10px')
  }, function() {
    $(this).find('img, p').removeAttr( 'style' );
  }
);




$(".social-icons a[href^='https://'], .social-icons a[href^='http://'], .modal-wrapper a[href^='http://'] ").attr("target","_blank");



});
