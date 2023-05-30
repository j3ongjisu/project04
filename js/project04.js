$(function () {
$('.main_slide').slick({
    arrows: false,
    fade: true,
      // vertical:true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$(window).on('scroll', function () {
    // 변수에 스크롤한 양을 담는다.
    let sct = $(window).scrollTop();
    console.log(sct)
    if (sct > 0) {
        $('.header').addClass('on')
    } else {
        $('.header').removeClass('on')
    }

});

$('#bgndVideo').YTPlayer({
    videoURL: 'https://youtu.be/R1mhOV0LoBE',
    //재생하고 싶은 곳
    containment: '#main_visual',
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,

});



});