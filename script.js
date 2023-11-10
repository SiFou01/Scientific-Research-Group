let image_index = 1;

let images = document.querySelectorAll(".image-container img");
images = Array.from(images);

function nextImage() {
    if (image_index == 4) {
        image_index = 1;
    }
    images[image_index - 1].removeAttribute("style", "display : initial");
    images[image_index].setAttribute("style", "display : initial");
    image_index++;
}