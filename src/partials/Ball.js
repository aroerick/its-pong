import { SVG_NS } from "../settings"

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.ping = [new Audio("../../public/sounds/pings/pong-01.wav"),
                    new Audio("../../public/sounds/pings/pong-02.wav"),
                    new Audio("../../public/sounds/pings/pong-03.wav"),
                    new Audio("../../public/sounds/pings/censor-beep-1.mp3"),
                    new Audio("../../public/sounds/pings/dun_dun_1.mp3"),
                    new Audio("../../public/sounds/pings/erro.mp3"),
                    new Audio("../../public/sounds/pings/incorrect.swf.mp3"),
                    new Audio("../../public/sounds/pings/magic_immune.mp3"),
                    new Audio("../../public/sounds/pings/movie_1.mp3"),
                    new Audio("../../public/sounds/pings/perfect-fart.mp3"),
                    new Audio("../../public/sounds/pings/shoryuken.mp3"),
                    new Audio("../../public/sounds/pings/tindeck_1.mp3")];
        this.boom = [new Audio("../../public/sounds/booms/070-challenge-lose.mp3"),
                    new Audio("../../public/sounds/booms/haha.swf.mp3"),
                    new Audio("../../public/sounds/booms/khaaan.swf.mp3"),
                    new Audio("../../public/sounds/booms/mlg-airhorn.mp3"),
                    new Audio("../../public/sounds/booms/nooo.swf.mp3"),
                    new Audio("../../public/sounds/booms/pong-04.wav"),
                    new Audio("../../public/sounds/booms/that_was_easy.mp3")];

        this.reset();
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while(this.vy === 0 ){
        this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));    
    }

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if(hitLeft || hitRight){
            this.vx *= -1;
        } else if(hitTop || hitBottom){
            this.vy *= -1;
        } 
    }
    paddleCollision(playerOne, playerTwo) {
        if (this.vx > 0) {
            let paddle = playerTwo.coordinates(
                playerTwo.x, 
                playerTwo.y,
                playerTwo.width,
                playerTwo.height
            );
            let [leftX, rightX, topY, bottomY] = paddle;
            if((this.x + this.radius >= leftX)
                && (this.x + this.radius <= rightX)
                && (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx *= -1;
                this.ping[Math.floor(Math.random() * 12)].play();
            }
        } else {
            let paddle = playerOne.coordinates(
                playerOne.x,
                playerOne.y,
                playerOne.width,
                playerOne.height
            );
            let [leftX, rightX, topY, bottomY] = paddle;
            if((this.x - this.radius <= rightX)
                && (this.x - this.radius >= leftX)
                && (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx *= -1;
                this.ping[Math.floor(Math.random() * 12)].play();
            }
        }
    }

    goooooal(player){
        player.score++;
        this.reset();
        this.boom[Math.floor(Math.random() * 7)].play(); 
    }

    render(svg, playerOne, playerTwo) {
        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(playerOne, playerTwo);

        let ball = document.createElementNS(SVG_NS, "circle");
        ball.setAttributeNS(null, "r", this.radius);
        ball.setAttributeNS(null, "fill", "white");
        ball.setAttributeNS(null, "cx", this.x);
        ball.setAttributeNS(null, "cy", this.y);

        svg.appendChild(ball);

        const leftGoal = this.x - this.radius <= 0;
        const rightGoal = this.x + this.radius >= this.boardWidth;

        if(leftGoal){
            this.goooooal(playerTwo);
            this.direction = -1;
        } else if (rightGoal){
            this.goooooal(playerOne);
            this.direction = 1;
        }
    }
}