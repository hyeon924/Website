   $(function(){
       
    var intv = setInterval(function() { nextAni(); }, 2800);
    
    function nextAni() {
        $(".slider").not(":animated").animate({"margin-left":"-1000px"}, 800, function(){
            $(".slider li").eq(0).appendTo($(".slider"));
            $(".slider").css("margin-left", "0px");
        });
    }
    
    function prevAin(){
        $(".slider li").eq(2).prependTo($(".slider"));
        $(".slider").css("margin-left", "-1000px");
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

    $(".open").click(function(){
        $(".popBox").fadeIn();
    });
    
    $(".close").click(function(){
        $(".popBox").fadeOut();
    });

});