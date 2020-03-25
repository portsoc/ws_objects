'use strict';
/**
 * Objects can contain functions as properties.
 *
 * In the previous code, we can encapsulate with
 *
 * Here, two functions are added to the object:
 * a moveBy function is added to the rectangle
 * object.  It operates on the object's properties
 * by using the `this` keyword.
 *
 * The bundling together of data and the methods that
 * operate on data is called 'encapsulation`.
 *
 */

// create an object
const rect = {
  x: 100,
  y: 50,
  width: 100,
  height: 200,
  col: 'crimson',

  draw: function (c) {
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },

  moveBy: function (x, y) {
    this.x += x;
    this.y += y;
  },
};

// draw the rectangle
const ctx = document.querySelector('canvas').getContext('2d');

rect.draw(ctx);

// move the rectangle
rect.moveBy(200, 100);
rect.col = 'steelblue';

// draw it again
rect.draw(ctx);
