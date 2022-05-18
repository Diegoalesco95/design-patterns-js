const fs = require('fs');
const path = require('path');

// low-level module
class MyDatabase {
	constructor() {
		const instance = this.constructor.instance;
		if (instance) {
			return instance;
		}
		this.constructor.instance = this;

		console.log('Initializing database');
		this.capitals = {};

		let lines = fs
			.readFileSync(path.join(__dirname, 'capitals.txt'))
			.toString()
			.split('\n');

		for (let i = 0; i < lines.length / 2; i += 1) {
			this.capitals[lines[2 * i]] = parseInt(lines[2 * i + 1]);
		}
	}

	getPopulation(city) {
		return this.capitals[city];
	}
}

//  high-level module

class SingletonRecordFinder {
	totalPolulation(cities) {
		return cities
			.map((city) => new MyDatabase().getPopulation(city))
			.reduce((x, y) => x + y);
	}
}

class ConfigurableRecordFinder {
	constructor(database) {
		this.database = database;
	}

	totalPolulation(cities) {
		return cities
			.map((city) => this.database.getPopulation(city))
			.reduce((x, y) => x + y);
	}
}

class DummyDatabase {
	constructor() {
		this.capitals = {
			alpha: 1,
			beta: 2,
			gamma: 3,
		};
	}

	getPopulation(city) {
		return this.capitals[city];
	}
}

module.exports = {
	ConfigurableRecordFinder,
	DummyDatabase,
	MyDatabase,
	SingletonRecordFinder,
};
