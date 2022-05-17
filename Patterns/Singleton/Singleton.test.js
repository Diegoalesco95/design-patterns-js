const {
	MyDatabase,
	SingletonRecordFinder,
	ConfigurableRecordFinder,
	DummyDatabase,
} = require('./Singleton');

describe('Singleton database', () => {
	it('Is a singleton', () => {
		const db1 = new MyDatabase();
		const db2 = new MyDatabase();
		expect(db1).toBe(db2);
	});

	it('Calculate total population', () => {
		let rf = new SingletonRecordFinder();

		let cities = ['New York', 'Tokyo'];

		let tp = rf.totalPolulation(cities);

		expect(tp).toEqual(34980000);
	});

	it('Calculate total population better', () => {
		let db = new DummyDatabase();
		let rf = new ConfigurableRecordFinder(db);
		expect(rf.totalPolulation(['alpha', 'gamma'])).toEqual(4);
	});
});
