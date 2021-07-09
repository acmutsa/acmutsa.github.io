/**
 * Template Name: Maxim - v2.1.0
 * Template URL: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;
                var scrolled = 0;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        scrollto += scrolled;
                    }
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars" aria-hidden="true" style="color: white;"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle svg').toggleClass('fa-bars fa-times');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().toggle();
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle svg').toggleClass('fa-bars fa-times');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    /*
        Navigation active state on scroll
     */
    // var nav_sections = $('section');
    // var main_nav = $('.nav-menu, #mobile-nav');
    // var main_nav_height = $('#header').outerHeight();
    //
    // $(window).on('scroll', function () {
    //     var cur_pos = $(this).scrollTop() + 10;
    //
    //     nav_sections.each(function () {
    //         var top = $(this).offset().top - main_nav_height,
    //             bottom = top + $(this).outerHeight();
    //
    //         if (cur_pos >= top && cur_pos <= bottom) {
    //             if (cur_pos <= bottom) {
    //                 main_nav.find('li').removeClass('active');
    //             }
    //             main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //         }
    //     });
    // });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').toggle();
        } else {
            $('.back-to-top').toggle();
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    var $filters = $('.filter [data-filter]'),
        $boxes = $('.boxes [data-category]');

    $filters.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);

        $filters.removeClass('active');
        $this.addClass('active');

        var $filterColor = $this.attr('data-filter');

        const speed = 75;
        const shouldFilter = $filterColor == 'all';
        $boxes.removeClass('is-animated')
            .fadeOut().finish().promise().done( () => {
            $boxes
                .filter(shouldFilter ? "*" : '[data-category = "' + $filterColor + '"]')
                .each(function (i) {
                    $(this).addClass('is-animated').delay((i++) * speed).fadeIn(speed);
                });
        });
    });

    // Initi AOS
    AOS.init({
        duration: 800,
        easing: "ease-in-out"
    });

})(jQuery);