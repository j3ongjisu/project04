$(function () {




    $('.main_slide').slick({
        arrows: false,
        fade: true,
        // vertical:true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });




    // 슬라이드 도트
    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount);

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
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



    // 슬라이든 버튼 동작되게 함.
    $('.menu li').on('click', function () {
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx)
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



    $('.bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/VHwAKIRu_Ng',
        // 재생하고 싶은 곳
        containment: '.bg_video',
        mute: true,
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });


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