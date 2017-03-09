$(document).ready(function() {

    if($(window).width() < 1024){
        
        $('.info-1 .proj-line').removeClass('extend');
        $('.proj').removeClass('animated fadeInRight');
        $('.proj-1,.proj-2,.proj-3,.proj-4').removeClass('animated zoomIn');
        $('.proj').addClass('animated fadeIn')
        
    }
    
    $('.info-1').hover(function(){
        
        if($(window).width() > 1024){
            
            $('.proj-1').css("display","block");
            
            $('.proj-2, .proj-3, .proj-4').css("display","none");
            
            $(".info-1 ul li").css("color", "black");
            $(".info-1 ul li a").css("color", "black");
            $(".info-1 .proj-line").addClass("extend");
            $(".info-1 .proj-line").removeClass("descend");
            
            $(".info-2 ul li, .info-2 ul li a, .info-3 ul li, .info-3 ul li a, .info-4 ul li, .info-4 ul li a").css( "color", "lightgrey" );

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
            
            $('.proj-1').addClass("animated zoomIn");
            
            $('.proj-1, .proj-3, .proj-4').css("display","none");
            
            $('.proj-2').css("display","block");
            
            $(".info-1 ul li, .info-1 ul li a, .info-3 ul li, .info-3 ul li a, .info-4 ul li, .info-4 ul li a").css( "color", "lightgrey" );

            $(".info-2 ul li").css( "color", "black" );
            $(".info-2 ul li a").css( "color", "black" );
            $(".info-2 .proj-line").addClass("extend");
            $(".info-2 .proj-line").removeClass("descend");

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
            
            $('.proj-1, .proj-2, .proj-4').css("display","none");
            
            $('.proj-3').css("display","block");
            
            $(".info-1 ul li, .info-1 ul li a, .info-2 ul li, .info-2 ul li a, .info-4 ul li, .info-4 ul li a").css( "color", "lightgrey" );
            
            $(".info-3 ul li").css( "color", "black" );
            $(".info-3 ul li a").css( "color", "black" );
            $(".info-3 .proj-line").addClass("extend");
            $(".info-3 .proj-line").removeClass("descend");

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
            
            $('.proj-1, .proj-2, .proj-3').css("display","none");
            
            $('.proj-4').css("display","block");
            
            $(".info-1 ul li, .info-1 ul li a, .info-2 ul li, .info-2 ul li a, .info-3 ul li, .info-3 ul li a").css( "color", "lightgrey" );

            $(".info-4 ul li").css( "color", "black" );
            $(".info-4 ul li a").css( "color", "black" ); 
            $(".info-4 .proj-line").addClass("extend");
            $(".info-4 .proj-line").removeClass("descend");

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
        $('.proj-line').removeClass('extend');
        $('.proj-1').removeClass("animated fadeInRight");
        $('.proj-1, .proj-2, .proj-3, .proj-4').css("display","block");
        $('.info ul li, .info ul li a').css("color","black");
    }
    else {
        $('.proj-1,.proj-2,.proj-3,.proj-4').addClass('animated zoomIn');
        $('.info-1 .proj-line').addClass('extend');
    }
});