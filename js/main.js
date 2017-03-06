$(document).ready(function() {
    
    $('.info-1 .proj-line').addClass('extend');
    
});   

if ( $(window).width() > 769) {
    
    $('.info-1').hover(function(){
    
        $(".info-1 ul li").css( "color", "black" );
        $(".info-1 ul li a").css( "color", "black" );
        $(".info-1 .proj-line").addClass("extend");
        $(".info-1 .proj-line").removeClass("descend");
        $(".proj-1").css("display","block");
        
        $(".info-2 ul li").css( "color", "lightgrey" );
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
    
    });
    
    $('.info-2 li').hover(function(){
        
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
        
    });
    
    $('.info-3 li').hover(function(){
        
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
        
    });
    
    $('.info-4 li').hover(function(){
        
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
        
    });    
};