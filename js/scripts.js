
var bullets=$('.round');
var imgs=$("#slider img");

var next_slide=$("#next");
var prev_slide=$("#prev");


var right_block=$("#right-block");
right_block.delay(200).show(600);
var heading=$(".heading");
heading.delay(800).fadeIn(600);
var bullet_wrapper = $("#bullets");
bullet_wrapper.delay(800).show(600,function(){
    $(this).css("display","grid");
    $(".round").animate({
        marginTop: "3.5px",
        marginBottom:"3.5px",
    });
});

next_slide.on("click",function(){

    next_slide.animate({
        top:"-=3"
    },100);
    next_slide.animate({
        top:"+=3"        
    },100);
    active_img_slide_id = $(".active").attr("data-slide");
    active_img_slide_id = Number(active_img_slide_id);

    var ph0 = $("img[data-slide="+(active_img_slide_id)+"]");
    
    $(ph0).removeClass("active");
    $(ph0).css({
        display:"none"
    });    
    
    var ph1 = $("img[data-slide="+(active_img_slide_id - 1)+"]");
    
    $(ph1).show("drop",{direction: "down"},500).addClass("active");

    var highlighted_circle=$("#"+(active_img_slide_id-1));    
    var prev_circle = $("#"+(active_img_slide_id));

    highlighted_circle.animate({
        width: "12px",
        height:"12px",              
    },150);
    prev_circle.animate({
        width: "6px",
        height:"6px",        
    },150);

    if(isNaN(active_img_slide_id)||active_img_slide_id-1==0){
        active_img_slide_id = 6;        
        ph1 = $("img[data-slide="+(active_img_slide_id - 1)+"]");
    
        $(ph1).show("drop",{direction: "down"},500).addClass("active");
    
        highlighted_circle = $("#"+(active_img_slide_id-1));    
        prev_circle = $("#"+(active_img_slide_id));

        highlighted_circle.animate({
        width: "12px",
        height:"12px",        
        },150);        
    }

});

prev_slide.on('click',function(){
    
    prev_slide.animate({
        bottom:"-=3"
    },100);
    prev_slide.animate({
        bottom:"+=3"        
    },100);

    active_img_slide_id = $(".active").attr("data-slide");
    active_img_slide_id = Number(active_img_slide_id);

    var ph0 = $("img[data-slide="+(active_img_slide_id)+"]");
    
    $(ph0).removeClass("active");
    $(ph0).css({
        display:"none"
    });    
    
    var ph1 = $("img[data-slide="+(active_img_slide_id + 1)+"]");
    
    $(ph1).show("drop",{direction: "up"},500).addClass("active");
    
    var highlighted_circle=$("#"+(active_img_slide_id+1));    
    var prev_circle = $("#"+(active_img_slide_id));
 
    highlighted_circle.animate({
        width: "12px",
        height:"12px",   
    },150);
    prev_circle.animate({
        width: "6px",
        height:"6px",        
    },150);

    if(isNaN(active_img_slide_id)||active_img_slide_id+1==6){
        active_img_slide_id = 0;        

        ph1 = $("img[data-slide="+(active_img_slide_id + 1)+"]");

        $(ph1).show("drop",{direction: "up"},500).addClass("active");

        highlighted_circle = $("#"+(active_img_slide_id+1));    
        prev_circle = $("#"+(active_img_slide_id));

        highlighted_circle.animate({
        width: "12px",
        height:"12px",        
        },150);
    }

});




$("#menuIcon").click(function(){
    $("#mainMenu").css("left","0");
    function showMenu(){
        $("#mainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
        $("#menuIcon").css("left","20%");
        $("#menuIcon").fadeOut(100);
    }
    setTimeout(showMenu,200);

    $(".phone").animate({
        marginLeft: "+=5%"
    });

});
 $(".close").click(function(){      
         $("#mainMenu").css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
     function hideMenu(){
         $("#mainMenu").css("left","-500px");
         
         $("#menuIcon").fadeIn(100);
         $("#menuIcon").css("left","6%");
     }
    setTimeout(hideMenu,200);
    $(".phone").animate({
        marginLeft: "-=5%"
    });
 });

 var id_gallery_img;
 var temp;
$(".bluelayer").on("mouseenter",function(){    
    $(this).find('i').css("display","block");    
    id_gallery_img=$(this).attr("img-slide");
});
$(".bluelayer").on("mouseleave",function(){    
    $(this).find('i').css("display","none");
});
$(".bluelayer").on("click",function () {
    temp = $("img[img-slide-zoom="+id_gallery_img+"]");
    console.log(temp);
    $(".image-zoom").css("display","block");    
    $(temp).addClass("img-active-gallery");
    $(".img-active-gallery").fadeIn(300);
}); 
$(".close-gallery-img").on("click",function(){
    $(".img-active-gallery").fadeOut(300);
    $(".image-zoom").delay(300).css("display","none");   
    $(temp).removeClass("img-active-gallery");   
});
    



$("#filter1").on('click',function(){
    $("#f1").toggle();
});
$("#filter2").on('click',function(){
    $("#f2").toggle();
});
$(".filterList").on("mouseleave",function(){
    $("#f1").hide();
});
$(".filterList").on("mouseleave",function(){
    $("#f2").hide();
});