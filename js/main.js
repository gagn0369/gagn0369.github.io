var $win = $(window);
var $masthead = $(".masthead");
var $nav = $(".nav-container");
var $footer = $(".contact");
var $wordmark = $(".wordmark")


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
    var footerPos = (scrollPos - $footer.offset().top) / 2;

	$masthead.css('background-position', 'center ' + scrollPos / 2 + 'px');

	$footer.css('background-position', 'center ' + footerPos + 'px');
});

$nav.waypoint(function(direction) {
	if (direction == "down") {
		$nav.addClass('sticky');
	} else {
		$nav.removeClass('sticky');
	}
});

$masthead.waypoint(function(direction) {
	if (direction == "down") {
		$wordmark.addClass('wordmark-animate');
	} else {
		$wordmark.removeClass('wordmark-animate');
	}
});
