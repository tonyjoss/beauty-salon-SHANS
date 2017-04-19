$(document).ready(function(){
    //**button scroll to top**//
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top').click(function() {
	    $('html,body').animate({
	        scrollTop: 0
	    }, 1000);
    		return false;
	});



    //якщо буде потрібно якір//
    //**scroll menu**//
    // $('a:not(.left, .right, .back-to-top)[href^="#"]').click(function(){
    //     var el = $(this).attr('href');
    //     $('body').animate({
    //         scrollTop: $(el).offset().top}, 2000);
    //     return false;
    // });

    //**paralax**//
    // jQuery('.parallax-layer').parallax(
    //     { mouseport: jQuery("#port") },
    //     { xparallax: '100px',    yparallax: '100px'},
    //     { xorigin: 'center', yorigin: 'center'},
    //     { frameDuration: '1000s'}
    // );

    // $('#scene').parallax();



    //**transition download page**//
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function(event){
        event.preventDefault();
        //linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }
    //**download page transition end**//


   // **portfolio tabs***//
   //  jQuery('.tabs .tab-links a').on('click', function(e)  {
   //      var currentAttrValue = jQuery(this).attr('href');
   //
   //      // Show/Hide Tabs
   //      jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
   //
   //      // Change/remove current tab to active
   //      jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
   //
   //      e.preventDefault();
   //  });

    //**bxSlider to section what we do**//
    jQuery(function ($) {
        slider = $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            auto: true,
            speed: 800,
            pause: 4000,
            easing: 'jswing',
            tickerHover: true,
            adaptiveHeightSpeed: true,
            adaptiveHeight: 500,
            controls: true,
            startSlide: 0,
            infiniteLoop: true,
            responsive: true,
            useCSS: false,
            preloadImages:'all',
            touchEnabled: true,
            autoStart: true,
            autoHover: true,

            slideWidth: 0,
            infiniteLoop: true,
            hideControlOnEnd: false,

        });
        // slider.reloadSlider();
    });

    //**tabs main page**//
    $('.tabs').pwstabs({
        effect: 'slideleft',
        defaultTab: 1,
        tabsPosition: 'horizontal',
        responsive: true
    });
    //**tabs portfolio page**//
    $('.tabs-portfolio').pwstabs({
        effect: 'slideleft',
        defaultTab: 1,
        tabsPosition: 'horizontal',
        responsive: true
    });

    jQuery(function ($) {
        slider = $('.slider__certificate').bxSlider({
            mode: 'horizontal',
            captions: true,
            auto: true,
            speed: 800,
            pause: 4000,
            easing: 'jswing',
            tickerHover: true,
            adaptiveHeightSpeed: true,
            adaptiveHeight: 500,
            controls: false,
            startSlide: 0,
            infiniteLoop: true,
            responsive: true,
            useCSS: false,
            preloadImages:'all',
            touchEnabled: true,
            autoStart: true,
            autoHover: true,
            slideWidth: 0,
            infiniteLoop: true,
            hideControlOnEnd: false,

        });
        // slider.reloadSlider();
    });


    $("[data-fancybox]").fancybox({
        // "padding" : 20,
        // "imageScale" : false,
        // "zoomOpacity" : false,
        // "zoomSpeedIn" : 1000,
        // "zoomSpeedOut" : 1000,
        // "zoomSpeedChange" : 1000,
        // "frameWidth" : 700,
        // "frameHeight" : 600,
        // "overlayShow" : true,
        // "overlayOpacity" : 0.8,
        // "hideOnContentClick" :false,
        // "centerOnScroll" : false
    });

});





