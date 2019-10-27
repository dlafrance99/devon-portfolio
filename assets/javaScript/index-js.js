hideAll();


$("#enterButton").on("click", function () {
    $(".intro").fadeOut(1000, function () {
        $(".allContent-wrapper").fadeIn(1000);
        $(".home-wrapper").fadeIn(1000);
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

    $(".allContent-wrapper").fadeOut(1000, function(){
        window.location.replace("file:///Users/devon/Desktop/code/Portfolio/devon-portfolio/contact.html")
    });

})

$(".home-link").on("click", function(event){
    event.preventDefault();
})

function hideAll() {
    $(".allContent-wrapper").hide();
    $(".home-wrapper").hide();
    $(".portfolio-wrapper").hide();
    $(".contact-wrapper").hide();
}




