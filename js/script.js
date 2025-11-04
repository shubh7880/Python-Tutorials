document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            createLightbox(imgSrc);
        });
    });

    function createLightbox(imgSrc) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        const lightboxContent = document.createElement('img');
        lightboxContent.src = imgSrc;

        const closeButton = document.createElement('span');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            lightbox.remove();
        });

        lightbox.appendChild(lightboxContent);
        lightbox.appendChild(closeButton);
        document.body.appendChild(lightbox);
    }
});
