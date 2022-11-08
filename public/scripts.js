let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
const image = new Image();
image.src = "/public/images/char.png";
const loop = true;

const player = new Entidad("Pedro", 10, 10, 10, image, 40, 40);
const enemigo = new Entidad("Goblin", 8, 4, 4);

function gameLoop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player.posx += 3;
	player.Dibujar(ctx);
	window.requestAnimationFrame(gameLoop);
}
gameLoop();
