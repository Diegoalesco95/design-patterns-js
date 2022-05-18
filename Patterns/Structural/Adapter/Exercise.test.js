const { area, Square, SquareToRectangleAdapter } = require('./Exercise');

describe('adapter', function () {
	it('should adapt things, duh!', function () {
		let sq = new Square(11);
		let adapter = new SquareToRectangleAdapter(sq);
		expect(area(adapter)).toEqual(121);
	});
});
