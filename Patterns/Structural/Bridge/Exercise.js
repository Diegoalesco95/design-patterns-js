/* 
  You are given an example of an inheritance hierachy which results in Cartesian-product duplication.
  Please refactor this hierarchy, giving the base class Shape a constructor that takes a renderer,
  whose expected interface is:

  class <SomeRenderer> {
    get whatToRenderAs() {
      //  Todo
    }
  }

  There's no need to implement the type above ( due to duct typing), but I do want you implement
  classes VectorRenderer and RasterRenderer. Each inheritor oh the Shape class should have a 
  constructor that takes a Renderer such that, subsequently, each constructed object's
  toString() operates correctly, for example:

  new Triangle(new VectorRenderer()) # Returns 'Drawing triangle as pixels'

*/

// class Shape {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// class Triangle extends Shape {
// 	constructor() {
// 		super('triangle');
// 	}
// }

// class Square extends Shape {
// 	constructor() {
// 		super('square');
// 	}
// }

// class VectorSquare extends Square {
// 	toString() {
// 		return `Drawing square as lines`;
// 	}
// }

// class RasterSquare extends Square {
// 	toString() {
// 		return `Drawing square as pixels`;
// 	}
// }

// imagine VectorTriangle and RasterTriangle are here too

class Shape {
	constructor(renderer, name = null) {
		this.renderer = renderer;
		this.name = name;
	}

	toString() {
		return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
	}
}

class Triangle extends Shape {
	constructor(renderer) {
		super(renderer, 'triangle');
	}
}

class Square extends Shape {
	constructor(renderer) {
		super(renderer, 'square');
	}
}

class RasterRenderer {
	get whatToRenderAs() {
		return 'pixels';
	}
}

class VectorRenderer {
	get whatToRenderAs() {
		return 'lines';
	}
}

module.exports = {
	Square,
	RasterRenderer,
	VectorRenderer,
	Triangle,
};
