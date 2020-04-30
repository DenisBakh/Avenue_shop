//=====================CONTENT===========================================================//
$('.block-topcontent__pic').click(function(event) {
	//$('.block-topcontent__pic').removeClass('active');
	$(this).closest('.block-topcontent__pics').find('.block-topcontent__pic').removeClass('active');
	//$(this).closest('.block-topcontent__item_hover').find('img').removeClass('active');
	$(this).closest('.block-topcontent__item').find('img').removeClass('active');
	//$('.block-topcontent__item_hover img').removeClass('active');
	$(this).addClass('active');
	var Link_num=$(this).attr('data-imgnumber')
	//console.log(Link_num);
	//$('.block-topcontent__item_hover img[data-imgnumber="' + Link_num + '"]').addClass('active')
	//$(this).closest('.block-topcontent__item_hover').find('img[data-imgnumber="' + Link_num + '"]').addClass('active')
	$(this).closest('.block-topcontent__item').find('img[data-imgnumber="' + Link_num + '"]').addClass('active')
	//$(this).closest('.block-topcontent__price').addClass('active')
});

$('.content-top__item').click(function(event) {
	$('.content-top__item').removeClass('active');
	$('.content-top__block').removeClass('active');
	$(this).addClass('active');
	var Link_num=$(this).attr('data-content-block')
	//console.log(Link_num);
	$('.content-top__block[data-content-block="' + Link_num + '"]').addClass('active')
});

$('.content-bottom__item').click(function(event) {
	$('.content-bottom__item').removeClass('active');
	$('.content-bottom__block').removeClass('active');
	$(this).addClass('active');
	var Link_num=$(this).attr('data-content-block')
	//console.log(Link_num);
	$('.content-bottom__block[data-content-block="' + Link_num + '"]').addClass('active')
});




//=====================data-location===========================================================//
$('.content-top__btn').click(function(event) {
	$('.content-top__btn').removeClass('active');
	$('.map-body').removeClass('active');
	$(this).addClass('active');
	var Link_num=$(this).attr('data-location')
	//console.log(Link_num);
	$('.map-body[data-location="' + Link_num + '"]').addClass('active')
});