import { SVG_NS } from "../settings";

export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
      }
      render() {

		let rect = document.createElementNS(SVG_NS, "rect");
		rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "fill", "#353535");

        let line = document.createElementNS(SVG_NS, "line");
		rect.setAttributeNS(null, "x1", (this.width / 2));
        rect.setAttributeNS(null, "y1", 0);
        rect.setAttributeNS(null, "x2", (this.width / 2));
        rect.setAttributeNS(null, "y2", this.height);
        rect.setAttributeNS(null, "stroke", "white");
        rect.setAttributeNS(null, "stroke-dasharray", "10, 10");
        rect.setAttributeNS(null, "stroke-width", 2);

        let circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "cx", (this.width / 2));
        circle.setAttributeNS(null, "cy", (this.height / 2));
        circle.setAttributeNS(null, "r", 40);
        circle.setAttributeNS(null, "fill", "darkred");
        circle.setAttributeNS(null, "stroke", "white");
        circle.setAttributeNS(null, "stroke-dasharray", "10, 11");
        circle.setAttributeNS(null, "stroke-width", 2);
      }
}
