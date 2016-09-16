$(function() {
	$(document).foundation();

	$('input, textarea').placeholder(); 

	$(".menu").click(function(mobileOpen) {
        mobileOpen.preventDefault();
        $("header").toggleClass("open");
        $(".nav-wrapper").toggleClass("open");
        $(".mobile-close").toggleClass("open");
        $(".menu").toggleClass("hide");
        $('.logo img').attr('src', '_assets/images/logos/trimble-developer-white.svg');

    });

    $('.mobile-close').click(function(closeMenu) {
		closeMenu.preventDefault();
        $("header").toggleClass("open");
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




	$(".slider-button-1").click(function(sliderButton1) {
        sliderButton1.preventDefault();
        $(".slider-details-left").toggleClass("open");
        $(".slider-list-right").toggleClass("close2");
        $(".slider-list-left").toggleClass("close");
    });


    $(".slider-button-2").click(function(sliderButton2) {
        sliderButton2.preventDefault();
        $(".slider-details-right").toggleClass("open");
        $(".slider-list-left").toggleClass("close2");
        $(".slider-list-right").toggleClass("close");
        $(".info-slider").toggleClass("bg-grey");
    });




    //HardWare Dev Slider -> CSS transitions and media q's

    //// Left Side
    $(".hd-left .show-detail").click(function(hdLeftShowDetail) {
        hdLeftShowDetail.preventDefault();
        $(".hd-left .detail").toggleClass("open");
        $(".hd-left .content").toggleClass("close");
        $(".hd-col").toggleClass("shift-right shift");
    });

    $(".hd-left .show-list").click(function(hdLeftShowList) {
        hdLeftShowList.preventDefault();
        $(".hd-left .detail").toggleClass("open");
        $(".hd-left .content").toggleClass("close");
        // $(".title-shift").toggleClass("shift-right");
    });

    //// Right Side
    $(".hd-right .show-detail").click(function(hdRightShowDetail) {
        hdRightShowDetail.preventDefault();
        $(".hd-right .detail").toggleClass("open");
        $(".hd-right .content").toggleClass("close");
        $(".hd-col").toggleClass("shift-left shift");
        // $(".title-shift").toggleClass("shift-left");
    });

    $(".hd-right .show-list").click(function(hdRightShowList) {
        hdRightShowList.preventDefault();
        $(".hd-right .detail").toggleClass("open");
        $(".hd-right .content").toggleClass("close");
        // $(".title-shift").toggleClass("shift-left");
    });


    // Hardware Dev Left

    var sliderSubnavContentLeft = $('.slider-subnav-content-left');
        function hideAll() {
            $(sliderSubnavContentLeft).hide();
        }
        $('.slider-subnav-left a').click(function(e) {
            e.preventDefault();
            $('.slider-subnav-left a.selected').removeClass('selected');
            $(this).addClass('selected');

            var sliderSubnavContentLeftSection = $(this).attr('data-id');

            hideAll();

            $('#' + sliderSubnavContentLeftSection).fadeIn();

            setTimeout(function(){
                $(window).resize()
            }, 300); // Fixes issue where scrollbar doesnt show up
        });

        hideAll();

        $('.slider-subnav-left a:first').trigger('click');


        // Hardware Dev Right

        var sliderSubnavContentRight = $('.slider-subnav-content-right');
        function hideAllRight() {
            $(sliderSubnavContentRight).hide();
        }
        $('.slider-subnav-right a').click(function(e) {
            e.preventDefault();
            $('.slider-subnav-right a.selected').removeClass('selected');
            $(this).addClass('selected');

            var sliderSubnavContentRightSection = $(this).attr('data-id');

            hideAllRight();

            $('#' + sliderSubnavContentRightSection).fadeIn();

            setTimeout(function(){
                $(window).resize()
            }, 300); // Fixes issue where scrollbar doesnt show up
        });

        hideAllRight();

        $('.slider-subnav-right a:first').trigger('click');



    // Sub Nav

    
    
});







// TO DO 
$(document).ready(function() {

    function checkWidth() {
        var windowSize = $(window).width();



        var navSubNav = $('.nav-subnav');
        function hideAll() {
            $(navSubNav).hide();
            $('header').removeClass('bg-dropdown');
        }
        $('.dropdown').click(function(dd) {
            dd.preventDefault();
            //$('.slider-subnav a.selected').removeClass('selected');
            $(this).addClass('selected');
            

            var navSubNavSection = $(this).attr('data-id');

            hideAll();

            $('#' + navSubNavSection).fadeIn();
            $('header').addClass('bg-dropdown');

            setTimeout(function(){
                $(window).resize()
            }, 300); // Fixes issue where scrollbar doesnt show up
        });

        // Width is less than 1024
        if (windowSize <= 1024) {
            $('.dropdown-li .dropdown').click(function(tabletNav) {
                tabletNav.preventDefault();
                $('nav ul li').hide();
                $(this).parent('.dropdown-li').show().addClass('show-children');  
                var back = $('.mobile-back').css('display', 'block');
                // var back = $(this).html('Back'); 

                $(back).click(function(backLink) {
                     backLink.preventDefault();
                     $('nav ul li').show();
                     $('.nav-subnav').hide();
                     $(back).hide();

                });



            });
              
        }
        // Width is greater than 1024
        else if (windowSize >= 1024) {
            // $('nav ul li').show();
            // $('.nav-subnav').hide();
            // $(back).hide();
            //$('.show-children').toggleClass();



        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

});



 