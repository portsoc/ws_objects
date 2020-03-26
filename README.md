# Objects

In this set of staged examples we show how we can use objects to structure our data and write better code for it.


## ToDo

1. create readme content - DONE, but will need a rewrite
2. generate diffs with a script (jack)
3. Delete this todo section


## Stage 0: A basic program

* `index.html` is a short web page that contains just aheading and an empty canvas.  This page does not change throughout the stages.
* `index.js` is a program that draws a (crimson) rectangle on the canvas.  The properties of the rectangle are held in five variables.  These properties are the _x_ & _y_ position, the _width_ & _height_, and the _colour_.
* This program does not use objects to structure the data.

## Stage 1: A second rectangle

* In this stage we add a (steel blue) rectangle.
* If we wanted to add more rectangles this might get a bit repetitive and laboured.
* There is repetition in both the implecit structure of the variables for each rectangle, and the code to draw the rectangles.

## Stage 2: A 'drawRect' function

* We simplify the program by creating a `drawRect` function, so that the repetition when drawing rectangles is removed.  We can now change the way _all_ rectangles are drawn by changing this one function.

## Stage 3: Using objects

* We can use JavaScript's familiar _object notation_ to create structural objects that contain properties.
* Objects allow us to simplify the property names.
* The `drawRect` function now takes just one parameter.

## Stage 4: Data encapsulation

* How do we specify the properties a rectangle will have?  Classes allow us to formalise the structure of our objects: they enable us to be clear about how our data shoudl be _encapsulated_.
* Here we create a `Rectangle` class.
* By convention class names begin with a capital letter.
* Classes have a `constructor` function that is called when a new _instance_ of the class is created.
* Each rectangle object (each instance of the `Rectangle` class) is now created using a single line of code.

## Stage 5: Function encapsulation

* The `drawRect` function is specific to rectangles, so it can become part of the `Rectangle` object.
* Each rectangle can then be asked to draw itself.

## Stage 6: A Circle

* We add a `Circle` class to complement our `Rectangle`.
* Like rectangles, circles have _x_ & _y_ positions and a _colour_, but no _width_ or _height_: instead they have radius, _r_.
* Having define a new `Circle` class we create and draw two instances.
* The `draw` function is rewritten so that instances of `Circle` can draw themselves.
* There is some duplication in the properties of these classes.  This is addressed in the next stage.

## Stage 7: Superclasses and subclasses

* We refactor the `Rectangle` and `Circle` classes, taking their common properties and moving them to a new class called `Shape`.
* The `Shape` class contains properties that are common to all shapes.
* `Rectangle` and `Circle` now contain only the code required that distinguishes them from a basic shape.
* `Rectangle` and `Circle` are now subclasses of the `Shape` superclass.
* Notice that in the constructor of a subclass, its superclass constructor can be called using the `super()` function - this reduces duplication of code.

## Stage 8: A file for classes

* We can move class definition to a separate file (or files).
* We create a `classes.mjs` file.  The `mjs` extension is a convention used for JavaScript modules.
* JavaScript modules `export` functions and variables.  The `import` keyword is used to make these available in other programs.
* The `script` element must specify that it's of `type=module`

## Stage 9: An array of shapes

* TBA

## Stage 10: Inheriting functions from superclasses

* TBA

## Stage 11: Experiment

* There is no stage 11.  Add your own experiments.
