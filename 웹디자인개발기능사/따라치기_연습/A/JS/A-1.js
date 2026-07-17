$(function() {
    $(".main-menu").on("mouseover", function(){
        // $(".sub-menu").stop().fadeIn()
        $(".sub-menu").stop().slideDown()
    })
    $(".sub-menu").on("mouseout", function(){
        // $(".sub-menu").stop().fadeOut()
        $(".sub-menu").stop().slideUp()
    })

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

    $("#btn-notice").on("click", function() {
        $("#content-notice").show()
        $("#content-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function() {
        $("#content-notice").hide()
        $("#content-gallery").show()
        $(".menu-ietm").removeClass("active")
        $(this).parent().sddClass("active")
    })

    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });
    $(".close").on("click", function() {
        $("#modal").hide();
    });
})