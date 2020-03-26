'use strict';
/**
 * JavaScript gives us syntax for private fields;
 * the only changes in this stage are in `classes.mjs`.
 */

import { Circle, Rectangle } from './classes.mjs';

// create circle and rectangle objects
const shapes = [
  new Rectangle(100, 50, 100, 200, 'crimson'),
  new Rectangle(300, 150, 100, 200, 'steelblue'),
  new Circle(150, 350, 50, 'crimson'),
  new Circle(350, 450, 50, 'steelblue'),
];

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

for (const s of shapes) {
  s.draw(ctx);
  console.log(s.area);
}
