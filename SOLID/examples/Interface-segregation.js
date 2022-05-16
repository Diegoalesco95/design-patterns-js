
class Transport {
  constructor(environment, year) {
    this.environment = environment;
    this.year = year;
  }

  getEnvironment() {
    return this.environment;
  }

  getYear() {
    return this.year;
  }
}

class Car extends Transport {
  constructor(environment, model, year) {
    super(environment, year);
    this.model = model;
  }

  getModel() {
    return this.model;
  }
}

class Plane extends Transport {
  constructor(environment, capacity, year) {
    super(environment, year);
    this.capacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }
}


const newCar = new Car('urban', 'BMW', '2020');
const newPlane = new Plane('suburban', '7', '2020');

console.log('🚗');
console.table(newCar);

console.log('✈️');
console.table(newPlane);
