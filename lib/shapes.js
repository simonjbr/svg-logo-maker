// parent class for all shapes
class Shape {
	constructor(text, textColor, shape, shapeColor) {
		this.text = text;
		this.textColor = textColor;
		this.shape = shape;
		this.shapeColor = shapeColor;
	}

	renderShape() {}

	render() {
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

	${this.renderShape()}
	
	<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
	
</svg>`;
	}
}

// Circle class inherits from Shape
class Circle extends Shape {
	constructor(text, textColor, shape, shapeColor) {
		super(text, textColor, shape, shapeColor);
	}

	// override renderShape method of Shape
	renderShape() {
		return `<${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
	}
}

// Triangle class inherits from Shape
class Triangle extends Shape {
	constructor(text, textColor, shape, shapeColor) {
		super(text, textColor, shape, shapeColor);
	}

	// override renderShape method of Shape
	renderShape() {
		return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
	}
}

// export classes
module.exports = {
	Shape,
	Circle,
	Triangle,
}