const {
	Creature,
	PermanentCardDamageGame,
	TemporaryCardDamageGame,
} = require('./Exercise');

describe('Template Method', () => {
	it('Impasse test', () => {
		let c1 = new Creature(1, 2);
		let c2 = new Creature(1, 2);
		let game = new TemporaryCardDamageGame([c1, c2]);
		expect(game.combat(0, 1)).toEqual(-1);
		expect(game.combat(0, 1)).toEqual(-1);
	});

	it('Temporary murder test', () => {
		let c1 = new Creature(1, 1);
		let c2 = new Creature(2, 2);
		let game = new TemporaryCardDamageGame([c1, c2]);
		expect(game.combat(0, 1)).toEqual(1);
	});

	it('Double murder test', () => {
		let c1 = new Creature(2, 2);
		let c2 = new Creature(2, 2);
		let game = new TemporaryCardDamageGame([c1, c2]);
		expect(game.combat(0, 1)).toEqual(-1);
	});

	it('Permanent damage death test', () => {
		let c1 = new Creature(1, 2);
		let c2 = new Creature(1, 3);
		let game = new PermanentCardDamageGame([c1, c2]);
		expect(game.combat(0, 1)).toEqual(-1);
		expect(game.combat(0, 1)).toEqual(1);
	});
});
