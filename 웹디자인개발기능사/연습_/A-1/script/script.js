$(function() {
    /* 메뉴 슬라이드 */
    $(".main-menu").on("mouseover", function() {
        $(".sub-menu").stop().slideDown()
    })

    $(".main-menu").on("mouseout", function() {
        $(".sub-menu").stop().slideUp()
    })
})