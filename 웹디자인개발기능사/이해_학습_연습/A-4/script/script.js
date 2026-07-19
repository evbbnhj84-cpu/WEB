$(function() {
    
    /* ------------------- ↔ 가로 100% 멀티   ------------------- */
    $(".main, .sub").on("mouseenter", function(){
        // $(".sub").stop().fadeIn()
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        // $(".sub").stop().fadeOut()
        $(".sub").stop().slideUp()
    })
   
    /* ------------------- 페이드 슬라이드      ------------------- */
    let index = 0;
    const speed = 500;
    const time = 2000;
    const $slide = $(".slide")
    const count = $(".slide").length;
    $slide.not(":first").hide()
    setInterval(function() {
        index = (index + 1) % count;
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);
    

    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });

})