$(document).ready(function(){
 
    $.getJSON( "../json/projects.json", function( json ) {	  
        let compteur = 0;
        for (let index = 4; index > 0; index--) {
            compteur++;
            
            let id = json.projects.length - compteur;

            var string = "";
            string += '<a href="pages.html?projects=' + id + '" class="index-project" >';
            string += '<img class="list-image" src="' + json.projects[ id ].image + '"></img> ';
            string += '<h1>'+ json.projects[ id ].name +'</h1> ';
            string += '<p>'+ json.projects[ id ].type +'</p> ';
            string += '<p class="type">'+ json.projects[ id ].status +'</p> ';
            string += '<img src="./images/fleche.png" alt="fleche" class="fleche"> ';
            string += '</a>  ';
            $('#projects').append(string);

        }
    });  
    setTimeout(hoverImage, 500); 
});




		//__________________Image Landing page__________________
		var rellax = new Rellax('.moi');


		//__________________Name index__________________
		var textWrapper = document.querySelector('.killian');
		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime.timeline()
			.add({
				targets: '.killian .letter',
				translateY: [100, 0],
				translateZ: 0,
				opacity: [0, 1],
				easing: "easeOutExpo",
				duration: 2000,
				delay: (el, i) => 2000 + 50 * i
			});

		var textWrapper = document.querySelector('.habasque');
		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime.timeline()
			.add({
				targets: '.habasque .letter',
				translateY: [100, 0],
				translateZ: 0,
				opacity: [0, 1],
				easing: "easeOutExpo",
				duration: 2000,
				delay: (el, i) => 2200 + 50 * i
			});

		//__________________Texte index__________________ 
		var tl = new TimelineMax();

		var tl = new TweenMax.staggerFrom(".annee", 2, {
			opacity: 0,
			x: -30,
			ease: Expo.easeInOut,
			delay: 2.5
		}, 0.1);

		var tl = new TweenMax.staggerFrom(".image", 2, {
			opacity: 0,
			y: 100,
			ease: Expo.easeInOut,
			delay: 0.5
		}, 0.1);







            //__________________Reveal index__________________ 
            $(function () {
                var elements = $(".projects, .grid-texte.two, .grid-texte.one, .titre, .index-contact, .index-about")
                    .toArray();

                $(window).scroll(function () {
                    elements.forEach(function (item) {
                        if ($(this).scrollTop() >= $(item).offset().top - 500) {
                            $(item).addClass("reveal");
                        }
                    });
                });
                elements.forEach(function (item) {
                    if ($(this).scrollTop() >= $(item).offset().top - 500) {
                        $(item).addClass("reveal");
                    }
                });
            });
    
    
            function hoverImage() { 
                const items = document.querySelectorAll('.index-project');

                items.forEach((el) => {
                  const image = el.querySelector('.list-image');
                
                  el.addEventListener('mouseenter', (e) => {
                    gsap.to(image, { autoAlpha: 1 , rotation: Math.random() * (12.5 - (-12.5)) - 12.5 });
                  });
                  
                   el.addEventListener('mouseleave', (e) => {
                    gsap.to(image, { autoAlpha: 0 });
                  });
                  
                  el.addEventListener('mousemove', (e) => {
                    gsap.set(image, { x: e.offsetX - 150});
                  });
                });
            }
        
           