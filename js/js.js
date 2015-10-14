jQuery(document).ready(function($){
    if($(window).width()>801) {
        $("#owl-demo").owlCarousel({
            items : 1,
            itemsDesktop : [1200,1],
            itemsDesktopSmall : [800,1],
            itemsTablet: [500,1],
            itemsMobile : false,
            autoPlay: false,
            speed: 3000,
            loop: true,
            navigation: true
        });
    }
    else{
        $("#owl-demo").owlCarousel({
            items : 1,
            itemsDesktop : [1200,1],
            itemsDesktopSmall : [800,1],
            itemsTablet: [500,1],
            itemsMobile : false,
            autoPlay: false,
            speed: 3000,
            loop: true,
            navigation: false
        });
    }
    var touch 	= $('#touch-menu');
    var menu 	= $('.menu');
    $(touch).click(function(e) {
        e.preventDefault();
        menu.slideToggle();
    });


});


