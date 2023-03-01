function viewImage(url) {
    document.getElementById("imgViewer").style = "display: block;";
    document.getElementById("imgViewerImg").src = url;
}

function hideFullImage() {
    document.getElementById("imgViewer").style = "display: none;";
}