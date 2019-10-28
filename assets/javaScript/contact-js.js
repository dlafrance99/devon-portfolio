$(document).ready(function(){


    $(".allContent-wrapper").fadeIn(1000);
    
    $(".home-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("home.html")
        });
        
    })
    
    $(".portfolio-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("portfolio.html")
        });
        
    })

    $(".contact-link").on("click", function(event){
        event.preventDefault();
    })
})