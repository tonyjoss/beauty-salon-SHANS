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

    //**sent form**//
    $('#application').submit(function() {
        $.ajax({
            type: "POST",
            url: "",
            data: $(this).serialize()
        }).done(function() {
            toastr.success('Дякуємо за Ваше повідомлення \n Ми з Вами звяжемось як тільки це буде можливо!');
            $("#application").get(0).reset();
        });
        return false;
    });

    // **form validation**//
    (function( $ ){
        $(function() {
            $('#application').each(function(){
                //oбявлення перемінної(форма і кнопка відправки)
                var form = $(this),
                    btn = form.find('#btn');
                //додаємо кожному полю котре перевіряємо, вказуємо що поле пусте
                form.find('.rfield').addClass('empty_field');
                //функція провірки полів форми
                function checkInput(){
                    form.find('.rfield').each(function(){
                        if($(this).val() != ''){
                            //якщо поле не пусте то видаляємо клас-указание
                            $(this).removeClass('empty_field');
                        } else {
                            // якщо поле пусте додаємо класс-указание
                            $(this).addClass('empty_field');
                        }
                    });
                }

                // функція підсвідки незаповнених полів
                function lightEmpty(){
                    form.find('.empty_field').css({'border-color':'#d8512d'});
                    // через півсекунди видаляємо підсвідку
                    setTimeout(function(){
                        form.find('.empty_field').removeAttr('style');
                    },500);
                }

                // перевірка в режимі реального часу
                setInterval(function(){
                    //запускаємо функцію перевірки полів на заповненість
                    checkInput();
                    //рахуємо кількість незаповнених полів
                    var sizeEmpty = form.find('.empty_field').size();
                    // Вешаем условие-тригер на кнопку отправки формы
                    if(sizeEmpty > 0){
                        if(btn.hasClass('disabled')){
                            return false
                        } else {
                            btn.addClass('disabled')
                        }
                    } else {
                        btn.removeClass('disabled')
                    }
                },500);

                // Событие клика по кнопке отправить
                btn.click(function(){
                    if($(this).hasClass('disabled')){
                        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                        lightEmpty();
                        return false
                    }
                });
            });
        });

    })( jQuery );

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

    //**bxSlider to section main page**//
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

    //**bxSlider to section services page**//
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
            hideControlOnEnd: false

        });
        // slider.reloadSlider();
    });

    //**responsive fancybox tab menu**//
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

    //**responsive fancybox tab menu iframe**//
    $("#iframe").fancybox({
        'type' : 'iframe'
    });

    //**map disable scroll(метод накладання поверх прозорого діва і по кліку забираємо його)**//
    $('.overlay').click(function() {
        $(this).remove();
    });
    //** active color navbar header **//
    // $('.navigate__header li').on('click', function(){
    //     $('.navigate__header li a').each(function () {
    //         $(this).addClass('active');
    //     });
    //     $(this).find('a').removeClass('active');
    // });

    //**mobile nav menu**//
    $(function() {
        var slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70,
            'easing': 'cubic-bezier(.32,2,.55,.27)'
        });
        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function() {
            slideout.toggle();
        });
    });

    //**masonry**//
    var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
        $('.item').imagefill();
    });

        //**change active class in main navbar menu**//
    // $(function() {
    //     $('.navigate__header li a').click(function() {
    //         //e.preventDefault();
    //         // $(".navigate__header li a").removeClass('active');
    //         // $(this).addClass('active');
    //         $('.navigate__header li a').each(function() {
    //             if (this.href == location.pathname) {
    //                 $(this).addClass('active');
    //             }
    //         });
    //     })
    // });
});





