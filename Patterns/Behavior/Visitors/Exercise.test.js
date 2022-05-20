const {
	AdditionExpression,
	ExpressionPrinter,
	Integer,
	MultiplicationExpression,
} = require('./Exercise');

describe('Visitor', () => {
	it('Simple addition', () => {
		let simple = new AdditionExpression(new Integer(2), new Integer(3));
		let ep = new ExpressionPrinter();
		ep.visitAddition(simple);
		expect(ep.toString()).toEqual('(2+3)');
	});

	it('Product of addition and value', () => {
		const expr = new MultiplicationExpression(
			new AdditionExpression(new Integer(2), new Integer(3)),
			new Integer(4),
		);

		let ep = new ExpressionPrinter();
		ep.visitMultiplication(expr);
		expect(ep.toString()).toEqual('(2+3)*4');
	});
});
