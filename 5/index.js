'use strict';
/**
 * We can remove the repetition in the drawing
 * logic by making a function for it.
 *
 * The `drawRect` function has six parameters: the
 * drawing context and the five rectangle parameters.
 */

// create five variables
const rectX = 100;
const rectY = 50;
const rectWidth = 100;
const rectHeight = 200;
const rectCol = 'crimson';

// create another five variables
const anotherRectX = 300;
const anotherRectY = 150;
const anotherRectWidth = 100;
const anotherRectHeight = 200;
const anotherRectCol = 'steelblue';

// draw a rectangle
function drawRect(c, x, y, w, h, col) {
  c.fillStyle = col;
  c.fillRect(x, y, w, h);
}

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

drawRect(ctx, rectX, rectY, rectWidth, rectHeight, rectCol);
drawRect(ctx, anotherRectX, anotherRectY, anotherRectWidth, anotherRectHeight, anotherRectCol);
