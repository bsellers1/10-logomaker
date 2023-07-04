class SVG {
    constructor(){
        this.svgText = "";
        this.svgShape = "";
        this.svgTextColor = "";
        this.svgShapeColor = "";
    }
    setText(text, color) {
        if (text.length >= 3) {
            console.log("Text must not exceed 3 characters.");
            return;
        }
        this.svgText = `<text x="150" y="125" fill="${color}" text-anchor="middle">${text}</text>`;
    }
}