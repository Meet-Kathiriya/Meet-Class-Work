let images = [
    'img1.jpeg',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg'
];

let firstImage = 0;
let lastImage = images.length - 1;
let cnt = 0;

function slide() {
    let imageElement = document.querySelector("#image");
    imageElement.src = `/Auto Slider/img/${images[cnt]}`;
    cnt++;
    if (cnt > lastImage) {
        cnt = firstImage;
    }
}

setInterval(() => {
    slide();
}, 2000);
