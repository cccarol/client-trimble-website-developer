$(function() {
	$(document).foundation();

	$('input, textarea').placeholder(); 

	$(".menu").click(function(mobileOpen) {
        mobileOpen.preventDefault();
        $(".nav-wrapper").toggleClass("open");
        $(".mobile-close").toggleClass("open");
        $(".menu").toggleClass("hide");
        $('.logo img').attr('src', '_assets/images/logos/trimble-developer-white.svg');

    });

    $('.mobile-close').click(function(closeMenu) {
		closeMenu.preventDefault();
		$('.nav-wrapper').toggleClass('open');
		$(".mobile-close").toggleClass("open");
		$(".menu").toggleClass("hide");
		$('.logo img').attr('src', '_assets/images/logos/trimble-developer.svg');
	})


	$('.loggedin').click(function(openAccountMenu) {
		openAccountMenu.preventDefault();
		$('.nav-account').toggleClass('open');
	})

	//$('.fancybox').fancybox();

	$(".slider-button-1").click(function(test) {
        test.preventDefault();
        $(".slider-details-left").toggleClass("open");
        $(".slider-list-right").toggleClass("close2");
        $(".slider-list-left").toggleClass("close");
    });


    $(".slider-button-2").click(function(test2) {
        test2.preventDefault();
        $(".slider-details-right").toggleClass("open");
        $(".slider-list-left").toggleClass("close2");
        $(".slider-list-right").toggleClass("close");
        $(".info-slider").toggleClass("bg-grey");
    });

    
});



 