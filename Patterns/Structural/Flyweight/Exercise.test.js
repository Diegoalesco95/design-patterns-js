const Sentence = require('./Exercise');

describe('Flyweight', () => {
	it('Should let us capitalize words', () => {
		let s = new Sentence('alpha beta gamma');
		s.at(1).capitalize = true;
		expect(s.toString()).toEqual('alpha BETA gamma');
	});
});
