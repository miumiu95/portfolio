$(".sns_tab li a").click(
    function(){
        $(".sns_tab li a").removeClass("on");
        $(this).addClass("on");
        let data = $(this).attr("data");
        $(".sns_gallery").hide();
        $("."+data).css("display","flex");
    }
);

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow : $('.prev'),     // 이전 화살표 모양 설정
    nextArrow : $('.next'),     // 다음 화살표 모양 설정
});

