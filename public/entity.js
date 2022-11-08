class Entidad {
	constructor(name, hp, atk, def, sprite, posx, posy) {
		this.name = name;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
		this.speed = 4;
		this.sprite = sprite;
		this.posx = posx;
		this.posy = posy;
	}
	Dibujar(context) {
		context.drawImage(this.sprite, this.posx, this.posy);
	}
}
