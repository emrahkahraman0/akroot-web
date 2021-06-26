//JS

$(document).ready(function(){

    //Lazy-Load
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload"
    });

    //Menu
    $(function () {
        $('.hamburger').on('click', function () {
            $('.toggle').toggleClass('open');
            $('.menu').toggleClass('open');
        });
    });

    //Menu-Active
    jQuery(function($) {
        var path = window.location.href;
        $('ul li a').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });

    //Menu-Scroll
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed')
        }
    });

    //Search
    const search = document.querySelector('.search')
    const btn = document.querySelector('.btn')
    const input = document.querySelector('.input')

    btn.addEventListener('click', () => {
        search.classList.toggle('active')
        input.focus()
    })

    //Home_Slider
    $('.home_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            600:{items:1},
            1000:{items:1}
        }
    });

    //Home_Portfolio
    jQuery(function ($) {
        $.fn.hScroll = function (amount) {
            amount = amount || 120;
            $(this).bind("DOMMouseScroll mousewheel", function (event) {
                var oEvent = event.originalEvent,
                    direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                    position = $(this).scrollLeft();
                position += direction > 0 ? -amount : amount;
                $(this).scrollLeft(position);
                event.preventDefault();
            })
        };
    });

    $(document).ready(function() {
        $('.home_portfolio').hScroll(60); // You can pass (optionally) scrolling amount
    });

    //Home_Clients
    $('.home_clients').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        center: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            400:{items:1},
            800:{items:2},
            1000:{items:3},
            1200:{items:3},
            1400:{items:3},
            1600:{items:3},
        }
    });

    //Home_Brands
    const nexticon = "<i class=\"fas fa-chevron-left\"></i>";
    const previcon = "<i class=\"fas fa-chevron-right\"></i>";

    $('.home_brands').owlCarousel({
        loop:true,
        margin:150,
        nav:true,
        dots:false,
        navText: [nexticon, previcon],
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            300:{items:1},
            500:{items:2},
            800:{items:3},
            1000:{items:3},
            1200:{items:4},
            1400:{items:4},
            1600:{items:4},
        }
    });

    //About_Clients
    const firsticon = "<i class=\"fas fa-arrow-left\"></i>";
    const endicon = "<i class=\"fas fa-arrow-right\"></i>";

    $('.about_clients').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: [firsticon, endicon],
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            600:{items:1},
            1000:{items:1}
        }
    });

    //About_Counter
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //Services_Video
    $(document).ready(function() {
        $('.play_video').magnificPopup({
        type: 'iframe'
      });
    });

    //Pricing_Clients
    $('.pricing_clients').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            400:{items:1},
            800:{items:2},
            1000:{items:2},
            1200:{items:2},
            1400:{items:2},
            1600:{items:2},
        }
    });

    //Projects_Tab
    $(".projects_tab").pTab({
        pTab: '.tab_menu',
        pTabElem: 'li',
        pContent: '.tab-content',
        pClass : 'aktif',
        pDuration : 500,
        pEffect : 'show',
    });

    //Projects
    $(".project_item").slice(0, 3).show(),
        $("#load").on("click", function (e) {
            e.preventDefault(), $(".project_item:hidden").slice(0, 3).slideDown(), 0 == $(".project_item:hidden").length && $("#load").fadeOut("slow");
        });

    //Project_Details_İmage
    const ilkicon = "<i class=\"fas fa-arrow-left\"></i>";
    const sonicon = "<i class=\"fas fa-arrow-right\"></i>";

    $('.project_detail_image').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: [ilkicon, sonicon],
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            600:{items:1},
            1000:{items:1}
        }
    });

});