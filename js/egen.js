$(document).ready(function() {
    $("figure.front").click(function() {
        $("#card").toggleClass("flipped")
        console.log("klick körs. Knapp gömd.");

        $(this).parent().parent().parent().parent().children(".meny-framsida")
                .delay(2500).animate({top: 920}, 3000).delay(1000).animate({left: 300}, 1000);
        $(this).parent().parent().parent().parent().children(".meny-framsida-2")
                .delay(2500).animate({top: 920}, 3000).delay(1000).animate({left: 300}, 1000);
    });
    
    $(".btn").click(function() {
        
        $(".meny-framsida").toggleClass("flipped-meny")
        
    });
});
