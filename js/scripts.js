$(function(){
    var carouselList = $("#carousel ul");
    var interval = setInterval(function(){changeSlide()}, 3000);
    
    function changeSlide() {    
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);    
    }
    function stopInterval() {
        clearInterval(interval);
    }

    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginRight:0});
    }
  
    $("#left").click(function() {
        carouselList.animate({'marginRight':-400}, 500, moveLastSlide);
   
    });
    $("#right").click(function(){
        changeSlide();
        
    }); 
    
});

