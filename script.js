let image_index = 0;

let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");

nextBtn.addEventListener("click", function() {nextImage()});
previousBtn.addEventListener("click", function() {previousImage()});

let images = document.querySelectorAll(".image-container img");
images = Array.from(images);

function nextImage() {
    images.forEach(image => {
        image.removeAttribute("style", "display : initial");
    });
    if (image_index == 3) {
        image_index = -1;
    }
    images[image_index + 1].setAttribute("style", "display : initial");
    image_index++;
}

function previousImage() {
    images.forEach(image => {
        image.removeAttribute("style", "display : initial");
    });
    if (image_index == 0) {
        image_index = 4;
    }
    images[image_index - 1].setAttribute("style", "display : initial");
    image_index--;
}