class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `[${this._width}x${this._height}]`;
  }
}

let rect = new Rectangle(10, 20);

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }

  set width(value) {
    this._width = value;
    this._height = value;
  }

  set height(value) {
    this._width = value;
    this._height = value;
  }

}

let sq = new Square();
sq.width = 10;
console.log(sq.toString());