$(function() {
	$(document).foundation();

	$('input, textarea').placeholder(); 

	$(".menu").click(function(mobileOpen) {
        mobileOpen.preventDefault();
        $(".nav-wrapper").toggleClass("open");
    });

    $('.mobile-close').click(function(closeMenu) {
		closeMenu.preventDefault();
		$('.nav-wrapper').toggleClass('open');
	})

	$('.fancybox').fancybox();

});
