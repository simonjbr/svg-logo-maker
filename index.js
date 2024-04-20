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
		const shape = new shapes[res.shape]();
		shape.setColor(res.shapeColor);

		const svg =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
	${shape.render()}
	<text x="150" y="125" font-size="60" text-anchor="middle" fill="${res.textColor}">${res.text}</text>
</svg>`

		fs.writeFile(`./examples/${res.shape}.svg`, svg, (error) => console.error(error));
	});