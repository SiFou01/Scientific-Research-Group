const down = [
    {opacity : "1", offset : 0},
    {opacity : "0", bottom : "-10rem", offset : 0.3},
    {opacity : "1", offset : 1},
];

const downDuration = {
    duration : 1500,
    iterations : 1,
    };

let image_index = 0;

let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");

let imgText = document.querySelector(".image-text");

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
    imgText.animate(down, downDuration);
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