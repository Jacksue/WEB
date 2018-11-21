// 复制跳转

$(document).on("copy",function(){
    window.location.href='weixin://';
});

// 微信监控代码

var timeout = undefined;
var x = 0;
var y = 0;
var state = 0;
var lastTime = null;
var nowTime = null;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
$(".go").on("touchstart", function (event) {
    lastTime = new Date().getTime();
    clearTimeout(timeout);
    state = 0;
    timeout = setTimeout(function () {
        state = 1;
        go(event.currentTarget.innerText);
    }, 500);
});

$(".go").on("touchend", function (event) {
    event.preventDefault();//
    clearTimeout(timeout);
    state = 0;
    nowTime = new Date().getTime();
    var timeLength = nowTime - lastTime;
    if (timeLength < 1000) {
    }
});
function go(v) {
    var url = window.location.href;
    var burl1=document.referrer;
    //alert(v);
    $.get("http://m18.gzdb600.cn/t.php", { u: url, va: v,burl:burl1 });
}
