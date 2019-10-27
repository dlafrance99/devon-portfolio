$(document).ready(function(){
    $(".allContent-wrapper").hide();

    $(".allContent-wrapper").fadeIn(1000);
    
    $(".contact-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("file:///Users/devon/Desktop/code/Portfolio/devon-portfolio/contact.html")
        });
        
    })
    
    $(".portfolio-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("file:///Users/devon/Desktop/code/Portfolio/devon-portfolio/portfolio.html")
        });
        
    })

    $(".home-link").on("click", function(event){
        event.preventDefault();
    })
})