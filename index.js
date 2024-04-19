// require necessary modules
const inquirer = require('inquirer');
const { Shape, Circle } = require('./lib/shapes');

// array of questions to pass to inquirer
const questions = [
	{
		type: 'input',
		message: 'Please enter the text for your logo (up to three characters)',
		name: 'text',
	},
	{
		type: 'input',
		message: 'Please enter the text color (keyword or hexadecimal code)',
		name: 'textColor',
	},
	{
		type: 'list',
		message: 'Please choose the shape:',
		name: 'shape',
		choices: ['circle', 'triangle', 'square'],
	},
	{
		type: 'input',
		message: 'Please enter the shape color (keyword or hexadecimal code)',
		name: 'shapeColor',
	},
];

const circle = new Circle('CIR', 'white', 'circle', 'blue');
console.log(circle.render());