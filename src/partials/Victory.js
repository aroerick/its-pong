import { SVG_NS } from "../settings";

export default class Victory {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    
    render(svg, player) {

    let rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "fill", "grey");

    let textTop = document.createElementNS(SVG_NS, "text");
        textTop.setAttributeNS(null, "x", 100);
        textTop.setAttributeNS(null, "y", 100);
        textTop.setAttributeNS(null, "font-size", 50);
        textTop.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
        textTop.setAttributeNS(null, "fill", "purple");
        textTop.textContent = player;

    let textBot = document.createElementNS(SVG_NS, "text");
        textBot.setAttributeNS(null, "x", 0);
        textBot.setAttributeNS(null, "y", 175);
        textBot.setAttributeNS(null, "font-size", 100);
        textBot.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
        textBot.setAttributeNS(null, "fill", "white");
        textBot.textContent = "VICTORY!";


    let lineA = document.createElementNS(SVG_NS, "line");
        lineA.setAttributeNS(null, "x1", 0);
        lineA.setAttributeNS(null, "y1", (this.height / 6));
        lineA.setAttributeNS(null, "x2", this.width);
        lineA.setAttributeNS(null, "y2", (this.height / 6));
        lineA.setAttributeNS(null, "stroke", "white");
        lineA.setAttributeNS(null, "stroke-dasharray", "12, 10");
        lineA.setAttributeNS(null, "stroke-width", 4);

        let lineB = document.createElementNS(SVG_NS, "line");
        lineB.setAttributeNS(null, "x1", 0);
        lineB.setAttributeNS(null, "y1", ((this.height / 6) * 5));
        lineB.setAttributeNS(null, "x2", this.width);
        lineB.setAttributeNS(null, "y2", ((this.height / 6) * 5));
        lineB.setAttributeNS(null, "stroke", "white");
        lineB.setAttributeNS(null, "stroke-dasharray", "12, 10");
        lineB.setAttributeNS(null, "stroke-width", 4);

        svg.appendChild(rect);
        svg.appendChild(lineA);
        svg.appendChild(lineB);
        svg.appendChild(textTop);
        svg.appendChild(textBot);
    }
}