// Factory Coding Exercise

// You are given a class called Person.The person has two fields: id, and name.

// Please implement a PersonFactory that has a non - static createPerson() method
// that takes a person's name and returns a person initialized with this name and an id.

//  The id of the person should be set as a 0 - based index of the object any instance of PersonFactory has created.
// So, the first person any factory makes should have Id = 0, second Id = 1 and so on.


class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  constructor() {
    this.id = 0;
  }

  createPerson(name) {
    return new Person(this.id++, name);
  }
}

describe('factory', function () {
  it('exercise', function () {
    let pf = new PersonFactory();

    let p1 = pf.createPerson('Chris');
    expect(p1.name).toEqual('Chris');
    expect(p1.id).toEqual(0);

    let p2 = pf.createPerson('Sarah');
    expect(p2.id).toEqual(1);
  });
});

