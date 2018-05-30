$(document).ready(function(){
    $('.venobox').venobox(); 
	   $('.sliders').slick({
    
      });
});
(function($) {
        "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
    },

    $WIN = $(window);
    var menu = function() {

        var menuTrigger  = $('.menu-toggle'),
            nav  = $('.nav'),
            closeButton  = nav.find('.nav-close'),
            body = $('body'),
            mainContents = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            body.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');	
        });

        // close menu clicking outside the menu itself
        body.on('click', function(e){
            if( !$(e.target).is('.nav, .nav-content, .menu-toggle, .menu-toggle span') ) {
                // menuTrigger.removeClass('is-clicked');
                body.removeClass('menu-is-open');
            }
        });

    };

    var smoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };
    var AnimaScroll = function() {
        
        AOS.init( {
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };
        var statCount = function() {
        
        var statSection = $(".about-stats"),
            stats = $(".stats-count");

        statSection.waypoint({
            handler: function(direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                } 

                // trigger once only
                this.destroy();

            },

            offset: "90%"

        });
    };
    var typeWriter = function() {
    var texto  ="   This city was once a happy, peaceful place...until one day, a powerful secret criminal organization took over. This vicious syndicate soon had control of the government and even the police force. The city has become a center of violence where no one is safe."
    $(".typewriter").typewriter({   text : texto,
                                    speed : 80,                  // speed of each character in milliseconds
                                    loop : true,                  // can be set to false to disable looping
                                    loopDelay : 10000,             // delay between the looping iterations in ms
                                    cursor : true,                // can be set to false to disable the trailing cursor
                                    cursorType : '_',             // takes a string which represents the cursor type
                                    hideCursorAfterTyping : false // can be set to true if you need the cursor to disappear after typing out the text
                                })


								
    };
	var backToTop = function() {
        
        var pxShow  = 500,         
        fadeInTime  = 400,         
        fadeOutTime = 400,         
        scrollSpeed = 300,       
        goTopButton = $(".go-top")
        

        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };
    (function ssInit() {
        
        menu();
        AnimaScroll();
        statCount();
        typeWriter();
        smoothScroll();
		backToTop();

    })();
        
        
})(jQuery);