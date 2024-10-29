$(function(){
       
    var intv2 = setInterval(function() { nextAni2(); }, 2800);
    
    $(".new_list").mouseenter(function(){
	clearInterval(intv2);
        });
    $(".new_list").mouseleave(function(){
	intv2 = setInterval(function() { nextAni2(); }, 2800);
        });
    
    function nextAni2() {
        $(".new_list").not(":animated").animate({"margin-left":"-320px"}, 800, function(){
            $(".new_list li").eq(0).appendTo($(".new_list"));
            $(".new_list").css("margin-left", "0px");
        });
    }
       
   });