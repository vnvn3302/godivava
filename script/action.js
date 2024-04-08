let winW = $(window).width()

$(window).resize(function(){
    winW = $(window).width()
})


$('.gnb').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.gnb').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
})
$('.nav_box').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.nav_box').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
});


    $('.hamburger').click(function(){
        if(winW < 1025){
            $('body').toggleClass('on')
            $('.hamburger').toggleClass('on')
            $('.nav_box').fadeToggle(200);
        }
       
    })

 
    $('header .menu_box .menu > li > a').click(function(){
        $('.submenu').slideUp()
        $(this).parent().find('.submenu').stop().slideToggle();

        return false
    })





// 수동으로 수치적기, 정확하지 않을 수 있어
// $('.main_position_bar a').eq(0).click(function(){
//     $('html').animate({scrollTop:0});
// })
// $('.main_position_bar a').eq(1).click(function(){
//     $('html').animate({scrollTop:1000});
// })
// $('.main_position_bar a').eq(2).click(function(){
//     $('html').animate({scrollTop:1900});
// })
// $('.main_position_bar a').eq(3).click(function(){
//     $('html').animate({scrollTop:3000});
// })

// 반수동방법
// $('.main_position_bar a').eq(0).click(function(){
//     let slideTop = $('#slide_box').offset().top;
//     $('html').animate({scrollTop:slideTop});
// })
// $('.main_position_bar a').eq(1).click(function(){
//     let sec1Top = $('#section1').offset().top;
//     $('html').animate({scrollTop:sec1Top});
// })
// $('.main_position_bar a').eq(2).click(function(){
//     let sec2Top = $('#section2').offset().top;
//     $('html').animate({scrollTop:sec2Top});
// })
// $('.main_position_bar a').eq(3).click(function(){
//     let sec3Top = $('#section3').offset().top;
//     $('html').animate({scrollTop:sec3Top});
// })

// 자동, 배열로 찾기(움직X 클릭하면 이동)
// $('.main_position_bar a').click(function(){
//     // let posiTop = $(this).index();
//     // let secTop = $('#section_box > section').eq(posiTop).offset().top;
//     // $('html').animate({scrollTop:secTop});

//     let aHref = $(this).attr('href');
//     let posiTop = $(aHref).offset().top
//     $('html').animate({scrollTop:posiTop});
//     return false
// });

// 메인변수
let slideTop, sec1Top, sec2Top, sec3Top

// 서브변수
let tabTop, yearTop


// 메인페이지 판단코드
if($('#section_box').length > 0){
    slideTop = $('#slide_box').offset().top;
    sec1Top = $('#section1').offset().top;
    sec2Top = $('#section2').offset().top;
    sec3Top = $('#section3').offset().top;

} 

if($('.tabmenu').length > 0){
    tabTop = $('.tabmenu').offset().top
}
if($('.year_box').length > 0){
    yearTop = $('.year_box').offset().top
}


$(window).scroll(function(){
    let scrT = $(window).scrollTop(); 

    // if(scrT >= slideTop - 200){
    //     $('.main_position_bar a').eq(0).addClass('active').siblings().removeClass()}
    // if(scrT >= sec1Top - 200){
    //     $('.main_position_bar a').eq(1).addClass('active').siblings().removeClass()}
    // if(scrT >= sec2Top - 200){
    //     $('.main_position_bar a').eq(2).addClass('active').siblings().removeClass()}
    // if(scrT >= sec3Top - 50){
    //     $('.main_position_bar a').eq(3).addClass('active').siblings().removeClass()}


    // 부드럽게 이동
    // if(scrT >= slideTop - 100){
    //     $('.main_position_bar span').css({top:0})}
    // if(scrT >= sec1Top - 100){
    //     $('.main_position_bar span').css({top:50})}
    // if(scrT >= sec2Top - 100){
    //     $('.main_position_bar span').css({top:100})
    //     $('#section2 img.color').fadeIn(200)
    // } 
    // else {$('#section2 img.color').fadeOut(200)}
    
    // if(scrT >= sec3Top - 100){
    //     $('.main_position_bar span').css({top:150})}

    if(scrT >= sec2Top - 100){
        $('#section2 img.color').fadeIn(200)
    } 

    // 스크롤량 따라가는 사이드바
    let winH = $(window).height();  /* 화면높이 */
    let docH = $(document).height();  /* 전체높이 */

    // 방법1
    let barH = $('.main_position_bar').height();
    let bi = (barH / (docH - winH))
    let dap = scrT * bi
    $('.main_position_bar span').css({height:dap})

    // 방법2
    // let dap = scrT / (docH - winH) * 100
    //  $('.main_position_bar span').css({height:dap+'%'})

    // 가로
    let garoW = $('.garobar').width();
    let garobi = (garoW / (docH - winH))
    let dab = scrT * garobi
    $('.garobar span').css({width:dab})


    // 상단으로 가기
    if(scrT >= winH/1.5){
        $('.go_top').css({opacity:1, visibility:'visible'})
    } else {
        $('.go_top').css({opacity:0, visibility:'hidden'})
    }

    $('.st0').css({strokeDashoffset:660-scrT})

    let lastTextTop = $('.history .content .year_box > ul:last-child li.his:last-child').outerHeight(true)

    if(scrT >= tabTop){
        $('.history .now').css({top:scrT-yearTop+74})
        if(scrT >= docH-winH){
            $('.history .now').css({top:'auto', bottom:0+lastTextTop-25})  
        }

    } else {
        $('.history .now').css({top:'', bottom:'auto'})
    }
})

// $('.go_top').click(function(){
//     $('html').animate({scrollTop:0})
// })

let total = 320
$('.real_circle').each(function(){
    let circleValue = $(this).attr('data-circleValue');
    let value = (circleValue / 100) * total;
    $(this).find('.real-st0').css({strokeDashoffset:total - value});
    $(this).siblings('.circleNumber').text(circleValue+'%');
})


$('.real_circle').each(function(){
    let circleValue = $(this).attr('data-circleValue');
    let degVal = (circleValue / 100) * 180;    
    $(this).siblings('.dot_box').css({transform: 'rotate('+ degVal + 'deg)'})    
})

$('.tabmenu li').click(function(){
    $(this).addClass('active').siblings().removeClass()

    let dataTab = $(this).attr('data-tab');
    $('.year_box ul').hide()
    $('.year_box .'+dataTab).show()

    if(dataTab == 'all'){
        $('.year_box ul').show()
    }

    return false
})