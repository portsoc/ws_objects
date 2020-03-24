"use strict";
/**
 * Since functions are objects, objects can themselves
 * contain functions as properties.
 *
 * Here, a scale function is added to the rectangle
 * object.  It operates on its own properties by using
 * the `this` keyword.
 *
 * The scale function is called twice, scaling by
 * two and five, so that the rectangle is ten times
 * its original size.
 */

// create an object using JSON
const rectangle = {
  width: 16,
  height: 9,
  scale: function(s) {
    this.width *= s;
    this.height *= s;
  }
}

console.log(rectangle);
rectangle.scale(5);
console.log(rectangle);
rectangle.scale(2);
console.log(rectangle);
