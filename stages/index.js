'use strict';
/**
 * Getters and setters can perform custom
 * code when a property is read or written.
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
  s.x = 50;
  s.draw(ctx);

  // the following line would throw an error because 'hi' is not a number:
  // s.x = 'hi';
}
