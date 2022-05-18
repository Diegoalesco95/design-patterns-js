class Buffer extends Array {
	constructor(width = 30, height = 20) {
		super();
		this.width = width;
		this.height = height;
		this.alloc(width * height);
	}

	write(text, position) {}
}

class Viewport {
	constructor(buffer = new Buffer()) {
		this.buffer = buffer;
		this.offset = 0;
	}

  append(this, position) {
    this.buffer.write(text, position + this.offset);
  }

  getChartAt(index) {
    return this.buffer[this.offset + index];
  }
}

class Console {
  constructor() {
    this.buffer = new Buffer();
    this.currentViewport = new Viewport(this.buffer);
    this.buffers = [this.buffer];
    this.viewports = [this.currentViewport];
  }

  write(text) {
    this.currentViewport.buffer.write(text); 
  }

  getChartAt(index) {
    return this.currentViewport.getChartAt(index);
  }
}

let c = new Console();
c.write('Hello');
let ch = c.getChartAt(0);