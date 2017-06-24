
 // 小蓝条出现
    $(".top li").hover(function(){
        var wid=$(this).width();
        $(this).find(".blue").width(wid).stop().show().animate({"top":46},500)
    },function(){
        $(".blue").stop().hide().animate({"top":51},500)
    })
    //轮播图
    var num=0;
    $(".button ul li").click(function(){
        num =$(this).index();
        var ml1=num*-1288+"px";
        $(".box").stop().animate({"margin-left":ml1},600);
        $(this).addClass("active").siblings().removeClass("active")
    })
    var t;
    var time1 = function(){
        num++;
        if(num>2){
            num=0;}
        var ml2=num*-1288
        $(".box").stop().animate({"margin-left":ml2},600);
        $(".button li").eq(num).addClass("active").siblings().removeClass("active")
        }

        t = setInterval(time1,2000)
        $(".box,.button").hover(function(){
            clearInterval(t)
        },function(){
            t =setInterval(time1,2000)
        })
    $(".next").click(function(event){
        event.preventDefault();
        time1()
    })
    var time2 = function(){
            num--;
        if(num<0){
            num=2;}
            var ml3=num*-1288
        $(".box").stop().animate({"margin-left":ml3},500);
        $(".button li").eq(num).addClass("active").siblings().removeClass("active")
        }

    $(".pre").click(function(event){
        event.preventDefault();
        time2();
    })
    //滚动条事件
    // 判断鼠标向上滚
    // 判断back出现
    var i = 0;
    var scrolltop = new Array();
    scrolltop[0] = 0;
    $(document).scroll(function(){
        i++;
        scrolltop[i]=$(window).scrollTop()
        if(scrolltop[i]>300){
            $(".back").fadeIn("slow")
        }else{
            $(".back").fadeOut("slow")
        }
        if (scrolltop[i] > scrolltop[i-1]) {
            $(".top").removeClass("fix")
        }else{
            $(".top").addClass("fix")
            $(".banner").css("margin-top","51px")
        }
    })
    //返回顶部
    $(".back").click(function(event){
        event.preventDefault();
        $("body").stop().animate({"scrollTop":0},500)
    })
    //hover时出现图片的小框
    $(".little").hover(function(){
        $(this).find(".time").stop().fadeIn("slow")
    },function(){
        $(this).find(".time").stop().fadeOut("slow")
    })
    //底部的搜索部分
    $("#show").click(function(){
        $(this).css("border","2px solid #000")
        $("form >div").toggle("slow")
        $("#search").focus()
        var st=$(".beg").offset().top - $("form ul").offset().top-80
        $("form ul").scrollTop(st)
        return false;//阻止冒泡到大盒
    })
    $(".wrap").click(function(){
        $("form >div").hide("slow")
    }) //点击大盒时div消失

    $("form li").click(function(){
        var str =$(this).text();
        $("#show").val(str);
        $("form >div").hide("slow")
    })
    $("form>div").click(function(){
        return false;
    })
    $("#search").on("input propertychange",function(){
        var str1 = $(this).val()
        console.log(str1)
        $("form ul li").each(function(){
            $("strong").show()
            var text = $(this).text()
            console.log(text)
            if(text.indexOf(str1)==-1){
                $(this).hide()
            }else{
                $(this).show()
            }
        })
    })
    //下拉菜单
    //第一个
    $(".pro").hover(function() {
        setTimeout(function(){
        $(".list").stop().slideDown("slow")},300)

        }, function() {
            $(".list").stop().slideUp("100");
        })
    $(".list").hover(function() {
        $(this).stop().slideDown("slow");
    }, function() {
        $(this).stop().slideUp("slow");
    });
    $(".list>p").click(function(){
        $(".list").stop().slideUp("slow");
    })
    $(".all>li").hover(function(){
          $(".list_right_all>div").eq($(this).index()).stop().show()
          .siblings().stop().hide()
        })
    //第二个
    $(".ser").hover(function() {
    setTimeout(function(){
         $(".servici").stop().slideDown("slow")},300)
            }, function() {
                $(".servici").stop().slideUp("slow");
            });
            $(".servici").hover(function() {
                $(this).stop().slideDown("slow");
            }, function() {
                $(this).stop().slideUp("slow");
            });
            $(".servici>p").click(function(){
                $(".servici").stop().slideUp("slow");
            })
        $(".ser_left_ul>li").hover(function(){
            $(".servici .list_right_all>div").eq($(this).index()).stop().show()
              .siblings().stop().hide()
            })
    //第三个
    $(".des").hover(function() {
    setTimeout(function(){
         $(".desarro").stop().slideDown("slow")},300)
        }, function() {
            $(".desarro").stop().slideUp("slow");
        });
        $(".desarro").hover(function() {
            $(this).stop().slideDown("slow");
        }, function() {
            $(this).stop().slideUp("slow");
        });
