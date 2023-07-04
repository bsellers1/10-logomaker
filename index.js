const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./assets/svg');
const { Circle, Square, Triangle } = require("./assets/shapes");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for your logo'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Choose a color for your text'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What is your shape?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose a color for your shape'
        }
    ])
    .then(function ({ text, textColor, shape, shapeColor }) {
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setColor(shapeColor);

        switch (shape) {
            case 'circle':
                const circle = new Circle();
                circle.setColor(shapeColor);
                svg.setShape(circle);
                break;
            case 'triangle':
                const triangle = new Triangle();
                triangle.setColor(shapeColor);
                svg.setShape(triangle);
                break;
            case 'square':
                const square = new Square();
                square.setColor(shapeColor);
                svg.setShape(square);
                break;
        }

        fs.writeFile('logo.svg', svg.render(), function (err) {
            if (err) throw err;
            console.log('Your logo has been created in the logo.svg file!');
        });
    });