"use strict";

// Gallery ==========

$('[data-fancybox="gallery"]').fancybox({
	loop: true,
	animationDuration: 1000
});

// ==============================

// Hero owl-carousel ==========

$(document).ready(function(){
	$(".hero").owlCarousel({
		loop:true,
	  	dots: false,
	  	autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
	  	smartSpeed: 2000,
	  	responsiveClass:true,
	  	responsive:{
		  0:{
			  items:1,
			  nav:true
		  },
		  600:{
			  items:1,
			  nav:true
		  },
		  1000:{
			  items:1,
			  nav:true
		  }
	  }
	});
});

// ==============================

// Customer reviews ==========

$(document).ready(function(){
  	$(".owl-carousel").owlCarousel({
	  	loop:true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:true
	        },
	        1000:{
	            items:1,
	            nav:true
			}
		}
  	});
});

// ==============================

// Burger ==========

const navSlide = ()=>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li')

	console.log(burger);
	burger.addEventListener('click',()=>{
		//Toggle Nav
		nav.classList.toggle('nav-active');

		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	});
}

navSlide();

// ==============================