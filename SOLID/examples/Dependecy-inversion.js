let Relationship = Object.freeze({
  PARENT: 0,
  CHILD: 1,
  NONE: 2
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser") {
      throw new Error("RelationshipBrowser is an abstract class");
    }
  }

  findAllChildrenOf(name) {
    // ...
  }
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.PARENT,
      to: child
    });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter(relationship => relationship.from.name === name && relationship.type === Relationship.PARENT)
      .map(relationship => relationship.to);
  }
}

// HIGHT-LEVEL MODULE
class Research {
  // Abstract classes/interfaces
  constructor(browser) {
    for (let p of browser.findAllChildrenOf("John")) {
      console.log(`John has a child called ${p.name}`);
    }
  }
}


let parent = new Person("John");
let child = new Person("Mary");
let child2 = new Person("Bob");

let rels = new Relationships();
rels.addParentAndChild(parent, child);
rels.addParentAndChild(parent, child2);

new Research(rels);