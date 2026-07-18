$(function() {
    /* 메뉴 슬라이드 */
    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })

    /* 이미지 슬라이드 */
    // 밀리초 (ms) = 1/1000초 = 0.001초 --> 1000ms = 1초
    let index = 0;   // 0 1 2  0 1 2  0 1 2
    const speed = 500; // 이미지가 전환되는 시간 (0.5초)
    const time = 2000; // 이미지가 보여지는 시간 (2초)
    const $slide = $(".slide");
    const size = $slide.height();  // 높이
    const count = $slide.length;  // 개수
    $slide.not(":first").hide()
    // 타이머 함수
    setInterval(() => {
        // 페이드 슬라이드 동작
        index = (index + 1) % count // 1 2 0 (반복)
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);

    /* 탭(공지사항+갤러리) */
    $("#btn-notice").on("click", function() {
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
        $("#content-notice").show()
        $("#content-gallery").hide()
    })

    $(".btn-gallery").on("click", function() {
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
        $("#content-notice").hide()
        $("#content-gallery").show()
    })

    /* 레이어 팝업 */
    $(".btn-modal").on("click", function() {
        $("#modal").show()
    })
    $(".close").on("click", function() {
        $("#modal").hide()
    })
})