import {
    canvas
} from "src/app";
import {
    ctx
} from "src/app";
import {
    startFromScratch
} from "src/app";
import {
    player1
} from "src/app";
import {
    player2
} from "src/app";


export var ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: 3,
    vy: 1,
    radius: 6,
    color: 'black',
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 90, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

export function draw() {
    startFromScratch();
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    let ballVectorx = ball.x + ball.vx;
    let ballVectory = ball.y + ball.vy;
    if (ballVectory > canvas.height ||
        ballVectory < 0) {
        ball.vy = -ball.vy;
    }
    if (ballVectorx > 0) {
        ball.vx = -ball.vx;
    }
    if (ballVectorx < canvas.width) {
        ball.vx = -ball.vx;
    }

    if (ballVectorx > canvas.width) {
        player1.points++;
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    } else if (ballVectorx < 0) {
        player2.points++;
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    }


    if ((ballVectorx < player1.x)) {
        if (ballVectory >= player1.y && ballVectory <= player1.y + 7) {
            ball.vx = -ball.vx;
            ball.vy = -3;
        } else if (ballVectory >= player1.y && ballVectory <= player1.y + 14) {
            ball.vx = -ball.vx;
            ball.vy = -2;
        } else if (ballVectory >= player1.y && ballVectory <= player1.y + 21) {
            ball.vx = -ball.vx;
            ball.vy = -1;
        } else if (ballVectory >= player1.y && ballVectory <= player1.y + 28) {
            ball.vx = -ball.vx;
            ball.vy = 0;
        } else if (ballVectory >= player1.y && ballVectory <= player1.y + 35) {
            ball.vx = -ball.vx;
            ball.vy = 1;
        } else if (ballVectory >= player1.y && ballVectory <= player1.y + 42) {
            ball.vx = -ball.vx;
            ball.vy = 2;
        } else if (ballVectory >= player1.y && ballVectory <= player1.y + 49) {
            ball.vx = -ball.vx;
            ball.vy = 3;
        }
    }


    if ((ballVectorx > player2.x)) {
        if (ballVectory >= player2.y && ballVectory <= player2.y + 7) {
            ball.vx = -ball.vx;
            ball.vy = -3;
        } else if (ballVectory >= player2.y && ballVectory <= player2.y + 14) {
            ball.vx = -ball.vx;
            ball.vy = -2;
        } else if (ballVectory >= player2.y && ballVectory <= player2.y + 21) {
            ball.vx = -ball.vx;
            ball.vy = -1;
        } else if (ballVectory >= player2.y && ballVectory <= player2.y + 28) {
            ball.vx = -ball.vx;
            ball.vy = 0;
        } else if (ballVectory >= player2.y && ballVectory <= player2.y + 35) {
            ball.vx = -ball.vx;
            ball.vy = 1;
        } else if (ballVectory >= player2.y && ballVectory <= player2.y + 42) {
            ball.vx = -ball.vx;
            ball.vy = 2;
        } else if (ballVectory >= player2.y && ballVectory <= player2.y + 49) {
            ball.vx = -ball.vx;
            ball.vy = 3;
        }
    }
    window.requestAnimationFrame(draw);

    if (player1.points === 5) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.font = "25px 'Kdam Thmor Pro', sans-serif";
        ctx.fillText('Player One won the games', (canvas.width / 2) - 80, (canvas.height / 2));
    }
    if (player2.points === 5) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.font = "25px 'Kdam Thmor Pro', sans-serif";
        ctx.fillText('Player Two won the game', (canvas.width / 2) - 80, (canvas.height / 2));
    }
    return true;
}

