jQuery.noConflict();

jQuery(function ($) {
	$('.loopslide').hide();	
/* }); */
/* jQuery(window).bind("load", function($) {	 */
	$('.container').css('background', 'none');
	$('.loopslide:hidden').fadeIn(800);
	$('#loopedSlider').loopedSlider({
		addPagination: false,
		containerClick: false,
		autoStart: 8000	
	});
});