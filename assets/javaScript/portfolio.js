$(document).ready(function(){

    $(".allContent-wrapper").fadeIn(1000);
    
    $(".home-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("home.html")
        });
        
    })
    
    $(".contact-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("contact.html")
        });
        
    })

    $(".portfolio-link").on("click", function(event){
        event.preventDefault();
    })

    $("#sundayStaple").mouseover(function(){
        $("#sundayInfo").slideDown(500);
    })
    $("#sundayStaple").mouseout(function(){
        $("#sundayInfo").slideUp(500)
    })

   
    $("#std").mouseover(function(){
        $("#stdInfo").slideDown(500);
    })
    $("#std").mouseout(function(){
        $("#stdInfo").slideUp(500)
    })

    $("#bobs").mouseover(function(){
        $("#bobsInfo").slideDown(500);
    })
    $("#bobs").mouseout(function(){
        $("#bobsInfo").slideUp(500)
    })

    $("#fit-to-scrape").mouseover(function(){
        $("#fitToScrapeInfo").slideDown(500);
    })
    $("#fit-to-scrape").mouseout(function(){
        $("#fitToScrapeInfo").slideUp(500)
    })

    $("#click-game").mouseover(function(){
        $("#clickGameInfo").slideDown(500);
    })
    $("#click-game").mouseout(function(){
        $("#clickGameInfo").slideUp(500)
    })

    $("#bearfootvoyage").mouseover(function(){
        $("#bearfootInfo").slideDown(500);
    })
    $("#bearfootvoyage").mouseout(function(){
        $("#bearfootInfo").slideUp(500)
    })

    $("#trainSchedule").mouseover(function(){
        $("#trainInfo").slideDown(500);
    })
    $("#trainSchedule").mouseout(function(){
        $("#trainInfo").slideUp(500)
    })

    $("#liri").mouseover(function(){
        $("#liriInfo").slideDown(500);
    })
    $("#liri").mouseout(function(){
        $("#liriInfo").slideUp(500)
    })
    
    $("#bamazon").mouseover(function(){
        $("#bamazonInfo").slideDown(500);
    })
    $("#bamazon").mouseout(function(){
        $("#bamazonInfo").slideUp(500)
    })
    
    $("#NAWPutter").mouseover(function(){
        $("#NAWPutterInfo").slideDown(500);
    })
    $("#NAWPutter").mouseout(function(){
        $("#NAWPutterInfo").slideUp(500)
    })
})