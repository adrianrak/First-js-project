$(function(){
    var carouselList = $("#carousel ul");
    var interval = setInterval(function(){changeSlide()}, 3000);
    
    function changeSlide() {    
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);    
    }
    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(function(){changeSlide()}, 3000);
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
        carouselList.css({marginLeft:-400});
    }
  
    $("#left").click(function() {
        moveLastSlide();
        carouselList.animate({'marginLeft':0}, 500);
        resetInterval()
    });
    $("#right").click(function(){
        changeSlide();
        resetInterval()
    }); 
    
});

