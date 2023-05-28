const body = document.querySelector("body");

const images = ["0.jpeg", "1.jpeg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imageurl = `img/${chosenImage}`;

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.width = window.innerWidth;
bgImage.height = window.innerHeight;
bgImage.style.opacity = "0.3";
bgImage.style.position = "fixed";
bgImage.style.left = 0;
bgImage.style.top = 0;

document.body.appendChild(bgImage);
