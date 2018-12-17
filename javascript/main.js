// alert("this is my js")
$(document).ready(function() {

	// appding paralax into html
	var paralax = ""

	// $(".parallax").append('<section class="firstsection"><h1 class="hi">Hi</h1></section>');

    $(".welcometext1").css({
        'animation': 'myWelcomeTextFirst 3s 1'
    });
    $(".welcometext1").animate({
        color: '#000',
        top: '0px',
        opacity: 1
    }, 3000, function() {
        $(window).scroll(function() {
            var wScroll = $(this).scrollTop();

            if (wScroll > 100) {
                console.log($('.welcometext1:animated').length);
                    $(".welcometext1").remove()
                    $(".welcometext2").remove()
            }
            $('.hi').css({
                'transform': 'translate(0px, ' + wScroll / 2 + '%)'
            });
        });
        // Animation complete.
    });
    var classwelcome = document.getElementsByClassName('welcometext1');

    console.log(classwelcome + "this");

    // classwelcome.on('click', '.selector', function(event) {
    // event.preventDefault();
    /* Act on the event */
});
("webkitAnimationEnd", end, false);

function end() {
    classwelcome.remove();
}


// $('.welcometext1').on("webkitAnimationEnd", myEndFunction);

var myEndFunction = function() {
    console.log("done");
}


// $('.welcometext1').css({
// 	'animation: myWelcomeTextFirst 3s 1'
// });
// });