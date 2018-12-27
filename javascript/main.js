// alert("this is my js")
$(document).ready(function() {
    $('nav').click(function(){
        $('.nav-wrapper').toggleClass('navClicked');
    });
    $(".welcometext1").animate({
        color: '#000',
        top: '0px',
        opacity: 1
    }, 4000, function() {
        $(".welcometext1").animate({
            color: '#fff',
            top: '25px',
            opacity: 0
        }, 1000)
    });

    $(".welcometext2").animate({
        color: '#000',
        top: '50',
        opacity: 1
    }, 4000, function() {
        $(".welcometext2").animate({
            color: '#fff',
            top: '25',
            opacity: 0
        }, 2000)
        // Animation complete.
    });

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        $('.hi').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)'
        });
    });

    // classwelcome.on('click', '.selector', function(event) {
    // event.preventDefault();
    /* Act on the event */

});