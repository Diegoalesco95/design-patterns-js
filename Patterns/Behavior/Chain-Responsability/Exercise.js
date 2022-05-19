/* 
  You are given a game scenario with classes Goblin and GoblinKing.
  Please implement the following rules:

  - A goblin has base 1 attack/1 defense (1/1), a goblin king is 3/3.
	- When the Goblin King is in play, every other goblin gets +1 Attack.
  - Goblins get + 1 to Defense for every other Goblin in play(a GoblinKing is a Goblin!).

  Example:
  
  - Suppose you have 3 ordinary goblins in play. Each one is a 1/3 (1/1 + 0/2 defense bonus).
	- A goblin king comes into play. Now every goblin is a 2/4 (1/1 + 0/3 defense bonus from each other + 1/0 from goblin king)
  
  The state of all the goblins has to be consistent as goblins are added and removed from the game.
  
  Here is an example of the kind of test that will be run on the system:

  let game = new Game();
  let goblin = new Goblin(game);
  expect(goblin.attack).toEqual(1);
  expect(goblin.defense).toEqual(1);

  Note: creature removal (unsubscription)does not need to be implemented.
*/

let WhatToQuery = Object.freeze({
	attack: 1,
	defense: 2,
});

class Query {
	constructor(whatToQuery, result) {
		this.whatToQuery = whatToQuery;
		this.result = result;
	}
}

class Goblin {
	constructor(game, baseAttack = 1, baseDefense = 1) {
		// todo
		this.game = game;
		game.creatures.push(this);

		this._baseAttack = baseAttack;
		this._baseDefense = baseDefense;
	}

	handleQuery(source, query) {
		if (source === this) {
			switch (query.whatToQuery) {
				case WhatToQuery.attack:
					query.result += this._baseAttack;
					break;
				case WhatToQuery.defense:
					query.result += this._baseDefense;
					break;
			}
		} else if (query.whatToQuery === WhatToQuery.defense) {
			query.result += 1;
		}
	}

	get defense() {
		let q = new Query(WhatToQuery.defense, 0);
		for (let c of this.game.creatures) {
			c.handleQuery(this, q);
		}
		return q.result;
	}

	get attack() {
		let q = new Query(WhatToQuery.attack, 0);
		for (let c of this.game.creatures) {
			c.handleQuery(this, q);
		}
		return q.result;
	}
}

class GoblinKing extends Goblin {
	constructor(game) {
		// todo
		super(game, 3, 3);
	}

	handleQuery(source, query) {
		if (source !== this && query.whatToQuery === WhatToQuery.attack) {
			query.result += 1;
		}

		super.handleQuery(source, query);
	}
}

class Game {
	// todo
	constructor() {
		this.creatures = [];
	}
}

module.exports = {
	Goblin,
	GoblinKing,
	Game,
};
