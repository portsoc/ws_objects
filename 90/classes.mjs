export class Shape {

  #x = 0;
  #y = 0;
  #fill;
  #stroke;

  constructor(x, y, fill = 'grey', stroke = 'white') {
    this.#x = x;
    this.#y = y;
    this.#fill = fill;
    this.#stroke = stroke;
  }

  moveBy(x, y) {
    this.#x += x;
    this.#y += y;
  }

  setFill(fill) {
    this.#fill = fill;
  }

  draw(ctx) {
    ctx.fillStyle = this.#fill;
    ctx.strokeStyle = this.#stroke;
  }
}

// Define the properties and functions of a Rectangle
export class Rectangle extends Shape {

  #width;
  #height;

  constructor(x, y, w, h, col) {
    super(x, y, col);
    this.#width = w;
    this.#height = h;
  }

  scale(s) {
    this.#width *= s;
    this.#height *= s;
  }

  draw(ctx) {
    super.draw(ctx);
    ctx.fillRect(this.#x, this.#y, this.#width, this.#height);
  }
}

// Define the properties and functions of a circle
export class Circle extends Shape {

  #r;

  constructor(x, y, r, col) {
    super(x, y, col);
    this.#r = r;
  }

  draw(ctx) {
    super.draw(ctx);
    ctx.beginPath();
    ctx.arc(this.#x, this.#y, this.#r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
