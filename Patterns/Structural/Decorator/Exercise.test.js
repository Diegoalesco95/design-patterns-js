const Dragon = require('./Exercise');

describe('decorator', function () {
	it('Should let dragon fly or crawl', function () {
		let dragon = new Dragon();

		expect(dragon.fly()).toEqual('flying');
		expect(dragon.crawl()).toEqual('too young');

		dragon.age = 20;

		expect(dragon.fly()).toEqual('too old');
		expect(dragon.crawl()).toEqual('crawling');
	});
});
