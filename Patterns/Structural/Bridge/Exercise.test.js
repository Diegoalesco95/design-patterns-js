const {
	Square,
	RasterRenderer,
	VectorRenderer,
	Triangle,
} = require('./Exercise');

describe('Bridge', () => {
	it('Should render vector square', () => {
		let sq = new Square(new VectorRenderer());
		expect(sq.toString()).toEqual('Drawing square as lines');
	});

	it('Should render raster triangle', () => {
		let sq = new Triangle(new RasterRenderer());
		expect(sq.toString()).toEqual('Drawing triangle as pixels');
	});
});
