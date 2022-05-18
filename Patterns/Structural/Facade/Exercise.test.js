const MagicSquareGenerator = require('./Exercise');

describe('Facade', () => {
	it('Should generate good magic squares', () => {
		let gen = new MagicSquareGenerator();
		let square = gen.generate(3);

		let adder = (p, c) => {
			return p + c;
		};

		let first = square[0].reduce(adder);

		for (let row of square) expect(row.reduce(adder)).toEqual(first);
	});
});
