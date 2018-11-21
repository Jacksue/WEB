$(function(){
	//导航
    $('#navigation').singlePageNav({
        offset: 100
    })

	/*点击导航后导航隐藏*/
	$(".navbar-collapse li").click(function(){
		$(".navbar-collapse li").removeClass('active');
		$(this).addClass('active');
		$(".navbar-collapse").collapse("hide");
	})
	
	//完整的返回页面顶部的jquery代码如下：
    $(document).ready(function(){
        var $backToTop = $("#return_box");
        /* 隐藏回顶部按钮 */
        $backToTop.hide();
     
        $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) { /* 返回顶部按钮将在用户向下滚动100像素后出现 */
        	$backToTop.fadeIn();
        } else {
       		$backToTop.fadeOut();
        }
        });
     
      $backToTop.on('click', function(e) {
       $("html, body").animate({scrollTop: 0}, 500);
      });
    })

	//底部最新动态
	$('.news_dt').liMarquee({
		direction: 'up'
	});
});

//数字滚动开始
(function($){
$.fn.numberRock=function(options){
    var defaults={
        speed:24,
        count:100
    };
    var opts=$.extend({}, defaults, options);

    var div_by = 100,
    count=opts["count"],
    speed = Math.floor(count / div_by),
    sum=0,
    $display = this,
    run_count = 1,
    int_speed = opts["speed"];
        var int = setInterval(function () {
            if (run_count <= div_by&&speed!=0) {
                $display.text(sum=speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }

})(jQuery);
$(".value_num").numberRock({
	speed:10,
	count:16806
})
//数字滚动结束
//性别选择
$('#sex_out label').click(function(){
	var _value = $(this).children('span').attr('_value');
	$('#sex_out label').children('span').removeClass('active');
	$(this).children('span').addClass('active');
	$('#sex').val(_value);
})

//法律咨询选择
$('#category_out label').click(function(){
	var _val = $(this).children('span').attr('_val');
	$('#category_out label').children('span').removeClass('active');
	$(this).children('span').addClass('active');
	$('#o_type').val(_val);
})
//鼠标悬停事件
$(".yewu .character .inner").hover(function(){
	$(this).children('.inner_text').css({'top':'0'});
	$(this).children('h4').css({'opacity':'0'});
},function(){
	$(this).children('.inner_text').css({'top':'100%'});
	$(this).children('h4').css({'opacity':'1'});
});

//判断ie浏览器版本
var browser=navigator.appName 
var b_version=navigator.appVersion 
var version=b_version.split(";"); 
var trim_Version=version[1].replace(/[ ]/g,""); 
if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") { 
	alert("浏览器版本过低，建议升级版本，谢谢！");
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") { 
	alert("浏览器版本过低，建议升级版本，谢谢！");
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") { 
//	alert("浏览器版本过低，建议升级版本，谢谢！"); 
	$('.container').css({'width':'1200px','margin':'auto'});
	$('.col-md-3').css({'width':'25%'});
	$('.col-md-4').css({'width':'33.33%'});
	$('.navbar-header').css({'float':'left'});
	$('.navbar-header img').css({'margin':'10px 0'})
	$('.collapse').css({'float':'right','display':'block'});
	$('.navbar-nav>li').css({'float':'left'});
	$('#navigation a').css({'padding':'35px 25px','display':'line-block','color':'#333333'});
	$('#navigation .active a').css({'color':'#009fff'});
	$('.banner').css({'margin-top':'0'});
	$('form .place select').css({'background':'none'});
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") {
//	alert("浏览器版本过低，建议升级版本，谢谢！"); 
}

//电话号码base64加密
function tests(mobile){
	var b = new Base64();
	var mobile = b.encode(mobile);
	return mobile;
}

//界面尺寸修正	
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 750) + "px";
}
