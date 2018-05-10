import { SVG_NS } from "../settings"

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(this.element);
	}

	render() {
		// More code goes here...
	}

}