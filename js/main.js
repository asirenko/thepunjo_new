jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.header__main__nav').on('click', function(event){
		if($(event.target).is('.header__main__nav')) $(this).children('.header__main__nav__list').toggleClass('is-visible');
	});
});
