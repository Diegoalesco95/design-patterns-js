class ChiefExecutiveOfficer {
	get name() {
		return ChiefExecutiveOfficer._name;
	}

	set name(value) {
		ChiefExecutiveOfficer._name = value;
	}

	get age() {
		return ChiefExecutiveOfficer._age;
	}

	set age(value) {
		ChiefExecutiveOfficer._age = value;
	}

	toString() {
		return `CEO's name is ${this.name} and he is ${this.age} years old`;
	}
}

ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

const ceo = new ChiefExecutiveOfficer();
ceo.name = 'Giovanny Romaguera';
ceo.age = 52;

const ceo2 = new ChiefExecutiveOfficer();
ceo2.name = 'Felipe Dach';
ceo2.age = 65;

console.log(ceo.toString());
console.log(ceo2.toString());
