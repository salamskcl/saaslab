(function ($) {
"use strict";

	// Preloader
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})





	$('.hamburegr-menu, .close-btn').on('click', function(){
	    $('.siderbar-menu').toggleClass('active');
	});







	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "767"
	});


	// header-sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});


	// Slider Area
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slider-area:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slider-area[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	// team-slider
	$('.team-slider').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  prevArrow: '<button type="button" class="slick-prev"><i class="icofont-rounded-left"></i></button>',
	  nextArrow: '<button type="button" class="slick-next"><i class="icofont-simple-right"></i></button>',
	  arrows: true,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },

	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },

	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	  		autoplay: true

	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


	$('.blogslider').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1,
	  prevArrow: '<button type="button" class="slick-prev"><i class="icofont-rounded-left"></i>Previous</button>',
	  nextArrow: '<button type="button" class="slick-next">Next<i class="icofont-simple-right"></i></button>',
	  arrows: true,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },

	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,

	      }
	    },

	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	  		autoplay: true

	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


	$('.recent-slider').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  prevArrow: '<button type="button" class="slick-prev"><i class="icofont-long-arrow-left"></i></i></button>',
	  nextArrow: '<button type="button" class="slick-next"><i class="icofont-long-arrow-right"></i></button>',
	  arrows: true,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },

	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,

	      }
	    },

	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	  		autoplay: true

	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});

	/* magnificPopup video view */
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});	
	/* magnificPopup video view */
	$('.blogvideo-popup').magnificPopup({
		type: 'iframe'
	});






	// You can also pass an optional settings object
	// below listed default settings
	AOS.init({
	  // Global settings:
	  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	  initClassName: 'aos-init', // class applied after initialization
	  animatedClassName: 'aos-animate', // class applied on animation
	  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	  

	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: 120, // offset (in px) from the original trigger point
	  delay: 0, // values from 0 to 3000, with step 50ms
	  duration: 400, // values from 0 to 3000, with step 50ms
	  easing: 'ease', // default easing for AOS animations
	  once: false, // whether animation should happen only once - while scrolling down
	  mirror: false, // whether elements should animate out while scrolling past them
	  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	})

	// WOW active
	new WOW().init();

	// select active
	$('select').niceSelect();

	


	$(".toggle-password").click(function() {

	  $(this).toggleClass("icofont-eye-blocked");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});
	

	// quantity
	var QtyInput = (function () {
		var $qtyInputs = $(".qty-input");

		if (!$qtyInputs.length) {
			return;
		}

		var $inputs = $qtyInputs.find(".product-qty");
		var $countBtn = $qtyInputs.find(".qty-count");
		var qtyMin = parseInt($inputs.attr("min"));
		var qtyMax = parseInt($inputs.attr("max"));

		$inputs.change(function () {
			var $this = $(this);
			var $minusBtn = $this.siblings(".qty-count--minus");
			var $addBtn = $this.siblings(".qty-count--add");
			var qty = parseInt($this.val());

			if (isNaN(qty) || qty <= qtyMin) {
				$this.val(qtyMin);
				$minusBtn.attr("disabled", true);
			} else {
				$minusBtn.attr("disabled", false);
				
				if(qty >= qtyMax){
					$this.val(qtyMax);
					$addBtn.attr('disabled', true);
				} else {
					$this.val(qty);
					$addBtn.attr('disabled', false);
				}
			}
		});

		$countBtn.click(function () {
			var operator = this.dataset.action;
			var $this = $(this);
			var $input = $this.siblings(".product-qty");
			var qty = parseInt($input.val());

			if (operator == "add") {
				qty += 1;
				if (qty >= qtyMin + 1) {
					$this.siblings(".qty-count--minus").attr("disabled", false);
				}

				if (qty >= qtyMax) {
					$this.attr("disabled", true);
				}
			} else {
				qty = qty <= qtyMin ? qtyMin : (qty -= 1);
				
				if (qty == qtyMin) {
					$this.attr("disabled", true);
				}

				if (qty < qtyMax) {
					$this.siblings(".qty-count--add").attr("disabled", false);
				}
			}

			$input.val(qty);
		});
	})();


	// elevateZoom











	$( ".product-thum a" ).on( "click", function() {
	  $(".custom-modal-width").addClass("custom-modal-show");
	});


	// elevateZoom
	$("#img_01").elevateZoom({
		constrainType:"height",
		constrainSize:274,
		zoomType: "lens", 
		containLensZoom: true,
		gallery:'gal1', 
		cursor: 'pointer',
		galleryActiveClass: "active"}
	); 

	$("#img_01").bind("click", function(e) {  
	  var ez =   $('#img_01').data('elevateZoom');	
		$.fancybox(ez.getGalleryList());
	  return false;
	});

$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});


})(jQuery);






