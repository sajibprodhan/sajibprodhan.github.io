// Typed Text Change
if ($("#typedStrings").length > 0) {
	document.addEventListener("DOMContentLoaded", function () {
		var typed = new Typed("#textTyped", {
			stringsElement: "#typedStrings",
			typeSpeed: 50,
			backSpeed: 50,
			startDelay: 50,
			loop: true,
			loopCount: Infinity,
		});
	});
}
// owl sarousel
$(document).ready(function () {
	$(".testimonial-slider-item-wrapper").owlCarousel({
		loop: true,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 1,
				nav: true,
			},
			1000: {
				items: 1,
				nav: true,
				loop: true,
				margin: 20,
			},
		},
		autoplay: true,
		loop: true,
		smartSpeed: 1000,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
	});
});
// Counter
$(document).ready(function () {
	$(window).scroll(testScroll);
	var viewed = false;
	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return elemBottom <= docViewBottom && elemTop >= docViewTop;
	}
	function testScroll() {
		if (isScrolledIntoView($(".counter-item-outer")) && !viewed) {
			viewed = true;
			$(".counter-number").each(function () {
				$(this)
					.prop("Counter", 0)
					.animate(
						{
							Counter: $(this).text(),
						},
						{
							duration: 3000,
							easing: "swing",
							step: function (now) {
								$(this).text(Math.ceil(now));
							},
						},
					);
			});
		}
	}
});

// $('.progressbar-init').each(function(){
// 	$(this).LineProgressbar({
// 		percentage:$(this).attr('data-val'),
// 		radius: '3px',
// 		height: '20px',
// 		fillBackgroundColor: $(this).attr('data-color'),
// 	});
// });

$(function () {
	var $section = $(".skill-info-section");
	var $queue = $({});

	function loadDaBars() {
		$(".progressbar-init").each(function () {
			$(this).LineProgressbar({
				percentage: $(this).attr("data-val"),
				radius: "3px",
				height: "20px",
				fillBackgroundColor: $(this).attr("data-color"),
			});
		});
	}

	$(document).bind("scroll", function (ev) {
		var scrollOffset = $(document).scrollTop();
		var containerOffset = $section.offset().top - window.innerHeight;
		if (scrollOffset + 5 >= containerOffset) {
			loadDaBars();
			$(document).unbind("scroll");
		}
	});
});

//===== Magnific Popup
$(".image-popup").magnificPopup({
	type: "image",
	gallery: {
		enabled: true,
	},
});

// Load more data with click
$(document).ready(function () {
	var $itemsToShow = 6;
	var $items = $(".single-item");

	// Show more items when the button is clicked
	$(".main-btn").click(function () {
		var $hiddenItems = $items.filter(":hidden");

		if ($hiddenItems.length > 0) {
			$hiddenItems.slice(0, $itemsToShow).show();
		} else {
			$(this).hide();
		}
	});
});


// ===== Section Menu Active ======

$(function() {
    $('a.nav-item-main-link[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 83)
                }, 200, "easeInOutExpo");
                return false;
            }
        }
    });
});


var scrollLink = $(".nav-item-main-link");
	$(window).scroll(function() {
	var scrollbarLocation = $(this).scrollTop();

	scrollLink.each(function() {
		var sectionOffset = $(this.hash).offset().top - 88;
		if ( sectionOffset <= scrollbarLocation ) {
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		}
	});
});


$(document).ready(function(){
  	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop()
		if(scrollTop >=130){
			$('body').addClass('fixed-header');
		}else {
			$('body').removeClass('fixed-header');
		}
  	});

  	$('.nav-toggle-btn').click(function(){
  		$(this).closest(".nav-main").toggleClass("menu-visible");
  	});

  	$(".nav-item-main").click(function () {
	    $(".nav-item-main").removeClass("active");
	    $(this).addClass("active");   
	});
  });


// Show or hide the sticky footer button
// $(window).on('scroll', function(event) {
// 	if($(this).scrollTop() > 600){
// 		$('.back-to-top').fadeIn(200)
// 	} else{
// 		$('.back-to-top').fadeOut(200)
// 	}
// });


//Animate the scroll to yop
// $('.back-to-top').on('click', function(event) {
// 	event.preventDefault();
	
// 	$('html, body').animate({
// 		scrollTop: 0,
// 	}, 1500);
// });
    