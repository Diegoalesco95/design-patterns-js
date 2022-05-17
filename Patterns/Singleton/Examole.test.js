const SingletonTester = require('./Example');

describe('Singleton', () => {
	it('Should test with a real singleton', () => {
		const item = [1, 2, 3];
		expect(SingletonTester.isSingleton(() => item)).toBe(true);
	});

	it('Should test with a non-singleton', () => {
		let result = SingletonTester.isSingleton(() => [Math.random()]);
		expect(result).toBe(false);
	});
});
