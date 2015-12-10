$(document).ready(function() {
        
    var iList = $('div.main-content')
        var li = $('<img>')
            .addClass('imageSlide')
            .prependTo(iList);    

    var myImage = $('.imageSlide');
    var imageArray = ["assets/images/insight-coffee-roasters.jpg","assets/images/naked-coffee.jpg"];
    var imageIndex = 0;
    
    
    // this works but isn't animated
    function changeImage() {
        myImage.attr('src', imageArray[imageIndex]);
        myImage.attr('width', '730px');
        myImage.attr('height', '450px');
        imageIndex++
        if(imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    }
    setInterval(changeImage, 3000);
    
    
    
});