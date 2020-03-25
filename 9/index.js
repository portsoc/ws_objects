'use strict';
/**
 * Move the classes to a separate file.
 */

import { Circle, Rectangle } from './classes.mjs';

// Create circle and rectangle objects
const rect = new Rectangle(100, 50, 100, 200, 'crimson');
const circle = new Circle(150, 300, 50, '#70A288');

// draw both elements
const ctx = document.querySelector('canvas').getContext('2d');
rect.draw(ctx);
circle.draw(ctx);

// move the objects
rect.moveBy(200, 100);
circle.moveBy(200, -200);
rect.fill = 'steelblue';

// redraw
rect.draw(ctx);
circle.draw(ctx);
