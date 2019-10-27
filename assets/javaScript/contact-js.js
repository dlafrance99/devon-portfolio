$(document).ready(function(){
    $(".allContent-wrapper").hide();


    $(".allContent-wrapper").fadeIn(1000);
    
    $(".home-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("file:///Users/devon/Desktop/code/Portfolio/devon-portfolio/home.html")
        });
        
    })
    
    $(".portfolio-link").on("click", function(event){
        event.preventDefault();
        
        $(".allContent-wrapper").fadeOut(1000, function(){
            window.location.replace("file:///Users/devon/Desktop/code/Portfolio/devon-portfolio/portfolio.html")
        });
        
    })

    $(".contact-link").on("click", function(event){
        event.preventDefault();
    })
})