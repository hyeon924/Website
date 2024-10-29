$(function(){
       
    var intv2 //= setInterval(function() { nextAni2(); }, 2800);
    
    function nextAni2() {
        $(".model_list").not(":animated").animate({"margin-left":"-156px"}, 800, function(){
            $(".model_list li").eq(0).appendTo($(".model_list"));
            $(".model_list").css("margin-left", "0px");
        });
    }
    
    function prevAin2(){
        $(".model_list li").eq(9).prependTo($(".model_list"));
        $(".model_list").css("margin-left", "-156px");
        $(".model_list").not(":animated").animate({"margin-left":"0px"}, 800);
    }

    $(".nextBtn").click(function(){
        clearInterval(intv2);
        nextAni2();
        //intv2 = setInterval(function() { nextAni2(); }, 2800);
    });
    
     $(".prevBtn").click(function(){
        clearInterval(intv2);
        prevAin2();
        //intv2 = setInterval(function() { nextAni2(); }, 2800);
    });
       
       
   });