let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
const image = new Image();
image.src = "/public/images/char.png";

const keys = [];

const player = new Entidad("Pedro", 10, 10, 10, image, 40, 40);
const enemigo = new Entidad("Goblin", 8, 4, 4);

function gameLoop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player.Dibujar(ctx);
	window.requestAnimationFrame(gameLoop);
}
gameLoop();

window.addEventListener("keydown", (e) => {
	keys.push(e.key);
	console.log(keys[0]);
});
window.addEventListener("keyup", () => {
	keys.shift();
});
