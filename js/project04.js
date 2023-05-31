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

    //메인 슬라이드 스크롤 버튼
    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });

    //to_top 스크롤 위로 올리기
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });


    //$('.bgndVideo').YTPlayer({
    //  videoURL: '',
    //재생하고 싶은 곳
    //  containment: '.bg_video',
    //  autoPlay: true,
    //  showControls: false,
    //  playOnlyIfVisible: true,
    // });


    // $(window).on('load scroll', function () {
    //     let sct = $(window).scrollTop();
    //     console.log(sct);
    //     $('.sec').each(function () {
    //         if (sct > $(this).offset().top - 200) {
    //             $(this).addClass('on');
    //         } else {
    //             $(this).removeClass('on');
    //         }
    //     });
    // });


});