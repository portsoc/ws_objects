'use strict';
/**
 * We can also _encapsulate_ the code for how shapes
 * are drawn.  So here we call a draw function on each
 * shape, passing it the graphics context that will
 * be drawn upon.  To each `class` definition is added * then contain
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
rect.colour = 'steelblue';

// redraw
rect.draw(ctx);
circle.draw(ctx);
