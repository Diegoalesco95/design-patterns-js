/* 
  Consider the code presented below. We have two classes called SingleValue and ManyValues.

  SingleValue stores just one numeric value (initialized in the constructor),
  but ManyValues can store either numeric values or SingleValue objects
  (assume it implements a push() method for adding items).

  You are asked to write a function called sum that takes an array of items
  (any item can be either SingleValue or ManyValues).
*/

class SingleValue {
	constructor(value) {
		this.value = value;
	}

	[Symbol.iterator]() {
		let returned = false;
		return {
			next: () => ({
				value: this.value,
				done: returned++,
			}),
		};
	}
}

class ManyValues extends Array {}

let sum = function (containers) {
	let sum = 0;
	for (let container of containers) {
		for (let value of container) {
			sum += value;
		}
	}
	return sum;
};

module.exports = {
	ManyValues,
	SingleValue,
	sum,
};
