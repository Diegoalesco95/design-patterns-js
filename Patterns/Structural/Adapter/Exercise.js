/* 
  Yue are given a clas called Squared and a function calculateArea() which calculates
  the area of a fiven rectangle.

  In order to use Square in calculate_area, instead of augmenting it with width and height
  members, please implement the SquareToRectangleAdapter class. This adapter takes a square
  and adapts it in such a way that it can be used as an argument to calculateArea().
*/

class Square {
	constructor(side) {
		this.side = side;
	}
}

function area(rectangle) {
	return rectangle._width * rectangle._height;
}

// build an adapter called SquareToRectangleAdapter
// s.t. we could call
class SquareToRectangleAdapter {
	constructor(square) {
		this.square = square;
	}

	get _width() {
		return this.square.side;
	}

	get _height() {
		return this.square.side;
	}
}

module.exports = {
	area,
	Square,
	SquareToRectangleAdapter,
};
