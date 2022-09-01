
/*서브 메뉴 slideDown*/

$ (function(){
	$('.menu>li').mouseover(function(){
		$(this).children('.sub').stop().slideDown();

	}).mouseout(function(){
		$('.sub').stop().slideUp();
	});

});

