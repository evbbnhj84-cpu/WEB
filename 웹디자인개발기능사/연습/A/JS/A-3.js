
$(function() {
  /* 메뉴 슬라이드 */
  /* 가로 기본 */
  $(".main-menu li").on("mouseover", function(){
    // $(this).find(".sub-menu").stop().fadeIn()
    $(this).find(".sub-menu").stop().slideDown()
  })
  $(".main-menu li").on("mouseout", function(){
    // $(this).find(".sub-menu").stop().fadeOut()
    $(this).find(".sub-menu").stop().slideUp()
  })

/* 이미지 슬라이드 */
/* 페이드 슬라이드 */
let index = 0;
const speed = 500;
const time = 3000;
const $slide = $(".slide")
const count = $(".slide").length;
$slide.not(":first").hide()
setInterval(function() {
  index = (index + 1) % count;
  $slide.fadeOut(speed)
  $slide.eq(index).fadeIn(speed)
}, time);
/* 탭(공지_갤러리) */
$("#btn-notice").on("click", function() {
  $("#content-notice").show()
  $("#content-gallery").hide()
  $(".menu-item").removeClass("active")
  $(this).parent().addClass("active")
})
$("#btn-gallery").on("click", function() {
  $("#content-notice").hide()
  $("#content-gallery").show()
  $(".menu-item").removeClass("active")
  $(this).parent().addClass("active")
})
/* 레이어 팝업 */
$(".btn-modal").on("click", function() {
  $("#modal").show();
});

$(".close").on("clock", function() {
  $("#modal").hide();
});

})