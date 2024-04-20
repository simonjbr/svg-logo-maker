// parent class for all shapes
class Shape {
	constructor() {}

	setColor(shapeColor) {
		this.shapeColor = shapeColor;
	}

	render() {}
}

// Circle class inherits from Shape
class Circle extends Shape {
	constructor() {
		super();
	}

	// override render method of Shape
	render() {
		return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
	}
}

// Triangle class inherits from Shape
class Triangle extends Shape {
	constructor() {
		super();
	}

	// override render method of Shape
	render() {
		return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
	}
}

// Square class inherits from Shape
class Square extends Shape {
	constructor() {
		super();
	}

	// override render method of Shape
	render() {
		return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`
	}
}

// export classes
module.exports = {
	Shape,
	Circle,
	Triangle,
	Square,
}