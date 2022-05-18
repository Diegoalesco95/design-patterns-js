const CodeBuilder = require('./Exercise');

describe('Builder', function () {
	it('Should return empty class', function () {
		let cb = new CodeBuilder('Foo');
		expect(cb.toString()).toEqual('class Foo {\n}');
	});

	it('Should return Person class', function () {
		let cb = new CodeBuilder('Person');
		cb.addField('name').addField('age');
		expect(cb.toString()).toEqual(
			'class Person {\n' +
				'  constructor(name, age) {\n' +
				'    this.name = name;\n' +
				'    this.age = age;\n' +
				'  }\n' +
				'}',
		);
	});
});
