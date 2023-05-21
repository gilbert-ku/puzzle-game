// alert('working');

const moves = document.getElementById("moves");
const timeValue = document.getElementById("timer");
const startButton = document.getElementById("start");
const resultsButton = document.getElementById("results");
const stopButton = document.getElementById("stop");
const gameContainer = document.getElementsByClassName(".game");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

const itemsImges = [
    { name: "apple", image: "./images/apple.png"},
    { name: "ball", image: "./images/ball.jpg"},
    { name: "chrome", image: "./images/chrome.png"},
    { name: "box", image: "./images/box.jpn"},
    { name: "folder", image: "./images/folder.png"},
    { name: "github", image: "./images/github.png"},

];