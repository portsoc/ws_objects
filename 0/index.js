'use strict';
/**
 * We can describe a rectangle in terms of five
 * properies: the x and y position of its top left
 * corner, its width, its height and its colour.
 *
 * We create five variables for these properties.
 *
 * We draw the rectangle, move it, and then draw it again.
 */

// create four variables
let rectX = 100;
let rectY = 50;
let rectWidth = 100;
let rectHeight = 200;
let rectCol = 'crimson';

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

// draw the rectangle
ctx.fillStyle = rectCol;
ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

// move the rectangle
rectX += 200;
rectY += 100;
rectCol = 'steelblue';

// draw it in the new position, with a different colour
ctx.fillStyle = rectCol;
ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
