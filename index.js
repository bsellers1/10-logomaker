const inquirer = require('inquirer');
const fs = require('fs');
const svg = require('./assets/svg');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What is your text? 3 Characters or less.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What is your text color?'
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
            message: 'What is your shape color?'
        }
    ])
    .then(function ({ text, textColor, shape, shapeColor }) {
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape, shapeColor);
        svg.setShapeColor(shapeColor);
        fs.writeFile('./logo.svg', svg.render());
        console.log('Success! Check out logo.svg to see your logo.');
        const { exec } = require('child_process');
        exec('start chrome logo.svg');
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log('Something else went wrong');
        }
    });