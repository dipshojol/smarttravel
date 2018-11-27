// alert("this is my js")
$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.hi').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});
});