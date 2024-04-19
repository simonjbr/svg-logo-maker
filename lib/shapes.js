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
