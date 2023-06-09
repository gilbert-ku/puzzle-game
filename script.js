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

    awaitingEndOfMove = true;

    setTimeout(() => {
        activeTile.style.backgroundImage = null;
        element.style.backgroundImage = null;

        awaitingEndOfMove = false;
        activeTile = null;
    }, 1000);
});

return element;
}
// Build up tiles
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * imagesPicklist.length);
    const image = imagesPicklist[randomIndex];
    const tile = buildTile(image);
    
    imagesPicklist.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
    }

	