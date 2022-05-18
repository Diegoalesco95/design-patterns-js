const aggregation = require('./helpers/aggregation');

class Connectable {
	connecTo(other) {
		for (let from of this) {
			for (let to of other) {
				from.out.push(to);
				to.in.push(from);
			}
		}
	}
}

class Neuron extends Connectable {
	constructor() {
		super();
		this.in = [];
		this.out = [];
	}

	toString() {
		return `Neuron ${this.in.length} -> ${this.out.length}`;
	}

	[Symbol.iterator]() {
		let returned = false;
		return {
			next: () => ({
				value: this,
				done: returned++,
			}),
		};
	}
}

class NeuronLayer extends aggregation(Array, Connectable) {
	constructor(count) {
		super();
		while (count-- > 0) this.push(new Neuron());
	}

	toString() {
		return `Layer with ${this.length} neurons`;
	}
}

let n1 = new Neuron();
let n2 = new Neuron();

let layer1 = new NeuronLayer(3);
let layer2 = new NeuronLayer(4);

n1.connecTo(n2);
n1.connecTo(layer2);

layer2.connecTo(n1);
layer1.connecTo(layer2);

console.log(n1.toString());
console.log(n2.toString());

console.log(layer1.toString());
console.log(layer2.toString());
