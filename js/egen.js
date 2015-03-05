$(document).ready(function() {
    
//    cirkel
    
    $("figure.front").click(function() {
        $("#card").toggleClass("flipped")
        console.log("klick körs. Knapp gömd.");
        
        $(".body-1").toggleClass("body-2");

        $(this).parent().parent().parent().parent().children(".meny-div")
                .delay(2500).animate({top: 920}, 3000)
    });
    
//    framsida
    
    $(".meny-framsida-front").click(function() {
        
        $(".meny-container").animate({left: 275}, 1000);
        $(".meny-framsida").toggleClass("meny-flipped").delay(1000).queue(function(next){
            $(".meny-framsida").toggleClass("meny-framsida-2");
         next();
    });        
    });
    
    $(".meny-framsida-back").click(function() {
        
        $(".meny-container").animate({left: 0}, 1000);
        $(".meny-framsida").toggleClass("meny-flipped");
        $(".meny-framsida").toggleClass("meny-framsida-2");
        
    });
    
//    förstasida
    
    $(".meny-forstasida-front").click(function() {
        
        $(".meny-forstasida").toggleClass("meny-flipped").delay(1000).queue(function(next){
            $(".meny-forstasida").toggleClass("meny-forstasida-2");
         next();
    });        
    });
    
    $(".meny-forstasida-back").click(function() {
        
        $(".meny-forstasida").toggleClass("meny-flipped");
        $(".meny-forstasida").toggleClass("meny-forstasida-2");
        
    });
    
//    andrasida
    
    $(".meny-andrasida-front").click(function() {
        
        $(".meny-andrasida").toggleClass("meny-flipped");
         $(".meny-andrasida").toggleClass("meny-andrasida-2");
    });        
    });
    
    $(".meny-andrasida-back").click(function() {
        
        $(".meny-andrasida").toggleClass("meny-flipped").delay(1000).queue(function(next){
            $(".meny-andrasida").toggleClass("meny-andrasida-2");
         next();      
    });   
});
