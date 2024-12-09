document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const cardImage = document.getElementById('cardImage');
    const fullscreenImage = document.getElementById('fullscreenImage');

    // Set fullscreen image source to match card image
    fullscreenImage.src = cardImage.src;

    // Open fullscreen overlay
    playBtn.addEventListener('click', () => {
        overlay.classList.remove('closing');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close fullscreen overlay
    function closeOverlay() {
        overlay.classList.add('closing');
        overlay.classList.remove('active');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            overlay.classList.remove('closing');
            document.body.style.overflow = '';
        }, 300);
    }

    closeBtn.addEventListener('click', closeOverlay);

    // Close on overlay click (but not on image click)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeOverlay();
        }
    });
});
