$(document).ready((function(){new LazyLoad({elements_selector:".lazyload"});$((function(){$(".hamburger").on("click",(function(){$(".toggle").toggleClass("open"),$(".menu").toggleClass("open")}))})),jQuery((function(e){var t=window.location.href;e("ul li a").each((function(){this.href===t&&e(this).addClass("active")}))})),$(window).scroll((function(){$(document).scrollTop()>0?$("#header").addClass("fixed"):$("#header").removeClass("fixed")}));const e=document.querySelector(".search"),t=document.querySelector(".btn"),o=document.querySelector(".input");t.addEventListener("click",(()=>{e.classList.toggle("active"),o.focus()})),$(".home_slider").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),jQuery((function(e){e.fn.hScroll=function(t){t=t||120,e(this).bind("DOMMouseScroll mousewheel",(function(o){var a=o.originalEvent,i=a.detail?a.detail*-t:a.wheelDelta,s=e(this).scrollLeft();s+=i>0?-t:t,e(this).scrollLeft(s),o.preventDefault()}))}})),$(document).ready((function(){$(".home_portfolio").hScroll(60)})),$(".home_clients").owlCarousel({loop:!0,margin:20,nav:!1,dots:!0,center:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},400:{items:1},800:{items:2},1e3:{items:3},1200:{items:3},1400:{items:3},1600:{items:3}}});$(".home_brands").owlCarousel({loop:!0,margin:150,nav:!0,dots:!1,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},300:{items:1},500:{items:2},800:{items:3},1e3:{items:3},1200:{items:4},1400:{items:4},1600:{items:4}}});$(".about_clients").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".count").each((function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})})),$(document).ready((function(){$(".play_video").magnificPopup({type:"iframe"})})),$(".pricing_clients").owlCarousel({loop:!0,margin:20,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},400:{items:1},800:{items:2},1e3:{items:2},1200:{items:2},1400:{items:2},1600:{items:2}}}),$(".projects_tab").pTab({pTab:".tab_menu",pTabElem:"li",pContent:".tab-content",pClass:"aktif",pDuration:500,pEffect:"show"}),$(".project_item").slice(0,3).show(),$("#load").on("click",(function(e){e.preventDefault(),$(".project_item:hidden").slice(0,3).slideDown(),0==$(".project_item:hidden").length&&$("#load").fadeOut("slow")}));$(".project_detail_image").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})}));