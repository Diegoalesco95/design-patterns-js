let Color = Object.freeze({
	RED: 'red',
	GREEN: 'green',
	BLUE: 'blue',
});

let Size = Object.freeze({
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
});

class Product {
	constructor(name, color, size) {
		this.name = name;
		this.color = color;
		this.size = size;
	}
}

// ❌ Open for extension, closed for modification

class ProductFilter {
	filterByColor(products, color) {
		return products.filter((p) => p.color === color);
	}

	filterBySize(products, size) {
		return products.filter((p) => p.size === size);
	}

	filterBySizeAndColor(products, size, color) {
		return products.filter((p) => p.size === size && p.color === color);
	}
}

let apple = new Product('Apple', Color.GREEN, Size.SMALL);
let tree = new Product('Tree', Color.GREEN, Size.LARGE);
let house = new Product('House', Color.BLUE, Size.LARGE);

let products = [apple, tree, house];

let pf = new ProductFilter();

console.log('✅ Green Products (old)');
pf.filterByColor(products, Color.GREEN).forEach((p, index) =>
	console.log(`${index + 1}: ${p.name}`),
);

// ✅ Better inplementation

class ColorSpecification {
	constructor(color) {
		this.color = color;
	}

	isSatisfied(item) {
		return item.color === this.color;
	}
}

class SizeSpecification {
	constructor(size) {
		this.size = size;
	}

	isSatisfied(item) {
		return item.size === this.size;
	}
}

class AndSpecification {
	constructor(...specs) {
		this.specs = specs;
	}

	isSatisfied(item) {
		return this.specs.every((spec) => spec.isSatisfied(item));
	}
}

class OrSpecification {
	constructor(...specs) {
		this.specs = specs;
	}

	isSatisfied(item) {
		return this.specs.some((spec) => spec.isSatisfied(item));
	}
}

class BetteFilter {
	filter(items, spec) {
		return items.filter((item) => spec.isSatisfied(item));
	}
}

let bf = new BetteFilter();
let greenSpec = new ColorSpecification(Color.GREEN);
let blueSpec = new ColorSpecification(Color.BLUE);
let largeSpec = new SizeSpecification(Size.LARGE);
let largeAndGreenSpec = new AndSpecification(greenSpec, largeSpec);
let largeOrBlueSpec = new OrSpecification(blueSpec, largeSpec);

console.log('✅ Green Products (new)');
bf.filter(products, greenSpec).forEach((p, index) =>
	console.log(`${index + 1}: ${p.name}`),
);

console.log('✅ Large and green Products (new)');
bf.filter(products, largeAndGreenSpec).forEach((p, index) =>
	console.log(`${index + 1}: ${p.name}`),
);

console.log('✅ Large or blue Products (new)');
bf.filter(products, largeOrBlueSpec).forEach((p, index) =>
	console.log(`${index + 1}: ${p.name}`),
);
