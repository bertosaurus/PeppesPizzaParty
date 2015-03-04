$(document).ready(function() {
    $("figure.front").click(function() {
        $("#card").toggleClass("flipped")
        console.log("klick körs. Knapp gömd.");

        $(this).parent().parent().parent().parent().children(".meny-framsida-div")
                .delay(2500).animate({top: 920}, 3000)
        $(this).parent().parent().parent().parent().children(".meny-forstasida-div")
                .delay(2500).animate({top: 919}, 3000)
        $(this).parent().parent().parent().parent().children(".meny-andrasida-div")
                .delay(2500).animate({top: 919}, 3000)
    });
    
//    framsida
    
    $(".meny-framsida-front").click(function() {
        
        $(".meny-framsida-container").animate({left: 275}, 1000);
        $(".meny-framsida").toggleClass("meny-flipped");
        $(".meny-forstasida-container").animate({left: 275}, 1000);
        $(".meny-andrasida-container").animate({left: 275}, 1000);
        
    });
    $(".meny-framsida-back").click(function() {
        
        $(".meny-framsida-container").animate({left: 0}, 1000);
        $(".meny-framsida").toggleClass("meny-flipped").delay(1000).animate({left: 300}, 1000);
        $(".meny-forstasida-container").animate({left: 0}, 1000);
        $(".meny-andrasida-container").animate({left: 0}, 1000);
        
    });
    
//    förstasida
    
    $(".meny-forstasida-front").click(function() {
        
        $(".meny-forstasida-container").animate({left: 275}, 1000);
        $(".meny-forstasida").toggleClass("meny-flipped");
//        $(".meny-andrasida-container").animate({left: 275}, 1000);
        
    });
    $(".meny-forstasida-back").click(function() {
        
        $(".meny-forstasida-container").animate({left: 0}, 1000);
        $(".meny-forstasida").toggleClass("meny-flipped").delay(1000).animate({left: 300}, 1000);
//        $(".meny-andrasida-container").animate({left: 0}, 1000);
        
    });
    
//    andrasida
    
});
