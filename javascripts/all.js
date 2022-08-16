$(document).ready(function(){
    $('.pic-fixed').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log(scrollPos, windowHeight);
        
        $('.animated').each(function(){
            var thisPos = $(this).offset().top;
            if((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
            if(scrollPos==0){
                $('#upimg').removeClass('fadeIn');
            }
        });
    });
});
