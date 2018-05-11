import { SVG_NS } from "../settings";

export default class Player {

    constructor(boardHeight, width, height, x, y, up, down, player) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 8;
      this.score = 0;

      this.player = player;
      this.keyState = {};

      document.addEventListener("keydown", event => {
        this.keyState[event.key || event.which] = true;
        }, true);
      document.addEventListener("keyup", event => {
        this.keyState[event.key || event.which] = false;
        }, true);
    }

    up() {
      this.y = Math.max(5, this.y - this.speed);
    }
    down() {
      this.y = Math.min(this.boardHeight - this.height - 5, this.y + this.speed)
    }

    coordinates(x, y, width, height) {
      let leftX = x;
      let rightX = x + width;
      let topY = y;
      let bottomY = y + height;
      return [leftX, rightX, topY, bottomY];
    }

    render(svg) {

      if (this.keyState["a"] && this.player === "playerOne") {
        this.up();
      }
      if (this.keyState["z"] && this.player === "playerOne") {
        this.down();
      }
      if (this.keyState["ArrowUp"] && this.player === "playerTwo") {
        this.up();
      }
      if (this.keyState["ArrowDown"] && this.player === "playerTwo") {
        this.down();
      }

      let paddle = document.createElementNS(SVG_NS, "rect");
        paddle.setAttributeNS(null, "width", this.width);
        paddle.setAttributeNS(null, "height", this.height);
        paddle.setAttributeNS(null, "x", this.x);
        paddle.setAttributeNS(null, "y", this.y);
        paddle.setAttributeNS(null, "fill", "grey");

      svg.appendChild(paddle);
    }
  }