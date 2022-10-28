$(function() {

    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) {
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) {
            let nxt = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: nxt
            })
        }
    });

    //------------------- 윈도우에서 마우스휠 작동했을 때 ---------------------

    $('.tab li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont>div').eq(i).css({ display: 'block' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    })

    //------------------- #video .tab li 클릭했을 때 ---------------------

    $('.gnb li a').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        });
    })

    //--------------------- .gnb li a 클릭했을 때 -----------------------

    $('.benner li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('#popup>div').eq(i).fadeIn();
        $('#popup>div').eq(i).css({ display: 'block' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('#popup>div').on('click', function(e) {
        e.preventDefault();
        $('#popup>div').fadeOut(); //hide, fadeOut ,slideUp
    });

    //------------- .show img 클릭했을 때 .popup img 팝업으로 띄우기 ------------------





















































































































}); // html, css 문서 다 읽고 제일 마지막에 읽으라는 opening 구문

