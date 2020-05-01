
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();


$(function () {
	var menuActive = false,
		touched = false,
		$nav = $('.nav');

	function removeActive(callback) {
		$nav.find('.MenuActive').removeClass('MenuActive');
		callback();
	}

	function newActive($this, menu) {
		removeActive(function () {
			$this.next().addClass('MenuActive').queue(function () {
				if (menu) {
					menuActive = true;
					touched = false;
				} else {
					touched = true;
				}
			}).dequeue();
		});
	}

	$nav.on({
		touchstart: function (e) {
			e.stopPropagation();
			newActive($(this), touched);
		},
		mouseenter: function () {
			newActive($(this), true);
		},
		click: function (e) {
			e.preventDefault();

			if (menuActive) {
				$(this).trigger('trueClick', e.target);
			}
		},
		trueClick: function (e, $target) {
			$(this).parents('.nav').trigger('mouseleave');
			window.location.href = $target;
		}
	}, 'li .has_children').on('mouseleave', function () {
		removeActive(function () {
			menuActive = false;
			touched = false;
		});
	});

	$('html').on('touchstart', function (e) {
		if (menuActive) {
			$nav.trigger('mouseleave');
		}
	});
});


//=====================HEADER_TOP===========================================================//
$('.top-header__arrow').click(function (event) {
	$(this).toggleClass('active');
	$('.top-header').toggleClass('active');
});
//=====================HEADER_MIDDLE-BURGER===========================================================//
$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.middle-header__menu').toggleClass('active');
	$('.icon-menu__bg').toggleClass('active');
	$('.icon-menu__bg').toggleClass('disactive');
});

/*
$('.burger-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.header__row').toggleClass('active');
	$('body').toggleClass('lock');
});
*/

$('.icon-menu').click(function (event) {
	//function turnIcon(degrees) {
	var degrees = -3645;

	var angle = $(this).find('.icon-menu__primary:nth-child(1)').data("angle");
	if (!angle)
		angle = 0;
	angle = degrees;

	var bool = $(this).hasClass('active');
	console.log(bool);
	if (bool) {
		$(this).find('div:nth-child(1)')
			.data("angle", angle)
			.css({ transform: "translate(-1000px,200px) rotate(" + angle + "deg)", transition: "1s ease" });
		$(this).find('div:nth-child(3)')
			.data("angle", angle)
			.css({ transform: "translate(-1000px,400px) rotate(" + angle + "deg)", transition: "1s ease" });
		$(this).find('div:nth-child(2)')
			.data("angle", angle)
			.css({ transform: "translate(-1000px,-400px) rotate(" + angle + "deg)", transition: "1s ease" });
		$(this).find('div:nth-child(4)')
			.css({ transform: "translate(0,-50%) rotate(45deg)", transition: "1s ease" });
		$(this).find('div:nth-child(5)')
			.css({ transform: "translate(0,-50%) rotate(-45deg)", transition: "1s ease" });
	} else {
		angle = +angle - degrees;
		$(this).find('div:nth-child(1)')
			.data("angle", angle)
			.css({ transform: "translate(0,-50%) rotate(" + angle + "deg)", transition: "1s ease" });
		$(this).find('div:nth-child(3)')
			.data("angle", angle)
			.css({ transform: "translate(0,-50%) rotate(" + angle + "deg)", transition: "1s ease" });
		$(this).find('div:nth-child(2)')
			.data("angle", angle)
			.css({ transform: "translate(0,-50%) rotate(" + angle + "deg)", transition: "1s ease" });
		$(this).find('div:nth-child(4)')
			.css({ transform: "translate(0,-1000px) rotate(45deg)", transition: "1s ease" });
		$(this).find('div:nth-child(5)')
			.css({ transform: "translate(0,10000px) rotate(-45deg)", transition: "1s ease" });
	}
});

//=====================HEADER_MIDDLE-SEARCH===========================================================//
$('.icon-search__icon').click(function (event) {
	$(this).addClass('disactive');
	$('.icon-search__search').addClass('active');
});

jQuery(function ($) {
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".icon-search__search"); // тут указываем класс 
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0 // и не по его дочерним элементам
			&& $('.icon-search__search').hasClass('active')) {
			$('.icon-search__search').removeClass('active');
			$('.icon-search__icon').removeClass('disactive');
			//div.hide(); // скрываем его
		}
	});
});















let ClearForm = () => {
	$(document).on('click', '.icon-clear', function () {
		$(this).parent().find('input').val('');
	});
};

ClearForm();


/*function turnRight() {
  turnEllipse(30);
}

function turnLeft() {
  turnEllipse(-30);
}*/
$('.icon-clear').click(function (event) {
	//function turnIcon(degrees) {
	var degrees = 180;
	var angle = $(this).find('img').data("angle");
	if (!angle)
		angle = 0;
	angle = +angle + degrees;
	$(this).find('img')
		.data("angle", angle)
		.css({ transform: "rotate(" + angle + "deg)", transition: "0.5s ease" });
});

/*
$(document).ready(function() {
   var mh = 0;
   $(".content__block").each(function () {
       var h_block = $(this).height();
       console.log(h_block);
       if(h_block > mh) {
          mh = h_block;
       };
   });
   //$(".content__block").height(mh);
   $('.content__block').css('max-height', height);
});
*/


if ($(window).width() < 425) {
	//Скрипт отработатет после загрузки картинок
	$('.content__block img').load(function () {
		var height = 0;
		$('.content__block').each(function () {
			var h = $(this).height();
			if (h > height) {
				height = h;
			}
		});
		//$('.content__block').height(height);
		//Или так
		$('.content__block').css('min-height', height);
	});
};



$('.block-commerce__show').click(function (event) {
	$('.commerce-sidebar__block.block-commerce').toggleClass('disabled');
});


