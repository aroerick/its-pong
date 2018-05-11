import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Player from "./Player";
import Ball from "./Ball";
import Score from "./Score"

export default class Game {

	constructor(element, width, height, spaceBar) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(this.element);

		this.board = new Board(
			this.width, 
			this.height
		
			
		);

		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 5;

		this.playerOne = new Player(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			"playerOne"
		);

		this.playerTwo = new Player(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight,
			(this.width - this.paddleWidth - this.boardGap),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			"playerTwo"
		);

		this.scoreOne = new Score (
			this.width / 2 - 50,
			30,
			30
		);
		this.scoreTwo = new Score (
			this.width / 2 + 50,
			30,
			30
		);

		this.radius = 8;

		this.ball = new Ball (
			this.radius,
			this.width,
			this.height
		);

		this.pause = false;

		document.addEventListener("keydown", event => {
			if (event.key == KEYS.spaceBar) {
				this.pause = !this.pause;						
			}
		});
	}

	render() {
		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = "";

		let svg = document.createElementNS(SVG_NS, "svg");
		svg.setAttributeNS(null, "width", this.width);
		svg.setAttributeNS(null, "height", this.height);
		svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.scoreOne.render(svg, this.playerOne.score);
		this.scoreTwo.render(svg, this.playerTwo.score);

		this.playerOne.render(svg);
		this.playerTwo.render(svg);
		this.ball.render(svg, this.playerOne, this.playerTwo);
	}

}
