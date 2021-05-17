var num=0;

$(document).ready(function(){
	slide()
	skrollr.init();
	AOS.init();
})

var scr_t = $(window).scrollTop();
$(".scr").text(Math.round(scr_t))

$(window).scroll(function(){
	scr_t = $(window).scrollTop();
	$(".scr").text(Math.round(scr_t))
})

//추가된 부분
var page_num=0;

$("html").stop().animate({scrollTop:1000*page_num},700,"easeInOutExpo")

$("*").on("mousewheel",function(e){
	$(".alert,.black-background").stop().fadeOut();
	e.preventDefault();
	delta=e.originalEvent.wheelDelta
	//console.log(delta)
	moving=$("html").is(":animated");
	if(delta<0 && !moving && page_num<8){
		page_num++;
		//console.log("page_num: "+page_num)
		$("html").stop().animate({scrollTop:1000*page_num},700,"easeInOutExpo")
	}else if(delta>0&&!moving&& page_num>0){
		page_num--;
		$("html").stop().animate({scrollTop:1000*page_num},700,"easeInOutExpo")
	}
})
//디자인 팝업 제이쿼리 start

$(".design-btn").click(function(){
	$(".design-popup").stop().delay(100).fadeIn()
})

$(".content-box").mouseenter(function(){
	$(".arrow img").stop().fadeIn()
})
$(".content-box").mouseleave(function(){
	$(".arrow img").stop().fadeOut()
})

$(".design-popup .close-btn").click(function(){
	$(".design-popup").stop().fadeOut()
})

function slide(){
	act = $(".img-box .img").eq(num)
	act_btn = $(".pop-indi .indi").eq(num)
	act.stop().fadeIn(500)
	$(".img-box .img").not(act).stop().hide()
	act_btn.stop().animate({opacity:1})
	$(".pop-indi .indi").not(act_btn).stop().animate({opacity:0})

}

$(".arrow .left").click(function(){
	num--;
	num=num%4
	slide()
})
$(".arrow .right").click(function(){
	num++;
	num=num%4
	slide()
})
$(".pop-indi .fa-angle-left").click(function(){
	num--;
	num=num%4
	slide()
})
$(".pop-indi .fa-angle-right").click(function(){
	num++;
	num=num%4
	slide()
})

//    햄버거버튼 클릭이벤트
$(".ham").click(function(){
	$(".pop-wrap").stop().show();
})
$(".pop-wrap .close-btn").click(function(){
	$(".pop-wrap").stop().hide();
})

//메뉴팝업 디자인팝업연결하기
//$(".de-btn").click(function(){
//	$(".menu-popup").stop().fadeOut(200,function(){
//		$(".design-popup").stop().delay(300).fadeIn(250)
//	});
//})

//알람팝업창
var uAgent=navigator.userAgent.toLocaleLowerCase();
console.log(uAgent)
if(uAgent.indexOf("chrome")!=-1){
	$(".alert .bg").css({background:"linear-gradient(90deg,#2ec4d5, #167da9)"})
	$(".warning,.img-warn,.text-warn").css({display:"none"})
	$(".confirm,.img-conf,.text-conf").css({display:"block"})
} else{
	$(".alert .bg").css({background:"linear-gradient(90deg,#dc2d50, #cc0000)"})
	$(".warning,.img-warn,.text-warn").css({display:"block"})
	$(".confirm,.img-conf,.text-conf").css({display:"none"})
}

$(".alert .close-btn,.black-background").click(function(){
	$(".alert,.black-background").stop().fadeOut();
})

setTimeout(function(){
	$(".alert,.black-background").stop().fadeOut();
},2500)


//쿠키
cookiedata=document.cookie;
if(cookiedata.indexOf("port=done")<0){
  
    document.getElementById("alert").style.display="block";
    document.getElementById("black-background").style.display="block";

} else{
   
    document.getElementById("alert").style.display="none";
    document.getElementById("black-background").style.display="none";

}

function setCookie(name,value,expiredays){
    var todayDate= new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie=name+"="+escape(value)+"; path=/; expaires="+ todayDate.toGMTString()+";"
    console.log(todayDate.toGMTString())
}

function todayCloseWin(){
    setCookie("port","done",1)
    document.getElementById("alert").style.display="none";
    document.getElementById("black-background").style.display="none";

}
