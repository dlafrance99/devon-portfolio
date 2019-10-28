$(document).ready(function(){
    $(".allContent-wrapper").hide();

    $(".allContent-wrapper").fadeIn(1000);
    
    $(".contact-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("contact.html")
        });
        
    })
    
    $(".portfolio-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("portfolio.html")
        });
        
    })

    $(".home-link").on("click", function(event){
        event.preventDefault();
    })
})