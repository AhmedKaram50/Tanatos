/*global $, console, alert*/

$(function () {
	
	'use strict';
	
	//Nice Scroll Options
	
	$("body").niceScroll({
		
		cursorcolor: '#ff620c',
		cursorborderradius: 0,
		cursorborder: "#ff620c",
		cursorwidth: '10px'
	});
	
	// height of header
	
	$('header').height($(window).height());
	
	//Scroll To Features
	
	$("header .arrow i").click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('.features').offset().top
		}, 1000);
	});
	
	//Show more 3 Items in Our Work
	
	$(".change").click(function () {
		
		$('.item').toggleClass("hidden, show");
		$(this).text("SHOW LESS");
		$(".our-works").css({height: "1600px"});
	});
	
	//Manual Slid in Our Team 
	
	var leftArrow  = $('.left'),
		rightArrow = $('.right');
	
	function manualSlide() {
	
		if ($('.testimonials:first').hasClass('active')) {
			
			leftArrow.hide();
		} else {
			
			leftArrow.show();
		}
		
		if ($('.testimonials:last').hasClass('active')) {
			
			rightArrow.hide();
			
		} else {
			
			rightArrow.show();
		}
		
	}
	
	manualSlide();
	
	$('.our-team i').click(function () {
		
		if ($(this).hasClass('right')) {
			
			$('.active').fadeOut(800, function () {
				
				$(this).removeClass('active').next('.testimonials').addClass('active').fadeIn(800);
				
				manualSlide();
				
			});
			
		} else {
			
			$('.active').fadeOut(800, function () {
				
				$(this).removeClass('active').prev('.testimonials').addClass('active').fadeIn(800);
				
				manualSlide();
				
			});
		}
		
	});
	
	// Say Hellow BackGround Size
	
	$(".say-hello").height($(window).height());
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});