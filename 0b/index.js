'use strict';
/**
 * Previously, we needed to repeat the drawing logic.
 * We can simplify this by making a function for it.
 *
 * The `drawRect` function has six parameters: the
 * drawing context and the five rectangle parameters.
 */

// create four variables
let rectX = 100;
let rectY = 50;
let rectWidth = 100;
let rectHeight = 200;
let rectCol = 'crimson';

// draw a rectangle
function drawRect(c, x, y, w, h, col) {
  c.fillStyle = col;
  c.fillRect(x, y, w, h);
}

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

drawRect(ctx, rectX, rectY, rectWidth, rectHeight, rectCol);

// move the rectangle
rectX += 200;
rectY += 100;
rectCol = 'steelblue';

drawRect(ctx, rectX, rectY, rectWidth, rectHeight, rectCol);
