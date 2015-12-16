$(document).ready(function() {
        
    var iList = $('div.main-content')
        var li = $('<img>')
            .addClass('imageSlide')
            .prependTo(iList);    

    var myImage = $('.imageSlide');
    var imageArray = ["assets/images/insight-coffee-roasters.jpg","assets/images/Old-Soul-PO-15.jpg","assets/images/insight-coffee-roasters-898312.jpg","assets/images/OldSoul-web.jpg"];
    var imageIndex = 0;    
    
    
    function changeImage() {
        myImage.attr('src', imageArray[imageIndex]);
        myImage.attr('width', '730px');
        myImage.attr('height', '450px');
        imageIndex++
        if(imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    }
    changeImage();
    setInterval(changeImage, 3000);
    
    
    
});