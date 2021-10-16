
  







// LANDING PAGE: MENU RESPONSIVE 

	$(document).on("click", ".menu-open", function () {

    anime.timeline()
    .add({
        targets: '.menu > div',
        translateY: [400,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: 200
    });

	anime.timeline()
    .add({
        targets: '.menu-name, .menu-close',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 700,
        delay: 300
    });

	let nav = document.querySelector(".nav-container");
		nav.style.top = '0';

	});
	
	$(document).on("click", ".menu-close", function () {
		let nav = document.querySelector(".nav-container");
		nav.style.top = '-100%';
		
	});


// APPARITION HEADER


	var tl = new TweenMax.staggerFrom(".header", 2, { 
		border: 0,
		ease: Expo.easeInOut,
		delay: 0.2
	});

	var tl = new TweenMax.staggerFrom(".header-txt", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 0.4
    });
    var tl = new TweenMax.staggerFrom(".menu-open", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 0.6
    });

    var tl = new TweenMax.staggerFrom(".logo", 2, {
        opacity: 0,     
        y: 10,
        ease: Expo.easeInOut,
        delay: 0.2
    });






