
// console.log("JS ok");

var introBlackScene = document.querySelector(".a_intro_scene");
var navigation = document.querySelector(".a_nav");
var mainHero = document.querySelector(".a_main_hero");
var threeImages = document.querySelector(".a_three_images");
var bgWhite = document.querySelector(".a_bg_white");
var slider = document.querySelector(".a_slider");

var introLogo = introBlackScene.querySelector(".a_intro_logo");
var introTitleLine = introBlackScene.querySelectorAll(".a_title_line");
var introTitleCharacters = introBlackScene.querySelectorAll(".a_char");
var introTagline = introBlackScene.querySelector(".a_tagline");
var introYear = introBlackScene.querySelector(".a_intro_year");
var sliderImage = slider.querySelector(".a_slider_image");

var imageLeft = threeImages.querySelector(".a_image_left");
var imageCenter = threeImages.querySelector(".a_image_center");
var imageRight = threeImages.querySelector(".a_image_right");

var mainLogoCharacters = mainHero.querySelectorAll(".a_char");
var mainLogoTaglineTop = mainHero.querySelector(".a_main_tagline_top");
var mainLogoTaglineBottom = mainHero.querySelector(".a_main_tagline_bottom");

var wheelCount = 0;
var taglineDuration = 4;

function a_start() {

	// console.log("a_start");
	
	var tl = new TimelineLite();

	tl.set(navigation, { yPercent : -100 });
	tl.set(bgWhite, { yPercent : 0 });
	tl.set(mainLogoTaglineTop, { yPercent : 100 });
	tl.set(mainLogoTaglineBottom, { yPercent : 100 });
	tl.set(slider, { yPercent : 100 });

	a_intro_chars();
	a_intro_logo();
	a_tagline();
}

function a_intro_chars() {

	// console.log("a_intro_chars");
	
	var tl = new TimelineLite();

	tl.staggerFromTo(introTitleCharacters,
		0.75,
		{ scale : 0.95, opacity : 0, yPercent : 100, ease : Power3.easeOut },
		{ scale : 1, opacity : 1, yPercent : 0, ease : Power3.easeOut },
		0.03);
}

function a_intro_logo() {

	// console.log("a_intro_logo");
	
	var tl = new TimelineLite();

	tl.fromTo(introLogo,
		taglineDuration,
		{ y : 150, ease : Power3.easeOut },
		{ y : 0, ease : Power3.easeOut }
		);

}

function a_tagline() {

	// console.log("a_tagline");
	
	var tl = new TimelineLite({onComplete : a_three_images});

	yearCounter();

	tl.fromTo(introTagline,
		taglineDuration,
		{ y : 250, opacity : 0, ease : Power3.easeOut },
		{ y : 0, opacity : 1, ease : Power3.easeOut },
		0.5);

}

function yearCounter() {
	var startingYear = introYear.innerHTML;
	var getDate = new Date();
	var currentYear = getDate.getFullYear();
	// console.log("introYear", introYear.innerHTML);
	// console.log("getDate", getDate.getFullYear());

	var obj = { value : startingYear };
	TweenMax.to(obj, taglineDuration, { value : currentYear, roundProps:"value", ease:Linear.easeNone, onUpdate:function() {
		introYear.innerHTML = obj.value;
	}});
}

function a_three_images() {

	// console.log("a_three_images");
	
	var tl = new TimelineLite();

	a_image_left();
	a_image_center();
	a_image_right();
	a_bg_white();
	a_show_nav();

	tl.fromTo(threeImages,
		taglineDuration * 0.75,
		{ yPercent : 0, ease : Power3.easeNone },
		{ yPercent: -100, ease : Power3.easeNone },
	);
}

function a_image_left() {

	// console.log("a_image_left");
	
	var tl = new TimelineLite();

	tl.fromTo(imageLeft,
		taglineDuration * 1.5,
		{ yPercent: -50, rotation : 15, top : "50%", ease : Power3.easeInOut },
		{ yPercent: -50, rotation: 0, top : "50%", ease : Power3.easeInOut },
	);
}

function a_image_center() {

	// console.log("a_image_center");
	
	var tl = new TimelineLite();

	tl.fromTo(imageCenter,
		taglineDuration * 1.5,
		{ xPercent : 50, yPercent: -50, rotation : -15, top : "38%", ease : Power3.easeInOut },
		{ xPercent : 50, yPercent: -50, rotation: 0, top : "38%", ease : Power3.easeInOut },
	);
}

function a_image_right() {

	// console.log("a_image_right");
	
	var tl = new TimelineLite();

	tl.fromTo(imageRight,
		taglineDuration * 1.5,
		{ yPercent: -50, rotation : -15, top : "62%", ease : Power3.easeInOut },
		{ yPercent: -50, rotation: 0, top : "62%", ease : Power3.easeInOut },
	);
}

function a_show_nav() {

	// console.log("a_show_nav");
	
	var tl = new TimelineLite();

	tl.fromTo(navigation,
		1,
		{ yPercent : -100, opacity : 0, ease : Power3.easeOut },
		{ yPercent : 0, opacity : 1, ease : Power3.easeOut },
		2.5);

}

function a_bg_white() {

	// console.log("a_bg_white");
	
	var tl = new TimelineLite();

	a_show_main_logo();

	tl.fromTo(bgWhite,
		taglineDuration  / 4,
		{ yPercent : 0, ease : Power3.easeInOut },
		{ yPercent: -100, ease : Power3.easeInOut },
	1.5);
}

function a_show_main_logo() {

	// console.log("a_show_main_logo");
	
	var tl = new TimelineLite();

	a_show_main_logo_tagline_top();
	a_show_main_logo_tagline_bottom();

	tl.staggerFromTo(mainLogoCharacters,
		0.75,
		{ scale : 0.5, opacity : 0, yPercent : 100, ease : Power3.easeOut },
		{ scale : 1, opacity : 1, yPercent : 0, ease : Power3.easeOut, delay : 2 },
		0.03);
}

function a_show_main_logo_tagline_top() {

	// console.log("a_show_main_logo_tagline_top", mainLogoTaglineTop);
	
	var tl = new TimelineLite();

	tl.fromTo(mainLogoTaglineTop,
		1,
		{ yPercent : 100, ease : Power3.easeOut },
		{ yPercent : 0, ease : Power3.easeOut, delay : 3 },
	);
}

function a_show_main_logo_tagline_bottom() {

	// console.log("a_show_main_logo_tagline_bottom", mainLogoTaglineBottom);
	
	var tl = new TimelineLite({onComplete : animate_on_wheel});

	tl.fromTo(mainLogoTaglineBottom,
		1,
		{ yPercent : 100, ease : Power3.easeOut },
		{ yPercent : 0, ease : Power3.easeOut, delay : 3 },
	);
}

function animate_on_wheel() {

	// console.log("start scrolling");
	
	window.addEventListener("wheel", function() {

		wheelCount++;

		if ( wheelCount === 1 ) {

			a_remove_three_images();
			a_remove_main_logo();
			a_remove_nav();

			a_remove_main_logo_tagline_top();
			a_remove_main_logo_tagline_bottom();

			a_show_slider();
		}
	});
}

function a_remove_nav() {

	// console.log("a_remove_nav");
	
	var tl = new TimelineLite();

	tl.fromTo(navigation,
		1,
		{ yPercent : 0, opacity : 1, ease : Power3.easeOut },
		{ yPercent : -100, opacity : 0, ease : Power3.easeOut },
		);
}

function a_remove_three_images() {

	// console.log("a_remove_three_images");

	var tl = new TimelineLite();

	tl.to(threeImages,
		taglineDuration * 0.75,
		{ yPercent : -200, ease : Power3.easeNone },
	);
}

function a_remove_main_logo() {

	// console.log("a_remove_main_logo");

	var tl = new TimelineLite();

	tl.staggerFromTo(mainLogoCharacters,
		0.75,
		{ scale : 1, opacity : 1, yPercent : 0, ease : Power3.easeOut },
		{ scale : .75, opacity : 0, yPercent : -200, ease : Power3.easeOut },
		0.03);
}

function a_remove_main_logo_tagline_top() {

	// console.log("a_remove_main_logo_tagline_top");

	var tl = new TimelineLite();

	tl.to(mainLogoTaglineTop,
		1,
		{ yPercent : -100, ease : Power3.easeNone },
	);
}

function a_remove_main_logo_tagline_bottom() {

	// console.log("a_remove_main_logo_tagline_bottom");

	var tl = new TimelineLite();

	tl.to(mainLogoTaglineBottom,
		1,
		{ yPercent : -100, ease : Power3.easeNone },
	);
}

function a_show_slider() {

	// console.log("a_show_slider");
	
	var tl = new TimelineLite({onComplete : drawCircle});

	a_slider_image();

	tl.fromTo(slider,
		2.5,
		{ yPercent : 100, opacity : 0, ease : Power3.easeOut },
		{ yPercent : 0, opacity : 1, ease : Power3.easeOut },
	);
}

function a_slider_image() {

	// console.log("a_slider_image");
	
	var tl = new TimelineLite();

	tl.fromTo(sliderImage,
		1,
		{ scale : 0.75, yPercent : 100, opacity : 0, ease : Power3.easeOut },
		{ scale : 1, yPercent : 0, opacity : 1, ease : Power3.easeOut },
		2
	);
}

function drawCircle() {
	var svg = document.querySelector(".svg-circle");
	var circle = svg.querySelector("circle");
	var radius = circle.getAttribute('r');
	var percent = svg.dataset.percent;
	var circumference = 2 * radius * Math.PI;
	var drawLine = percent * circumference / 100;
	svg.style.strokeDasharray = drawLine + '999';
}



a_start();

