// require necessary modules
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const fs = require('fs');

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
		choices: ['Circle', 'Triangle', 'Square'],
	},
	{
		type: 'input',
		message: 'Please enter the shape color (keyword or hexadecimal code)',
		name: 'shapeColor',
	},
];

inquirer
	.prompt(questions)
	.then((res) => {
		const shape = new shapes[res.shape](res.text, res.textColor, res.shape, res.shapeColor);

		fs.writeFile(`./examples/${res.shape}.svg`, shape.render(), (error) => console.error(error));
	});