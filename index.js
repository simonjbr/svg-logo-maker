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

// command line interface to extract parameters for logo
inquirer
	.prompt(questions)
	.then((res) => {

		// construct new shape
		const shape = new shapes[res.shape]();
		// set the fill color for the shape
		shape.setColor(res.shapeColor);

		// create template literal for the svg file
		const svg =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
	${shape.render()}
	<text x="150" y="125" font-size="60" text-anchor="middle" fill="${res.textColor}">${res.text}</text>
</svg>`

		// write svg template to a .svg file
		fs.writeFile(`./examples/logo.svg`, svg, (error) => console.error(error));
	})
	.then(() => {
		console.log('Generated logo.svg');
	});