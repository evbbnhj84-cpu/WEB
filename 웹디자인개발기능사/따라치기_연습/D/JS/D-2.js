
$(function() {
    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        $(this).find(".sub-menu").stop().slideUp()
    })



    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width();
    const count = $slide.length;
    $container.width(size * count)

    setInterval(function() {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left','0')
            $container.append($(".slide").first());
        } );
    }, time);




    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });
    
})