const { Circle, Square, Triangle } = require("./shapes");

class SVG {
    constructor() {
        this.svgText = "";
        this.svgShape = "";
        this.svgTextColor = "";
        this.svgShapeColor = "";
    }

    setColor(color) {
        this.svgTextColor = color;
    }

    setShape(shape) {
        this.svgShape = shape.render();
    }

    setText(text, color) {
        if (text.length > 3) {
            console.log("Text must be 3 characters or less");
        }
        this.svgText = `<text x="150" y="125" fill="${color}" text-anchor="middle">${text}</text>`;
    }
    render() {
        return `<svg height="250" width="300" xmlns="http://www.w3.org/2000/svg">${this.svgShape}${this.svgText}</svg>`;
    }
}

module.exports = SVG;