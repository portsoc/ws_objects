'use strict';
/**
 * We can clean up our handling of variables by
 * using an array.
 */

import { Circle, Rectangle } from './classes.mjs';

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

// Create circle and rectangle objects
const shapes = [
  new Rectangle(100, 50, 100, 200, 'crimson'),
  new Rectangle(300, 150, 100, 200, 'steelblue'),
  new Circle(150, 350, 50, `crimson`),
  new Circle(350, 450, 50, `steelblue`),
];

for (const s of shapes) {
  s.draw(ctx);
}
