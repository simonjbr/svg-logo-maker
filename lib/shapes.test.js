// import shapes classes for testing
const shapes = require('./shapes');

// test for each shape class
describe('Shape classes', () => {
	describe('Circle', () => {
		describe('Circle.render()', () => {
			it('should render svg code for a blue circle', () => {
				const circle = new shapes.Circle();
				circle.setColor('blue');
				expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
			});
		});
	});
});