
$(function() {
    // 메뉴 슬라이드
    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        $(this).find(".sub-menu").stop().slideUp()
    })

    // 이미지 슬라이드 - 세로 (무한 반복)
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height();
    const count = $slide.length;
    $container.height(size * count)

    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first());
        });
    }, time);

    // 탭 기능
    $("#btn-notice").on("click", function() {
        $("container-notice").show()
        $("container-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function() {
        $("container-notice").hide()
        $("container-gallery").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })

    // 레이어 팝업
    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });
    
})