document.getElementById('changeImageButton').addEventListener('click', function() {
    var displayedImage = document.getElementById('displayedImage');
    displayedImage.style.opacity = '0';

    setTimeout(function() {
        displayedImage.src = 'image.jpg';
        displayedImage.style.opacity = '1';
    }, 500);
});
