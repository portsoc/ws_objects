'use strict';
/**
 * Objects can contain functions as properties.
 *
 * Here, we move the drawRect function into the class
 * definition.
 *
 * Functions within objects have access to their
 * properties by using the `this` keyword.
 */

// define the properties and functions of a Rectangle
class Rectangle {
  constructor(x, y, width, height, col) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.col = col;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// create circle and rectangle objects
const rect = new Rectangle(100, 50, 100, 200, 'crimson');
const anotherRect = new Rectangle(300, 150, 100, 200, 'steelblue');

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

rect.draw(ctx);
anotherRect.draw(ctx);
