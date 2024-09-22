document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('section#gallery img');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            openFullscreen(image);
        });
    });

    function openFullscreen(image) {
        if (image.classList.contains('fullscreen')) {
            image.classList.remove('fullscreen');
        } else {
            image.classList.add('fullscreen');
        }
    }
});
