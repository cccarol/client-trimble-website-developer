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

	//$('.fancybox').fancybox();

});
