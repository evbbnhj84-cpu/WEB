$(function() {
    /* 메뉴 슬라이드 */
    $(".main-menu, .sub").on("mouseover", function() {
        $(".sub").stop().slideDown()
    })
    $(".main-menu, .sub").on("mouseout", function() {
        $(".sub").stop().slideUp()
    })

    /* 이미지 슬라이드 */
    // 밀리초 (ms) = 1/1000초 = 0.001초 --> 1000ms = 1초
    const speed = 500; // 이미지가 전환되는 시간 (0.5초)
    const time = 2000; // 이미지가 보여지는 시간 (2초)
    const $slide = $(".slide");
    const $container = $(".slide-container");
    const size = $slide.width();  // 가로
    const count = $slide.length;  // 개수
    $container.width(size * count) // 1200*3 = 3600
    // 타이머 함수
    setInterval(() => {
        // 가로 슬라이드 동작
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left', '0');
            $container.append($(".slide").first());
        })
    }, time);

    /* 레이어 팝업 */
    $(".btn-modal").on("click", function() {
        $("#modal").show()
    });
    $(".close").on("click", function() {
        $("#modal").hide()
    });
})