
AOS.init({
duration:1000

});
$(document).ready(function(){

     //loading page
 $(window).on('load',function(){

    $('.loading').fadeOut(2000,function(){
  
        $('body').css('overflow', 'auto')
    })
  })
  
});

let featuresOffser=$("#about-section").offset().top;
$(window).scroll(function(){
    if($(this).scrollTop() > 500 )
    {
      $("#btnup").fadeIn(1000);
    }
    else{
      $("#btnup").fadeOut(1000);
    }

let wScrool=$(window).scrollTop();
if(wScrool > featuresOffser)
{

$("#nav-bar").css("backgroundColor" , "rgba(0 , 0 , 0 , 0.5)");    
}
else{
    $("#nav-bar").css("backgroundColor" , "transparent"); 
}

})

$("a").click(function(){

    let ahref=$(this).attr("href");
    
    let sectionOffset=$(ahref).offset().top;
    
    $("html,body").animate({scrollTop:sectionOffset} , 1000);
    

})
$("#btnup").click(function(){

    $("body ,html").animate({scrollTop:"0px"},1000)
    
    
    })
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
      });
