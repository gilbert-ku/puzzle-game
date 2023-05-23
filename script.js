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

function buildTile(image) {
	const element = document.createElement("div");

	element.classList.add("tile");
	element.setAttribute("data-image", image);
	element.setAttribute("data-revealed", "false");

	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");

		if (
			awaitingEndOfMove
			|| revealed === "true"
			|| element == activeTile
		) {
			return;
		}
	// Reveal this image
    element.style.backgroundImage = image;

    if (!activeTile) {
        activeTile = element;

        return;
    }

    const imageToMatch = activeTile.getAttribute("data-color");

    if (imageToMatch === image) {
        element.setAttribute("data-revealed", "true");
        activeTile.setAttribute("data-revealed", "true");

        activeTile = null;
        awaitingEndOfMove = false;
        revealedCount += 2;

        if (revealedCount === tileCount) {
            alert("You win! Refresh to start again.");
        }

        return;
    }
