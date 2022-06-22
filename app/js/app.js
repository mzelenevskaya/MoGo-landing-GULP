// // Import vendor jQuery plugin example

import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {

	// menu
	let header = document.querySelector(".header");

	document.addEventListener("scroll", () => {
		if (document.documentElement.scrollTop > 1) {
			header.classList.add("header_has-bg");
		} else {
			header.classList.remove("header_has-bg");
		}
	});

	// burger
	const headerBurger = document.querySelector(".header__burger");
	const headerNav = document.querySelector(".header__nav");
	headerBurger.addEventListener("click", function(event) {
	  headerBurger.classList.toggle("burger_closed");
	  headerNav.classList.toggle("header__nav_opened");
	});
	

	// slider survey
	const surveySliderSettings = { 
	    type: 'loop',
		gap: "20px",
		classes: {
			arrow: 'splide__arrow survey-slider__arrow',
		},
		pagination: false,
		breakpoints:  {
			560: {				
				arrows: false,
				pagination: true,
				classes: {
					pagination: 'splide__pagination survey-slider__pagination', 
				},
			},
		}
	}
	new Splide('#author-survey', surveySliderSettings).mount();
	new Splide('#survey-slider', surveySliderSettings).mount();	
	new Splide('#promo-slider', surveySliderSettings).mount();	

})