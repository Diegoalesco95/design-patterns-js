/* 
	You are given a class called Sentence, which takes a
	string such as 'hello world'. You need to provide a method
	at(index) such that the method returns a flyweight that can be
	used to capitalize a particular word in the sentence.

	Typical use would be something like:  
	let s = new Sentence('alpha beta gamma');
	s.at(1).capitalize = true;
	expect(s.toString()) // alpha BETA gamma
*/

class WordToken {
	constructor(capitalize = false) {
		this.capitalize = capitalize;
	}
}

class Sentence {
	constructor(plainText) {
		this.words = plainText.split(' ');
		this.tokens = {};
	}

	at(index) {
		let wt = new WordToken();
		this.tokens[index] = wt;
		return this.tokens[index];
	}

	toString() {
		let buffer = [];
		for (let i = 0; i < this.words.length; ++i) {
			let w = this.words[i];
			if (this.tokens[i] && this.tokens[i].capitalize) w = w.toUpperCase();
			buffer.push(w);
		}
		return buffer.join(' ');
	}
}

module.exports = Sentence;
