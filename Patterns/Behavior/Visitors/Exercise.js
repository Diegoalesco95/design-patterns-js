/* 
  You are asked to implement a visitor called/ Expressionprinter for printina different matfe matical expressions. The range of expressions
  covers addition and multiplication - please put round brackets around addition operations (but not multiplication ones)! Also, please avoid any
  blank spaces in output.

  Example:

  - Input: AdditionExpresion(Value(2), Value(3))
  - Output: (2+3) 
*/

class Integer {
	constructor(value) {
		this.value = value;
	}

	accept(visitor) {
		visitor.visitValue(this);
	}
}

class BinaryExpression {
	constructor(lhs, rhs) {
		this.lhs = lhs;
		this.rhs = rhs;
	}
}

class AdditionExpression extends BinaryExpression {
	constructor(lhs, rhs) {
		super(lhs, rhs);
	}

	accept(visitor) {
		visitor.visitAddition(this);
	}
}

class MultiplicationExpression extends BinaryExpression {
	constructor(lhs, rhs) {
		super(lhs, rhs);
	}

	accept(visitor) {
		visitor.visitMultiplication(this);
	}
}

class ExpressionPrinter {
	constructor() {
		this._buffer = [];
	}

	visitValue(value) {
		this._buffer.push(value.value);
	}

	visitAddition(ae) {
		this._buffer.push('(');
		ae.lhs.accept(this);
		this._buffer.push('+');
		ae.rhs.accept(this);
		this._buffer.push(')');
	}

	visitMultiplication(me) {
		me.lhs.accept(this);
		this._buffer.push('*');
		me.rhs.accept(this);
	}

	toString() {
		return this._buffer.join('');
	}
}

module.exports = {
	AdditionExpression,
	ExpressionPrinter,
	Integer,
	MultiplicationExpression,
};
