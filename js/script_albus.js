// JavaScript Document


// 좌측 메뉴 버튼 클릭

let MENU = true;

$('.btn').click(function(){
	if(MENU == true){
		$('#header .btn a span:nth-of-type(1)').css({'top':'10px','transform':'rotate(135deg)'});
		$('#header .btn a span:nth-of-type(2)').css('transform','scale(0)');
		$('#header .btn a span:nth-of-type(3)').css({'top':'10px','transform':'rotate(-135deg)'});
		$('.gnb').css('right', 0);
		MENU = false; 
	} else {
		$('#header .btn a span:nth-of-type(1)').css({'top':0,'transform':'none'});
		$('#header .btn a span:nth-of-type(2)').css({'top':'10px','transform':'none'});
		$('#header .btn a span:nth-of-type(3)').css({'top':'20px','transform':'none'});
		$('.gnb').css('right', '-100%');
		MENU = true;
	}
});


// 3단 슬라이드박스
// PC 마우스 오버 이벤트
let news_switch = true; // 모바일 크기일 때 마우스 오버 이벤트 작동 안 되게 하는 스위치 변수

$('#contents #news .news_wrap .slide_box .slide').mouseover(function(){
	if(news_switch == true){
		$(this).siblings('.slide').css('width', '20%');
		$(this).css('width', '60%');
		$(this).siblings('.slide').find('.inner').css('opacity', 1);
		$(this).siblings('.slide').find('.inner a').css('opacity', 1);
		$(this).find('.inner').css('opacity', 0);
		$(this).find('.inner a').css('opacity', 0);
	}
});

// 모바일 이벤트
let W_width = $(window).width();
if(W_width <= 760){
	news_switch = false;
} else {
	news_switch = true;
}

$(window).resize(function(){
	W_width = $(window).width();
	if(W_width <= 760){	// 모바일 진입
		news_switch = false;
		$('#contents #news .news_wrap .slide_box').css('opacity', 0.5);
		$('#contents #news .news_wrap .slide_box .slide').css('width', '100%');
		$('#contents #news .news_wrap .slide_box .slide .inner').css('opacity', 0);
		$('#contents #news .news_wrap .slide_box .slide .inner a').css('opacity', 1);
	} else {	// PC 진입
		news_switch = true;
		$('#contents #news .news_wrap .slide_box').css('opacity', 1);
		$('#contents #news .news_wrap .slide_box .slide').css('width', '20%');
		$('#contents #news .news_wrap .slide_box .center').css('width', '60%');
		$('#contents #news .news_wrap .slide_box .slide .inner').css('opacity', 1);
		$('#contents #news .news_wrap .slide_box .slide .inner a').css('opacity', 1);
		$('#contents #news .news_wrap .slide_box .center .inner').css('opacity', 0);
		$('#contents #news .news_wrap .slide_box .center .inner a').css('opacity', 0);
	}
});


