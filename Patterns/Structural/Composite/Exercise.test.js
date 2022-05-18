const { ManyValues, SingleValue, sum } = require('./Exercise');

describe('Composite', function () {
	it('Should sum up different objects', function () {
		let singleValue = new SingleValue(11);
		let otherValues = new ManyValues();
		otherValues.push(22);
		otherValues.push(33);
		expect(sum([singleValue, otherValues])).toEqual(66);
	});
});
