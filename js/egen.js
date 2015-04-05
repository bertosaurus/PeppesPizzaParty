$(document).ready(function() {
    
//    cirkel
    
    $("figure.front").click(function() {
        $("#card").toggleClass("flipped")
        console.log("klick körs. Knapp gömd.");
        
        $(".body-1").toggleClass("body-2");

        $(this).parent().parent().parent().parent().children(".meny-div")
                .delay(2500).animate({top: 900}, 3000)
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
    
//    bytta till pizza sida  
    $("a .forstaSidapizzaFlikFront").click(function() {
        
        $(".meny-forstasida").toggleClass("meny-flipped").delay(1000).queue(function(next){
            $(".meny-forstasida").toggleClass("meny-forstasida-2");
         next();
    });        
    });
    
//    bytta tillbaka till peppe sida  
    $(".forstaSidaBackWrapper a").click(function() {
        
        $(".meny-forstasida").toggleClass("meny-flipped");
        $(".meny-forstasida").toggleClass("meny-forstasida-2");       
    });
    
//    andrasida
    
//    bytta till party sida
    $("a .andraSidaPartyFlikFront").click(function() {
        
        $(".meny-andrasida").toggleClass("meny-flipped");
         $(".meny-andrasida").toggleClass("meny-andrasida-2");
    });        
    });
    
//    bytta tillbaka till pizza sida
    $("a .andraSidaPizzaFlikBack").click(function() {
        
        $(".meny-andrasida").toggleClass("meny-flipped").delay(1000).queue(function(next){
            $(".meny-andrasida").toggleClass("meny-andrasida-2");
         next();      
    });   
});


//bytta från pizza sida till party sida
$("a .forstaSidapartyFlikFront").click(function() {
        
    $(".meny-forstasida").toggleClass("meny-flipped").delay(500).queue(function(next){
            $(".meny-forstasida").toggleClass("meny-forstasida-2");
         next();
        $(".meny-andrasida").toggleClass("meny-flipped");
         $(".meny-andrasida").toggleClass("meny-andrasida-2");
    });
    
});

//bytta från party sida till peppe sida
$("a .andraSidaPartyFlikBack").click(function() {
        
        $(".meny-andrasida").toggleClass("meny-flipped").delay(700).queue(function(next){
            $(".meny-andrasida").toggleClass("meny-andrasida-2");
         next();
         $(".meny-forstasida").toggleClass("meny-flipped");
        $(".meny-forstasida").toggleClass("meny-forstasida-2");
    });   
});

//bytta från slut till partysida

$("a .sistaSidaPartyFlikBack").click(function() {
        
        $(".meny-sistasida").toggleClass("meny-flipped").delay(500).queue(function(next){
            $(".meny-sistasida").toggleClass("meny-sistasida-2");  
});
});

//bytta från slut till pizzasida

$("a .sistaSidaPizzaFlikBack").click(function() {
        
        $(".meny-sistasida").toggleClass("meny-flipped").delay(600).queue(function(next){
            $(".meny-sistasida").toggleClass("meny-sistasida-2");
         next();
         $(".meny-andrasida").toggleClass("meny-flipped");
        $(".meny-andrasida").toggleClass("meny-andrasida-2");
    });   
});

//bytta från slut till peppesida

$("a .sistaSidaPeppeFlikBack").click(function() {
        
    $(".meny-sistasida").toggleClass("meny-flipped").delay(600).queue(function(next){
            $(".meny-sistasida").toggleClass("meny-sistasida-2");
         next();
        $(".meny-andrasida").toggleClass("meny-flipped").delay(600).queue(function(next){
            $(".meny-andrasida").toggleClass("meny-andrasida-2");
         
         $(".meny-forstasida").toggleClass("meny-flipped");
        $(".meny-forstasida").toggleClass("meny-forstasida-2");
    });
    });
});

//footer click

//$(".footerWrapper a").click(function() {
//        
//        $(".meny-sistasida").toggleClass("meny-flipped");
//         $(".meny-sistasida").toggleClass("meny-sistasida-2");
//    });        