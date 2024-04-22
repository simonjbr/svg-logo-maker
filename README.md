# svg-logo-maker

[![License: MIT](https://shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The svg-logo-maker is an application that creates custom .svg logos with the use of the Inquirer command line interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

In order to run the application the user must have [node.js](https://nodejs.org/en/download/current) installed. Then the user must install dependencies (Inquirer@8.2.4) by running `npm i` on the command line in the root directory of the repository.

## Usage

To start the application the user must run `npm start`.

The user will then be prompted to enter the following information:
- The `text` for the logo
- The `text color`
- Which `shape` they would like 
- The `shape color`

Following this, the data will be injected in to a template and written to the file `/examples/{Shape}.svg`.

Find the video walkthrough here:
[Video Walkthrough](https://drive.google.com/file/d/1e4FuW-KXVQMYBnUDP5IQTcJokNQrX40x/view)

Find the example .svg files here:
- [Circle.svg](./examples/Circle.svg)
- [Square.svg](./examples/Square.svg)
- [Triangle.svg](./examples/Triangle.svg)

## Credits

[simonjbr](https://github.com/simonjbr)

[Node.js](https://nodejs.org/en)

[Inquirer](https://www.npmjs.com/package/inquirer)

[Jest](https://www.npmjs.com/package/jest)

## License

Please refer to [MIT license](./LICENSE) information in the repository.