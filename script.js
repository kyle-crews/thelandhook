import image from image.jpg

document.getElementById('changeImageButton').addEventListener('click', function() {
    var displayedImage = document.getElementById('displayedImage');
    displayedImage.style.opacity = '0';

    setTimeout(function() {
        displayedImage.src = 'https://images-na.ssl-images-amazon.com/images/I/61jFW4LembL._AC_UL600_SR600,600_.jpg'; // Replace with new image URL
        displayedImage.style.opacity = '1';
    }, 500);
});
