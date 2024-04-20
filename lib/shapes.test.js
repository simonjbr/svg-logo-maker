// import shapes classes for testing
const shapes = require('./shapes');

// test for each shape class
describe('Shape classes', () => {

	// Circle class
	describe('Circle', () => {
		describe('Circle.render()', () => {
			it('should render svg code for a blue circle', () => {
				const circle = new shapes.Circle();
				circle.setColor('blue');
				expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
			});
		});
	});

	// Triangle class
	describe('Triangle', () => {
		describe('Triangle.render()', () => {
			it('should render svg code for a green triangle', () => {
				const triangle = new shapes.Triangle();
				triangle.setColor('green');
				expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
			});
		});
	});

	// Square class
	describe('Square', () => {
		describe('Square.render()', () => {
			it('should render svg code for a red square', () => {
				const square = new shapes.Square();
				square.setColor('red');
				expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
			});
		});
	});
});