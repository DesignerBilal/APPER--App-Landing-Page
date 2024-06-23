document.addEventListener('DOMContentLoaded', function () {
    const numStars = 150; // Number of stars
    const starsContainer = document.querySelector('.stars-container');

    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`; // Random horizontal position
        star.style.top = `${Math.random() * 100}%`; // Random vertical position
        star.style.animationDuration = `${1 + Math.random() * 2}s`; // Random speed

        const delay = Math.random() * 5; // Random delay before animation starts
        star.style.animationDelay = `-${delay}s`;

        starsContainer.appendChild(star);
    }
});
