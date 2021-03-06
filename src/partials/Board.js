import { SVG_NS } from "../settings";

export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    render(svg) {

    let rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "fill", "#353535");

    let line = document.createElementNS(SVG_NS, "line");
        line.setAttributeNS(null, "x1", (this.width / 2));
        line.setAttributeNS(null, "y1", 0);
        line.setAttributeNS(null, "x2", (this.width / 2));
        line.setAttributeNS(null, "y2", this.height);
        line.setAttributeNS(null, "stroke", "grey");
        line.setAttributeNS(null, "stroke-dasharray", "12, 10");
        line.setAttributeNS(null, "stroke-width", 4);

    let circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "cx", (this.width / 2));
        circle.setAttributeNS(null, "cy", (this.height / 2));
        circle.setAttributeNS(null, "r", 40);
        circle.setAttributeNS(null, "fill", "grey");
        // circle.setAttributeNS(null, "stroke", "grey");
        // circle.setAttributeNS(null, "stroke-dasharray", "10, 11");
        // circle.setAttributeNS(null, "stroke-width", 2);

    svg.appendChild(rect);
    svg.appendChild(line);
    svg.appendChild(circle);
    }
}