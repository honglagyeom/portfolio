
var scr_t = $(window).scrollTop()
top_btn()


//서치(돋보기)아이콘 클릭하면 서치팝업이 보이도록

$("header .icon2").click(function(){
    $(".search-popup").stop().fadeIn();
})
$(".search-popup .black,.close-btn").click(function(){
    $(".search-popup").stop().fadeOut();
})

//추천검색 클릭하면 input에 클릭한 값 입력되게

$(".search-popup .ad-item").click(function(){
    txt= $(this).text();
    $(".search-popup input").val( $(".search-popup input").val() + " " + txt)
});

//모바일 햄버튼 header fa-bars클릭하면 m-menu가 toggle

$("header .ham-btn").click(function(){
    $(".m-menu").stop().slideToggle(300)
})
$(".m-menu-li").click(function(){
    $(".m-menu").stop().slideUp(300)
})


//top-btn버튼

$(".top-btn").click(function(){
    $("html").stop().animate({scrollTop:0},1000)
})

$(window).scroll(function(){
    scr_top= $(window).scrollTop();
    top_btn()
})

function top_btn(){
    scr_top= $(window).scrollTop();
    if(scr_top>100){
        $(".top-btn").stop().fadeIn();
    } else{
        $(".top-btn").stop().hide();
    }
}



//.header-cart.search-popup
//장바구니 아이콘에 마우스 올렸을 때 header-cart가 보일수있게
//hover가 아닌 제이쿼리 사용할 때는 이렇게 쓴다
// $("header .icon1").mouseenter(function(){
//     $(".header-cart").stop().slideDown();
// })
// $("header .icon1").mouseleave(function(){
//     $(".header-cart").stop().slideUp();
// })











