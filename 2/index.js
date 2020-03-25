'use strict';
/**
 * If we want a _second_ rectangle (and simultaneously being
 * deliberately naieve) we might just create five additional
 * variables and duplicate our drawing code.
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

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

// draw the rectangle
ctx.fillStyle = rectCol;
ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

// draw it in the new position, with a different colour
ctx.fillStyle = anotherRectCol;
ctx.fillRect(anotherRectX, anotherRectY, anotherRectWidth, anotherRectHeight);
