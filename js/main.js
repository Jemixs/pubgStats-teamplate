$("#mobMenuOpen").click(function(e) {
	e.preventDefault();
	$(".mobi-header").slideToggle(300);
});

$(document).ready(function() {
	$('select').niceSelect();
});

function dragSeasonSel() {
	if ($(window).width() <= '576'){
		$('.mBlockType').append($('.menuFPP:first'));
		$('.menuFPP').css("position","initial");
		$('.menuFPP').css("float","initial");
		$('.menuFPP>li:last').css("margin","3px 0 0 0");
	}else{
		$('.profMenu').append($('.menuFPP'));
		$('.menuFPP').css("position","relative");
		$('.menuFPP').css("float","right");
		$('.menuFPP>li:last').css("margin","0 14px 0 0");
	}
}

$(window).on('load resize',dragSeasonSel);