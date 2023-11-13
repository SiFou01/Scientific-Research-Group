const down = [
    {opacity : "1", offset : 0},
    {opacity : "0", bottom : "-10rem", offset : 1},
];

const downDuration = {
    duration : 700,
    iterations : 1,
    };

let image_index = 0;
let animate = 0;

let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");

let imgText = document.querySelectorAll(".image-text");
imgText = Array.from(imgText);

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
    imgText[animate].animate(down, downDuration);
    setTimeout(hide, 700, animate, 1);
    images[image_index + 1].setAttribute("style", "display : initial");
    image_index++;
    animate++;
    if (animate == 4) {
        animate = 0;
    }
}

function previousImage() {
    images.forEach(image => {
        image.removeAttribute("style", "display : initial");
    });
    if (image_index == 0) {
        image_index = 4;
    }
    imgText[animate].animate(down, downDuration);
    setTimeout(hide, 700, animate, 0);
    images[image_index - 1].setAttribute("style", "display : initial");
    image_index--;
    animate--;
    if (animate == -1) {
        animate = 3;
    }
}

function hide(animate, slide) {
    imgText.forEach(text => {
        text.removeAttribute("style", "display : initial");
    });
    if (slide) {
        if (animate == 3) {
            imgText[0].setAttribute("style", "display : initial");
        }
        else {
            imgText[animate + 1].setAttribute("style", "display : initial");
        }
    }
    else {
        if (animate == 0) {
            imgText[3].setAttribute("style", "display : initial");
        }
        else {
            imgText[animate - 1].setAttribute("style", "display : initial");
        }
    }
}