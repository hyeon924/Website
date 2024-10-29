   $(function(){
       
    var intv = setInterval(function() { nextAni(); }, 2800);
    
    function nextAni() {
        $(".slider").not(":animated").animate({"margin-left":"-1500px"}, 800, function(){
            $(".slider li").eq(0).appendTo($(".slider"));
            $(".slider").css("margin-left", "0px");
        });
    }
    
    function prevAin(){
        $(".slider li").eq(2).prependTo($(".slider"));
        $(".slider").css("margin-left", "-1500px");
        $(".slider").not(":animated").animate({"margin-left":"0px"}, 800);
    }

    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    
     $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAin();
        intv = setInterval(function() { nextAni(); }, 2800);
    });

       
$(window).scroll(function () {
    if ($(window).scrollTop() > 2200) {
        $(".backtotop").addClass("visible");
    } else {
        $(".backtotop").removeClass("visible");
    }
});

$(".backtotop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 1000);
});


});

   $(function(){
       
    var intv2 //= setInterval(function() { nextAni2(); }, 2800);
    
    function nextAni2() {
        $(".pro1").not(":animated").animate({"margin-left":"-345px"}, 800, function(){
            $(".pro1>div").eq(0).appendTo($(".pro1"));
            $(".pro1").css("margin-left", "0px");
        });
    }
    
    function prevAin2(){
        $(".pro1>div").eq(2).prependTo($(".pro1"));
        $(".pro1").css("margin-left", "-345px");
        $(".pro1").not(":animated").animate({"margin-left":"0px"}, 800);
    }

    $(".pro_nextBtn1").click(function(){
        clearInterval(intv2);
        nextAni2();
        //intv2 = setInterval(function() { nextAni2(); }, 2800);
    });
    
     $(".pro_prevBtn1").click(function(){
        clearInterval(intv2);
        prevAin2();
        //intv2 = setInterval(function() { nextAni2(); }, 2800);
    });
       
       $(".pro1").mouseover(function(){
        /*prevAin2().stop();*/
    });
       
   });



$(function(){
       
    var intv3 //= setInterval(function() { nextAni2(); }, 2800);
    
    function nextAni3() {
        $(".pro2").not(":animated").animate({"margin-left":"-340px"}, 800, function(){
            $(".pro2>div").eq(0).appendTo($(".pro2"));
            $(".pro2").css("margin-left", "0px");
        });
    }
    
    function prevAin3(){
        $(".pro2>div").eq(2).prependTo($(".pro2"));
        $(".pro2").css("margin-left", "-340px");
        $(".pro2").not(":animated").animate({"margin-left":"0px"}, 800);
    }

    $(".pro_nextBtn2").click(function(){
        clearInterval(intv3);
        nextAni3();
        //intv3 = setInterval(function() { nextAni3(); }, 2800);
    });
    
     $(".pro_prevBtn2").click(function(){
        clearInterval(intv3);
        prevAin3();
        //intv3 = setInterval(function() { nextAni3(); }, 2800);
    });
   });







