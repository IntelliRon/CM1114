function viewImage(url) {
    document.getElementById("imgViewer").style = "display: block;";
    document.getElementById("imgViewerImg").src = url;
}

function hideFullImage() {
    document.getElementById("imgViewer").style = "display: none;";
}

function hoverImage(event) {
    if (document.getElementById("imgViewer").style.display == "none") {
        console.log("Hello");
        let element = event.target;
        element.style = "border: solid blue 2px; filter: none;";
        for (e of document.getElementsByClassName("galleryImg")) {
            if (e != element) {
                e.style = "border: none; filter: grayscale(100%) blur(2px);";
            }
        }
    }
}

function removeHoverImage(event) {
    let element = event.target;
    element.style = "border: none; filter: none;";
    for (e of document.getElementsByClassName("galleryImg")) {
        if (e != element) {
            e.style = "border: none; filter: none;";
        }
    }
}

for (e of document.getElementsByClassName("galleryImg")) {
    e.addEventListener("mouseover", hoverImage);
    e.addEventListener("focus", hoverImage);
    e.addEventListener("mouseout", removeHoverImage);
    e.addEventListener("focusout", removeHoverImage);
}