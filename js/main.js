$(document).ready(function() {

    if($(window).width() > 1024){
        
        $('.info-1 .proj-line').addClass('extend');
        $('.info ul li a').addClass('animated fadeInUp');
    }
    
    else {
        $('.proj').removeClass('animated fadeInRight');
        $('.proj').addClass('animated fadeIn');
    }
    
    $('.info-1').hover(function(){
        
        if($(window).width() > 1024){

            $(".info-1 ul li").css("color", "black");
            $(".info-1 ul li a").css("color", "black");
            $(".info-1 .proj-line").addClass("extend");
            $(".info-1 .proj-line").removeClass("descend");
            $(".proj-1").css("display","block");

            $(".info-2 ul li").css("color", "lightgrey");
            $(".info-2 ul li a").css( "color", "lightgrey");
            $(".proj-2").css("display","none");

            $(".info-3 ul li").css( "color", "lightgrey" );
            $(".info-3 ul li a").css( "color", "lightgrey");
            $(".proj-3").css("display","none");

            $(".info-4 ul li").css( "color", "lightgrey" );
            $(".info-4 ul li a").css( "color", "lightgrey" );
            $(".proj-4").css("display","none");

            if ($('.info-2 .proj-line').hasClass("extend")){
               $(".info-2 .proj-line").addClass("descend"); 
            }

            if ($('.info-3 .proj-line').hasClass("extend")){
               $(".info-3 .proj-line").addClass("descend"); 
            }

            if ($('.info-4 .proj-line').hasClass("extend")){
               $(".info-4 .proj-line").addClass("descend"); 
            }
            
        }

    });

    $('.info-2 li').hover(function(){
        
        if($(window).width() > 1024){

            $(".info-1 ul li").css( "color", "lightgrey" );
            $(".info-1 ul li a").css( "color", "lightgrey" );
            $(".proj-1").css("display","none");

            $(".info-2 ul li").css( "color", "black" );
            $(".info-2 ul li a").css( "color", "black" );
            $(".info-2 .proj-line").addClass("extend");
            $(".info-2 .proj-line").removeClass("descend");
            $(".proj-2").css("display","block");

            $(".info-3 ul li").css( "color", "lightgrey" );
            $(".info-3 ul li a").css( "color", "lightgrey" );
            $(".proj-3").css("display","none");

            $(".info-4 ul li").css( "color", "lightgrey" );
            $(".info-4 ul li a").css( "color", "lightgrey" ); 
            $(".proj-4").css("display","none");



            if ($('.info-1 .proj-line').hasClass("extend")){
               $(".info-1 .proj-line").addClass("descend"); 
            }

            if ($('.info-3 .proj-line').hasClass("extend")){
               $(".info-3 .proj-line").addClass("descend"); 
            }

            if ($('.info-4 .proj-line').hasClass("extend")){
               $(".info-4 .proj-line").addClass("descend"); 
            }
            
        }

    });

    $('.info-3 li').hover(function(){
        
        if($(window).width() > 1024){

            $(".info-1 ul li").css( "color", "lightgrey" );
            $(".info-1 ul li a").css( "color", "lightgrey" );
            $(".proj-1").css("display","none");

            $(".info-2 ul li").css( "color", "lightgrey" );
            $(".info-2 ul li a").css( "color", "lightgrey" );
            $(".proj-2").css("display","none");

            $(".info-3 ul li").css( "color", "black" );
            $(".info-3 ul li a").css( "color", "black" );
            $(".info-3 .proj-line").addClass("extend");
            $(".info-3 .proj-line").removeClass("descend");
            $(".proj-3").css("display","block");

            $(".info-4 ul li").css( "color", "lightgrey" );
            $(".info-4 ul li a").css( "color", "lightgrey" );
            $(".proj-4").css("display","none");

            if ($('.info-1 .proj-line').hasClass("extend")){
               $(".info-1 .proj-line").addClass("descend"); 
            }

            if ($('.info-2 .proj-line').hasClass("extend")){
               $(".info-2 .proj-line").addClass("descend"); 
            }

            if ($('.info-4 .proj-line').hasClass("extend")){
               $(".info-4 .proj-line").addClass("descend"); 
            }
            
        }

    });

    $('.info-4 li').hover(function(){
        
        if($(window).width() > 1024){

            $(".info-1 ul li").css( "color", "lightgrey" );
            $(".info-1 ul li a").css( "color", "lightgrey" );
            $(".proj-1").css("display","none");

            $(".info-2 ul li").css( "color", "lightgrey" );
            $(".info-2 ul li a").css( "color", "lightgrey" );
            $(".proj-2").css("display","none");

            $(".info-3 ul li").css( "color", "lightgrey" );
            $(".info-3 ul li a").css( "color", "lightgrey" );
            $(".proj-3").css("display","none");

            $(".info-4 ul li").css( "color", "black" );
            $(".info-4 ul li a").css( "color", "black" ); 
            $(".info-4 .proj-line").addClass("extend");
            $(".info-4 .proj-line").removeClass("descend");
            $(".proj-4").css("display","block");

            if ($('.info-1 .proj-line').hasClass("extend")){
               $(".info-1 .proj-line").addClass("descend"); 
            }

            if ($('.info-2 .proj-line').hasClass("extend")){
               $(".info-2 .proj-line").addClass("descend"); 
            }

            if ($('.info-3 .proj-line').hasClass("extend")){
               $(".info-3 .proj-line").addClass("descend"); 
            }
            
        }

    });

});

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1024) {
        $('.proj-1').removeClass("animated fadeInRight");
        $('.proj-1, .proj-2, .proj-3, .proj-4').css("display","block");
    }
});