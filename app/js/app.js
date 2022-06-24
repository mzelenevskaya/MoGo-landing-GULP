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
	headerBurger.addEventListener("click", function (event) {
		headerBurger.classList.toggle("burger_closed");
		headerNav.classList.toggle("header__nav_opened");
	});

	// accordion
	const accordionBtns = document.querySelectorAll(".service__info");

	accordionBtns.forEach((accordion) => {
		accordion.onclick = function () {
			this.classList.toggle("active");

			let content = this.nextElementSibling;
			console.log(content);

			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
				console.log(content.style.maxHeight);
			}
		};
	});

	// slider survey
	const surveySliderSettings = {
		type: 'loop',
		gap: "20px",
		classes: {
			arrow: 'splide__arrow survey-slider__arrow',
		},
		pagination: false,
		breakpoints: {
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

	// slider promo
	const promoSlides = document.querySelectorAll(`[data-slide-title]`);
	let slideTitles = [];

	promoSlides.forEach(function (slide) {
		slideTitles.push(slide.dataset.slideTitle);
	});

	const promoSlider = new Splide('.promo__slider', {
		type: 'loop',
		arrows: false,
		drag: false,
		autoplay: true,
		// interval: 1000,
		// perPage: 1,
		// padding: {
		// 	right: '10%',
		// 	left: 0,
		// },

		classes: {
			pagination: 'splide__pagination promo__pagination',
		},

	});

	promoSlider.on('pagination:mounted', function (data) {
		data.list.classList.add('splide__pagination--custom');

		data.items.forEach(function (item) {
			item.button.textContent = `${slideTitles[item.page]}`;
		});
	});
	promoSlider.mount();

})