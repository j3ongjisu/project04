$(function () {


    // // 메뉴 크기 조정
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })


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


    //to_top 버튼 첫 화면에서 숨겼다가 스크롤 내리면 나타나게 하기

    $(document).ready(function () {

        var navHeight = $(".to_top").height();
        //navHeight 의 높이를 구하기

        $(".to_top").hide();
        //스크롤시 나타날 객체 미리 숨기기

        $(window).scroll(function () {  // 윈도우 스크롤 기능 작동
            var rollIt = $(this).scrollTop() >= navHeight;
            // 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

            /*
            scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
            스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
            */

            if (rollIt) {
                //윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
                $(".to_top").show().css({ "position": "fixed" });
            }
            else {
                $(".to_top").hide();
            }
        });

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