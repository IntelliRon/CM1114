// Function to view an image in the full image viewer
// REQUIRES: A div with id "imgViewer" and an img with id "imgViewerImg"
function viewImage(url) {
    document.getElementById("imgViewer").style = "display: block;";
    document.getElementById("imgViewerImg").src = url;
}

// Function to hide the image viewer
// REQUIRES: A div with id "imgViewer"
function hideFullImage() {
    document.getElementById("imgViewer").style = "display: none;";
}

// Function that adds grayscale and blur filters to all images except hovered image
function hoverImage(event) {
    if (document.getElementById("imgViewer").style.display == "none") {
        let element = event.target;
        element.style = "border: solid blue 2px; filter: none;";
        for (e of document.getElementsByClassName("galleryImg")) {
            if (e != element) {
                e.style = "border: none; filter: grayscale(100%) blur(2px);";
            }
        }
    }
}

// Function that removes filters from all images
function removeHoverImage(event) {
    let element = event.target;
    element.style = "border: none; filter: none;";
    for (e of document.getElementsByClassName("galleryImg")) {
        if (e != element) {
            e.style = "border: none; filter: none;";
        }
    }
}

// Loop through all images to give them the necessary eventListeners to execute above functions
for (e of document.getElementsByClassName("galleryImg")) {
    e.addEventListener("mouseover", hoverImage);
    e.addEventListener("focus", hoverImage);
    e.addEventListener("mouseout", removeHoverImage);
    e.addEventListener("focusout", removeHoverImage);
}