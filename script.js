function openImage(img){

document.getElementById("viewer").style.display="flex"
document.getElementById("viewer-img").src=img.src

}

function closeViewer(){

document.getElementById("viewer").style.display="none"

}