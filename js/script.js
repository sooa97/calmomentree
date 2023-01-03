//fullpage
$(function () {
    $('#fullpage').fullpage({
        fingersonly: true,
        scrollingSpeed: 900,
        scrollOverflow: true
    });
});

//이미지슬라이드
$(function() {
    $("#section5 .imgSlide").slick({
        infinite: true,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed: 1300
    });
});  

//이미지슬라이드 _ 넓이 높이 스크립트
// $(function() {
//     var winW = $(window).width(), 
//         winH = $(window).height(),
// 		list = $('.visual .list');
// 	list.css({width: winW+'px', height: winH+'px'});
// });

//gnb
$(function(){
    $(".menuOpen").on('click',function(){//.on->이벤트를 불러오는 method
        $(".gnbOpen").addClass("on");
    });
    $(".gnbOpen .close").on('click',function(){
        $(".gnbOpen").removeClass("on");
    });
    $(".gnb span").on('click',function(){
        $(".gnbOpen").addClass("on");
    });
    $(".tnb span").on('click',function(){
        $(".search").addClass("on");
    });
    $(".search .close").on('click',function(){
        $(".search").removeClass("on");
    });
});