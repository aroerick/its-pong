import { SVG_NS } from "../settings";

export default class Player {

    constructor(boardHeight, width, height, x, y, up, down) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 16;
      this.score = 0;

      document.addEventListener("keydown", event => {
        switch (event.key) {
          case up:
            this.up();
            break;
          case down:
            this.down();
            break;
        }
      });
    }

    up() {
      this.y = Math.max(5, this.y - this.speed);
    }
    down() {
      this.y = Math.min(this.boardHeight - this.height - 5, this.y + this.speed)
    }

    render(svg) {
      let paddle = document.createElementNS(SVG_NS, "rect");
        paddle.setAttributeNS(null, "width", this.width);
        paddle.setAttributeNS(null, "height", this.height);
        paddle.setAttributeNS(null, "x", this.x);
        paddle.setAttributeNS(null, "y", this.y);
        paddle.setAttributeNS(null, "fill", "grey");

      svg.appendChild(paddle);
    }
  }