// alert("this is my js")
$(document).ready(function() {
    // manipulation of svg
    $('.svg').svgInject();

    $('.hamburger').click(function() {
        $('.nav-wrapper').toggleClass('navClicked');
    });

    // welcome animation start
    $(".welcometext1").animate({
        color: '#000',
        top: '0px',
        opacity: 1
    }, 3000//, function() {
    //     $(".welcometext1").animate({
    //         color: '#fff',
    //         top: '25px',
    //         opacity: 0
    //     }, 1000)
    // }
    );

    $(".welcometext2").animate({
        color: '#000',
        top: '65',
        opacity: 1
    }, 3000//, function() {
    //     $(".welcometext2").animate({
    //         color: '#fff',
    //         top: '25',
    //         opacity: 0
    //     }, 2000)
    // }
    );
    
// welcome animation end
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        $('.welcomeMain').css({
            'transform': 'translate(0px, ' + wScroll / 1 + '%)'
        });
        if (wScroll > 1) {
        $('nav').css({
            'opacity': wScroll/1000 + .6
        })
    }else{
        $('nav').css({
            'opacity': '.6'
        })
    }



        // $('.parallax-me').scrollBy(wScroll, 0);
    });

    // $('.global-nav ul.main-manu>li').click(function() {
    //     var myli = $(this) + $('li');
    //     $(myli).toggleClass('active');
    //     console.log(myli);
    // });

    // horizontal scroller
    // $('.parallax-wrapper div').on('mousewheel', function(e, delta){
    //     // console.log(delta);
    //     this.scrollLeft -= (delta * 1);
    //     e.preventDefault();

    //     console.log(delta);

    // })
});