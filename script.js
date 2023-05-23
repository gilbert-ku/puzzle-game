// alert('working');

const tilesContainer = document.querySelector(".tiles");
const images = [
    { name: "apple", image: "./images/apple.png"},
    { name: "ball", image: "./images/ball.jpg"},
    { name: "chrome", image: "./images/chrome.png"},
    { name: "box", image: "./images/box.jpn"},
    { name: "folder", image: "./images/folder.png"},
    { name: "github", image: "./images/github.png"},

];
const imagesPicklist = [...images, ...images];
const tileCount = imagesPicklist.length;

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

