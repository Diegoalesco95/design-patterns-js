const { Game, Goblin, GoblinKing } = require('./Exercise');

describe('Chain of responsibility', () => {
	it('Should handle many goblins', () => {
		let game = new Game();
		let goblin = new Goblin(game);

		expect(goblin.attack).toEqual(1);
		expect(goblin.defense).toEqual(1);

		let goblin2 = new Goblin(game);

		expect(goblin.attack).toEqual(1);
		expect(goblin.defense).toEqual(2);

		let goblin3 = new GoblinKing(game);

		expect(goblin.attack).toEqual(2);
		expect(goblin.defense).toEqual(3);
	});
});
