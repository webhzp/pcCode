   /**
    * 显示回到顶部按钮
    */
    $(window).scroll(function(){
        // 滚动条距离顶部的距离 大于 屏幕分辨率的高时
        var screenH = window.screen.height;//获取屏幕分辨率的高
        if($(window).scrollTop() >= screenH){
            $(".backTop").show();
            $(".consultBtn").show();
        }else{
            $(".backTop").hide();
            $(".consultBtn").hide();
        }
    });

    /**
     * 回到顶部
     */
    $(".backTop").click(function () {
        var speed = 500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });