var $win = $(window);
var $masthead = $(".masthead");
var $footer = $(".footer");

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
  // var footerPos = (scrollPos - footerOffset.top) / 2;

	$masthead.css('background-position', 'center ' + scrollPos / 2 + 'px');

	$footer.css('background-position', 'center ' + footerPos + 'px');
});



