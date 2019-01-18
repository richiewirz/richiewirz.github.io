
/*TODO: figure out scroll snap*/
$('.sidenav').children().click(function() {
	let target = this.id
	target = target + '-slide'

	let offset = $('#home-slide').offset().top
	targetPos = $(target).offset().top - offset
	// $('#content-wrapper').css("scroll-snap-type", "none")
	// $('#content-wrapper').css("color", "yellow")
	$('#content-wrapper').animate({scrollTop: targetPos}, 1000, "swing", function() {
		//$('#content-wrapper').css("color", "blue")
		//myFunc()
	});
	//$('#content-wrapper').css("scroll-snap-type", "y mandatory")
})
$('.mobnav').children().click(function() {
	let target = this.id
	target = target + '-slide'

	let offset = $('#home-slide').offset().top
	targetPos = $(target).offset().top - offset
	// $('#content-wrapper').css("scroll-snap-type", "none")
	// $('#content-wrapper').css("color", "yellow")
	$('#content-wrapper').animate({scrollTop: targetPos}, 1000, "swing", function() {
		//$('#content-wrapper').css("color", "blue")
		//myFunc()
	});
	//$('#content-wrapper').css("scroll-snap-type", "y mandatory")
})

function myFunc() {
	$('#content-wrapper').css("scroll-snap-type", "y mandatory", "important")
	$('#content-wrapper').children().css("snap-align", "start")
}
