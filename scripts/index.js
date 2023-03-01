// Placeholder images (same as in gallery)
// Can be replaced with images from society doing activities
let availableImages = [
    "images/enterprise_ncc1701.png",
    "images/main_characters.png",
    "images/NX-01.png",
    "images/spock.png",
    "images/star_trek_convention.png",
    "images/star_trek_logo.png",
    "images/star_trek_lower_decks.png",
    "images/star_trek_lower_decks.png",
    "images/stfc.png"
];
let currentImageIndex = 0;

setInterval(() => {
    currentImageIndex++;
    if (currentImageIndex >= availableImages.length) currentImageIndex = 0;

    document.getElementById("imageCarouselImg").src = availableImages[currentImageIndex];
}, 3000);