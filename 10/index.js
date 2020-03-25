'use strict';
/**
 * We can _structure_ the properties better, and
 * make the code a little easier to read by
 * constructing an object.
 *
 * Our `drawRect` function no longer needs
 * six parameters.
 */

// create an object
const rect = {
  x: 100,
  y: 50,
  width: 100,
  height: 200,
  col: 'crimson',
};

// draw a rectangle
function drawRect(c, r) {
  c.fillStyle = r.col;
  c.fillRect(r.x, r.y, r.width, r.height);
}

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

drawRect(ctx, rect);

// move the rectangle
rect.x += 200;
rect.y += 100;
rect.col = 'steelblue';

drawRect(ctx, rect);
